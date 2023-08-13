import PrimaryButton from "../Buttons/PrimaryButton";
import Heading1 from "../Heading1/Heading1";
import styles from "./Banner.module.css";
import image from "../../assets/banner1.png";
const Banner = () => {
   return (
      <div
         className={`h-screen flex  bg-fixed items-center justify-center px-5 ${styles.Banner}`}
      >
         <div className="w-3/4 space-y-7 flex flex-col items-center  bg-primary bg-opacity-75 border border-white rounded-md i  p-5  ">
            <Heading1>
               <span className="text-white ">Start Earning</span> with Dream Money
            </Heading1>
            <p className="text-xl text-white ">
               Dream money is an microjob website. Where you can earn money by
               completing any small task.
            </p>
            <PrimaryButton path="/find-job">Find Jobs</PrimaryButton>
         </div>
      </div>
   );
};

export default Banner;
