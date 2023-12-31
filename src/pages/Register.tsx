import { useState, useRef, useContext } from "react";
import {
   AddNewUserType,
   ChangeInputType,
   OnSubmitType,
   RegisterErrorType,
   RegisterType,
   SaveUserType,
   newUserType,
   url,
} from "../Configs/types";
import InputText from "../components/InputText/InputText";
import InputSelection from "../components/InputSelecdtion/InputSelection";
import UploadImage from "../components/UploadImage/UploadImage";
import SubmitButton from "../components/Buttons/SubmitButton";
import CheckBox from "../components/CheckBox/CheckBox";
import { useLottie } from "lottie-react";
import signUpImage from "../assets/SignUp.json";
import { AuthContext, auth } from "../Contexts/AuthProvider";
import { useToken } from "../hooks/useToken";
import { NavigateFunction, useNavigate } from "react-router-dom";
import ErrorCom from "../components/ErrorCom/ErrorCom";
import { sendEmailVerification } from "firebase/auth";

const Register = () => {
   const { createUser, user, updateProfileInfo } = useContext(AuthContext);
   const [loading, setLoading] = useState<boolean>(false);
   const [registerEmail, setRegisterEmail] = useState<string>("");
   const { token } = useToken(registerEmail);
   const [data, setData] = useState<RegisterType>({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phone: "",
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
      phone: "",
      username: "",
      password: "",
      confirm: "",
      gender: "",
      profile: "",
      termsAndServies: "",
      general: "",
   });

   const navigate: NavigateFunction = useNavigate();

   const formRef = useRef<HTMLFormElement | null>(null);
   const options = {
      animationData: signUpImage,
      loop: true,
   };

   const { View } = useLottie(options);
   
   if (token && user?.emailVerified) {
      navigate("/");
   }
   if (loading) {
      return (
         <h1 className="text-5xl font-bold text-secondary ">Loading........</h1>
      );
   }

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
         fetch(`${url}userchecking?username=${value}`)
            .then((res) => res.json())
            .then((userData) => {
               if (userData.isExist) {
                  setErrors({ ...errors, [name]: "user already exist" });
                  setData({ ...data, [name]: "" });
               } else {
                  setErrors({ ...errors, [name]: "" });
                  setData({ ...data, [name]: value });
               }
            })
            .catch((err) => {
               console.log(err);
            });
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
         fetch(`${url}userchecking?email=${value}`)
            .then((res) => res.json())
            .then((userData) => {
               if (userData.isExist) {
                  setErrors({ ...errors, [name]: "email already exist" });
                  setData({ ...data, [name]: "" });
               } else {
                  setErrors({ ...errors, [name]: "" });
                  setData({ ...data, [name]: value });
               }
            })
            .catch((err) => {
               console.log(err);
            });
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

   const handleUploadImage: ChangeInputType = (e) => {
      const formData: FormData = new FormData();
      const files: FileList | null = e.target.files;
      if (files) {
         const uploadImage = files[0];
         formData.append("image", uploadImage);
         fetch(
            `https://api.imgbb.com/1/upload?key=${
               import.meta.env.VITE_IMAGE_BB
            }`,
            {
               method: "POST",
               body: formData,
            }
         )
            .then((res) => res.json())
            .then((imgData) => {
               if (imgData.success) {
                  setData({ ...data, profile: imgData.data.url });
                  setErrors({ ...errors, profile: "" });
               } else {
                  setData({ ...data, profile: "" });
                  setErrors({ ...errors, profile: imgData.error.message });
               }
            })
            .catch((err) => console.log(err));
      }
   };

   const handleCheckBox: ChangeInputType = (e) => {
      setData({ ...data, termsAndServices: e.target.checked });
   };

   const handlePhoneNumber: ChangeInputType = (e) => {
      const name: string = e.target.name;
      const value: string = e.target.value;
      if (value.length <= 0) {
         setErrors({ ...errors, [name]: "phone number shouldn't be empty" });
         setData({ ...data, [name]: "" });
      } else if (value.length !== 11) {
         setErrors({ ...errors, [name]: "phone number must be 11 digits" });
         setData({ ...data, [name]: "" });
      } else if (!/^(013|014|015|016|017|018|019)\d{8}$/.test(value)) {
         setErrors({ ...errors, [name]: "enter a valid bangladeshi number" });
         setData({ ...data, [name]: "" });
      } else {
         fetch(`${url}userchecking?phone=${value}`)
            .then((res) => res.json())
            .then((userData) => {
               if (userData.isExist) {
                  setErrors({ ...errors, [name]: "phone already exist" });
                  setData({ ...data, [name]: "" });
               } else {
                  setErrors({ ...errors, [name]: "" });
                  setData({ ...data, [name]: value });
               }
            })
            .catch((err) => {
               console.log(err);
            });
      }
   };

   const {
      firstName,
      lastName,
      username,
      email,
      phone,
      password,
      confirm,
      gender,
      profile,
      termsAndServices,
   }: RegisterType = data;

   const handleRegister: OnSubmitType = (e) => {
      setLoading(true);
      setErrors({ ...errors, general: "" });
      e.preventDefault();
      if (password !== confirm) {
         setErrors({ ...errors, confirm: "password not matached" });
         setLoading(false);
         return;
      }

      createUser(email, password)
         .then((res) => {
            console.log(res); 
            saveUser(data.firstName, data.lastName, data.profile);
            if (auth.currentUser) {
               sendEmailVerification(auth.currentUser)
                  .then((res) => {
                     console.log(res);
                  })
                  .catch((err) => {
                     if (err) {
                        setErrors({ ...errors, general: err.message });
                     }
                  });
            }
         })
         .catch((err: any) => {
            if (err) {
               setLoading(false);
               setErrors({ ...errors, general: err.message });
            }
         })
         .finally(() => {
            setLoading(true);
         });
   };

   const saveUser: SaveUserType = (firstName, lastName, photoURL) => {
      updateProfileInfo(`${firstName + "" + lastName}`, photoURL)
         .then((res) => {
            setLoading(true);
            const newUser: newUserType = {
               firstName,
               lastName,
               username,
               phone,
               email,
               gender,
               profile,
               termsAndServices,
            };
            AddNewUser(newUser);
         })
         .catch((err) => {
            console.log(err);
            if (err) {
               setLoading(true);
               setErrors({ ...errors, general: err.message });
            }
         })
         .finally(() => {
            setLoading(false);
         });
   };

   const AddNewUser: AddNewUserType = (newUser) => {
      console.log(newUser);
      setLoading(true);
      fetch(`${url}users`, {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(newUser),
      })
         .then((res) => res.json())
         .then((userData) => {
            if (userData.acknowledged) {
               setRegisterEmail(email);
               setLoading(false);
               setData({ ...data, profile: "" });
               if (formRef.current) {
                  formRef.current.reset();
               }
            }
         })
         .catch((err) => {
            setLoading(false);
            console.log(err);
            if (err) {
               setErrors({ ...errors, general: err?.message });
            }
         })
         .finally(() => {
            setLoading(false);
         });
   };

   return (
      <main className="bg-primary px-10 py-10 flex lg:flex-row flex-col  items-center gap-5 ">
         <form
            onSubmit={handleRegister}
            ref={formRef}
            className="border-dotted border-2 rounded-lg border-secondary w-full  lg:w-1/2 px-10 py-5 grid grid-cols-2 gap-5"
         >
            <div className="col-span-2 text-center">
               <h3
                  onChange={(e) => console.log(e)}
                  className="text-4xl font-medium text-accent "
               >
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
               name="phone"
               type="text"
               label="Your Phone"
               placeholder="enter your phone number"
               error={errors?.phone}
               onChange={handlePhoneNumber}
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
               label="Password"
               placeholder="Enter your password"
               error={errors?.password}
               onChange={handlePassword}
            ></InputText>
            <InputText
               name="confirm"
               type="password"
               label="Confirm password"
               placeholder="Enter your confirm password"
               error={errors?.confirm}
               onChange={handlePassword}
            ></InputText>
            <InputSelection
               label="Your Gender"
               data={data}
               setData={setData}
            ></InputSelection>
            <div className="col-span-2 flex flex-col gap-3">
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
                  validation={
                     !firstName ||
                     !lastName ||
                     !email ||
                     !username ||
                     !password ||
                     !confirm ||
                     !phone ||
                     !(confirm === password) ||
                     !gender ||
                     !profile ||
                     !termsAndServices
                  }
                  text="Sign Up Now"
               ></SubmitButton>
               {errors.general && <ErrorCom>{errors.general}</ErrorCom>}
            </div>
         </form>
         <div className=" w-full lg:w-1/2 flex items-center justify-center">
            {View}
         </div>
      </main>
   );
};

export default Register;
