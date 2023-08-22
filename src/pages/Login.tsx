import { useContext, useRef, useState } from "react";
import SubmitButton from "../components/Buttons/SubmitButton";
import ErrorCom from "../components/ErrorCom/ErrorCom";
import InputText from "../components/InputText/InputText";
import {
   ChangeInputType,
   OnSubmitType,
   loginErrorType,
   loginType,
   url,
} from "../Configs/types";
import { AuthContext } from "../Contexts/AuthProvider";
import { useToken } from "../hooks/useToken";
import { useLottie } from "lottie-react";
import signUpImage from "../assets/SignUp.json";
const Login = () => {
   const { LoginUser } = useContext(AuthContext);
   const [loginEmail, setLoginEmail] = useState<string>("");
   const { token } = useToken(loginEmail as string);

   const [data, setData] = useState<loginType>({
      email: "",
      password: "",
   });

   const [errors, setErrors] = useState<loginErrorType>({
      email: "",
      password: "",
      general: "",
   });

   const formRef = useRef<HTMLFormElement | null>(null);
   const options = {
      animationData: signUpImage,
      loop: true,
   };

   const { View } = useLottie(options);
   const handleEmail: ChangeInputType = (e) => {
      const name: string = e?.target?.name;
      const value: string = e?.target?.value;
      if (value.length <= 0) {
         setErrors({ ...errors, [name]: `${name} shouldn't be empty` });
         setData({ ...data, [name]: "" });
      } else if (
         !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)
      ) {
         setErrors({ ...errors, [name]: `enter a valid ${name}` });
         setData({ ...data, [name]: "" });
      } else {
         setErrors({ ...errors, [name]: "" });
         setData({ ...data, [name]: value });
      }
   };

   const handlePassword: ChangeInputType = (e) => {
      const name: string = e.target.name;
      const value: string = e.target.value;
      if (value.length <= 0) {
         setErrors({ ...errors, [name]: "password shouldn'b be empty  " });
         setData({ ...data, [name]: "" });
      } else if (!/[A-Z]/.test(value)) {
         setErrors({ ...errors, [name]: "must have a  capital letter " });
         setData({ ...data, [name]: "" });
      } else if (!/[a-z]/.test(value)) {
         setErrors({ ...errors, [name]: "must  have a small letter " });
         setData({ ...data, [name]: "" });
      } else if (!/[0-9]/.test(value)) {
         setErrors({ ...errors, [name]: "must  have a digit" });
         setData({ ...data, [name]: "" });
      } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~]/.test(value)) {
         setErrors({ ...errors, [name]: "must  have a special character" });
         setData({ ...data, [name]: "" });
      } else if (value.length <= 8) {
         setErrors({
            ...errors,
            [name]: "password must be 8 character or more",
         });
         setData({ ...data, [name]: "" });
      } else {
         setErrors({ ...errors, [name]: "" });
         setData({ ...data, [name]: value });
      }
   };
   const handleLogin: OnSubmitType = (e) => {
      e.preventDefault();

      // login user function
      LoginUser(data.email, data.password)
         .then((res) => {
            if (res.user) {
               console.log(res.user);
               setLoginEmail(data.email);
            }
         })
         .catch((err) => {
            console.log(err);
         });
   };
   return (
      <main className="bg-primary px-10 py-10 flex lg:flex-row flex-col  items-center gap-5 ">
         <form
            onSubmit={handleLogin}
            ref={formRef}
            className="border-dotted border-2 rounded-lg border-secondary w-full  lg:w-1/2 px-10 py-5 grid grid-cols-1 gap-5"
         >
            <div className="text-center">
               <h3
                  onChange={(e) => console.log(e)}
                  className="text-4xl font-medium text-accent "
               >
                  Sign In Form
               </h3>
            </div>

            <InputText
               name="email"
               type="email"
               label="Your Email"
               placeholder="Enter your email"
               error={errors.email}
               onChange={handleEmail}
            ></InputText>

            <InputText
               name="password"
               type="password"
               label="Password"
               placeholder="Enter your password"
               error={errors?.password}
               onChange={handlePassword}
            ></InputText>
            <SubmitButton
               validation={!data.password || !data.email}
               text="Login now"
            ></SubmitButton>

            {errors.general && <ErrorCom>{errors.general}</ErrorCom>}
         </form>
         <div className=" w-full lg:w-1/2 flex items-center justify-center">
            {View}
         </div>
      </main>
   );
};

export default Login;
