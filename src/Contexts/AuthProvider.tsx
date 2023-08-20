import React, { createContext, useState, useEffect } from "react";
import {
   AuthInfoType,
   CreatUserType,
   LoginUserType,
   UpdateProfileInfoType,
   childrenType,
} from "../Configs/types";
import {
   User,
   createUserWithEmailAndPassword,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   updateProfile,
} from "firebase/auth";
import { auth } from "../Configs/firebase.config";

export const AuthContext = createContext({} as AuthInfoType);

const AuthProvider = ({ children }: childrenType) => {
   const [user, setUser] = useState({} as User | null);
   const [userLoading, setUserLoading] = useState<boolean>(false);

   const createUser: CreatUserType = (email, password) => {
      setUserLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const LoginUser: LoginUserType = (email, password) => {
      setUserLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   const updateProfileInfo: UpdateProfileInfoType = (displayName, photoURL) => {
      return updateProfile(auth.currentUser as User, {
         displayName,
         photoURL,
      });
   };

   const authInfo: AuthInfoType = {
      user,
      setUser,
      userLoading,
      setUserLoading,
      createUser,
      LoginUser,
      updateProfileInfo, 
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         if (currentUser) {
            setUser(currentUser);
            setUserLoading(false);
         }
      });

      return () => unsubscribe();
   }, []);

   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   );
};

export default AuthProvider;
