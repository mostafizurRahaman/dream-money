import { useState } from "react";
import {
   ChangeInputType,
   RegisterErrorType,
   RegisterType,
   UploadImageType,
} from "../Configs/types";
import InputText from "../components/InputText/InputText";
import InputSelection from "../components/InputSelecdtion/InputSelection";
import UploadImage from "../components/UploadImage/UploadImage";
import SubmitButton from "../components/Buttons/SubmitButton";
import CheckBox from "../components/CheckBox/CheckBox";
import { useLottie } from "lottie-react";
import signUpImage from "../assets/SignUp.json"; 
const Register = () => {

   const [data, setData] = useState<RegisterType>({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirm: "",
      gender: "male",
      profile: "",
      termsAndServices: false,
   });

   const [errors, setErrors] = useState<RegisterErrorType>({
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirm: "",
      gender: "",
      profile: "",
      termsAndServies: "",
      general: "",
   });

   const handleName: ChangeInputType = (e) => {
      const name: string = e?.target?.name;
      const value: string = e?.target.value;

      if (value.length <= 0) {
         setErrors({ ...errors, [name]: "name shouldn't be empty" });
         setData({ ...data, [name]: "" });
      } else {
         setErrors({ ...errors, [name]: "" });
         setData({ ...data, [name]: value });
      }
   };

   const handleUserName: ChangeInputType = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      if (value.length <= 0) {
         setErrors({ ...errors, [name]: `${name} shouldn't be empty` });
         setData({ ...data, [name]: "" });
      } else if (!/^[a-zA-Z0-9_]{3,20}$/.test(value)) {
         setErrors({ ...errors, [name]: "enter a valid user name" });
         setData({ ...data, [name]: "" });
      } else {
         setErrors({ ...errors, [name]: "" });
         setData({ ...data, [name]: value });
      }
   };
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
   console.log(data, errors);
   const handleUploadImage: ChangeInputType = (e) => {
      const name: string = e.target.name;
   };

   const handleCheckBox: ChangeInputType = (e) => {
      setData({ ...data, termsAndServices: e.target.checked });
   };

   const options = {
      animationData: signUpImage,
      loop: true
    };

    const {View }  = useLottie(options); 

   return (
      <main className="bg-primary px-10 py-10 flex items-center gap-5 ">
         <form className="border-dotted border-2 rounded-lg border-secondary w-1/2 px-10 py-5 grid grid-cols-2 gap-5">
            <div className="col-span-2 text-center">
               <h3 className="text-4xl font-medium text-accent ">
                  Sign Up Form
               </h3>
            </div>
            <InputText
               name="firstName"
               type="text"
               label="First Name"
               placeholder="Enter your first name"
               error={errors.firstName}
               onChange={handleName}
            ></InputText>
            <InputText
               name="lastName"
               type="text"
               label="Last Name"
               placeholder="Enter your last name"
               error={errors.lastName}
               onChange={handleName}
            ></InputText>
            <InputText
               name="username"
               type="text"
               label="Username"
               placeholder="Enter your usename"
               error={errors.username}
               onChange={handleUserName}
            ></InputText>
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
               label="Your Password"
               placeholder="Enter your password"
               error={errors?.password}
               onChange={handlePassword}
            ></InputText>
            <InputText
               name="confirm"
               type="confirm"
               label="Your confirm password"
               placeholder="Enter your confirm password"
               error={errors?.confirm}
               onChange={handlePassword}
            ></InputText>
            <div className="col-span-2 flex flex-col gap-3">
               <InputSelection
                  label="Your Gender"
                  data={data}
                  setData={setData}
               ></InputSelection>
               <UploadImage
                  onChange={handleUploadImage}
                  label="Your photo"
                  name="profile"
                  image={data.profile && data.profile}
                  error={errors.profile}
               ></UploadImage>
               <CheckBox
                  handleCheckBox={handleCheckBox}
                  checked={data.termsAndServices}
               ></CheckBox>
               <SubmitButton
                  validation={true}
                  text="Sign Up Now"
               ></SubmitButton>
            </div>
         </form>
         <div className=" flex items-center justify-center">
            {
               View
            }
         </div>
      </main>
   );
};

export default Register;
