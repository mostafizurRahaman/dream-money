import { ChangeEvent, FormEvent, ReactNode } from "react";
import { User, UserCredential } from "firebase/auth";
export interface childrenType {
   children: ReactNode;
}

// function types
export type ChangeInputType = (e: ChangeEvent<HTMLInputElement>) => void;
export type ChangeInputTextType = (e: ChangeEvent<HTMLTextAreaElement>) => void;
export type ChangeSelectionType = (e: ChangeEvent<HTMLSelectElement>) => void;
export type SaveUserType = (
   firstName: string,
   lastName: string,
   photoURL: string
) => void;

export type OnSubmitType = (e: FormEvent<HTMLFormElement>) => void;

// Dispatch Function types:
export type DispatchDataType = React.Dispatch<
   React.SetStateAction<RegisterType>
>;

//  Firebase Functions Types:

export type CreatUserType = (
   email: string,
   password: string
) => Promise<UserCredential>;
export type LoginUserType = (
   email: string,
   password: string
) => Promise<UserCredential>;
export type UpdateProfileInfoType = (
   displayName: string,
   photoURL: string
) => Promise<void>;
//  object types
export type inputType = {
   name: string;
   type: string;
   label: string;
   placeholder: string;
   error?: string;
};

export type loginType = {
   email: string;
   password: string;
};

export type loginErrorType = {
   email: string;
   password: string;
   general: string;
};
export type RegisterErrorType = {
   firstName: string;
   lastName: string;
   username: string;
   phone: string;
   confirm: string;
   gender: string;
   termsAndServies: string;
   profile: string;
} & loginErrorType;
export type RegisterType = {
   firstName: string;
   lastName: string;
   username: string;
   confirm: string;
   phone: string;
   gender: "male" | "female";
   termsAndServices: boolean;
   profile: string;
} & loginType;

export type InputTextType = {
   onChange: ChangeInputType;
} & inputType;
export type PrimaryButtonType = {
   path: string;
} & childrenType;

export type GenderSelectionType = {
   label: string;
   setData: DispatchDataType;
   data: RegisterType;
};

export type UploadImageType = {
   label: string;
   name: string;
   error: string;
   image?: string;
   onChange: ChangeInputType;
};

export type CheckBoxType = {
   handleCheckBox: ChangeInputType;
   checked: boolean;
};

export type AuthInfoType = {
   user: User | null;
   setUser: React.Dispatch<React.SetStateAction<User | null>>;
   userLoading: boolean;
   setUserLoading: React.Dispatch<React.SetStateAction<boolean>>;
   createUser: CreatUserType;
   LoginUser: LoginUserType;
   updateProfileInfo: UpdateProfileInfoType;
};

export interface InputPhoneNumberType {
   label: string;
   type: string;
   name: string;
   placeholder: string;
   onChange: ChangeInputType;
   error: string;
}
