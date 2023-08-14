import { useState } from "react";
import {
   ChangeInputType,
   RegisterErrorType,
   RegisterType,
} from "../Configs/types";
import InputText from "../components/InputText/InputText";
import InputSelection from "../components/InputSelecdtion/InputSelection";

const Register = () => {
   const [data, setData] = useState<RegisterType>({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirm: "",
      gender: "male",
      image: "",
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
      image: "",
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

   return (
      <main className="bg-primary ">
         <form className="w-3/5 px-10 py-5">
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
            <InputSelection
               label="Your Gender"
               data={data}
               setData={setData}
            ></InputSelection>
         </form>
      </main>
   );
};

export default Register;
