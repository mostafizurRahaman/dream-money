import { BsExclamation } from "react-icons/bs";
import { BiSolidCloudUpload } from "react-icons/bi";
import { UploadImageType } from "../../Configs/types";

const UploadImage = ({
   image,
   label,
   name,
   error,
   onChange,
}: UploadImageType) => {
   return (
      <div>
         <div>
            <label className="text-lg  text-secondary" htmlFor={name}>
               {label}
            </label>
            <div className="flex items-center justify-center gap-3 border rounded-lg h-40 border-white  p-2 ">
               <label
                  className="w-1/2 flex flex-col gap-0 items-center  justify-center border-dashed border-secondary h-full border-2 rounded-lg"
                  htmlFor={name}
               >
                  <BiSolidCloudUpload className="text-9xl text-secondary "></BiSolidCloudUpload>
                  <input
                     type="file"
                     className="text-secondary w-1/3 ml-3 flex items-center jusitfy-center  file:hidden"
                     name={name}
                     id={name}
                     onChange={onChange}
                  />
               </label>
               <div className=" w-1/2 h-full  rounded border-dashed border-2 border-secondary">
                  {image && <img src={image} alt={image} />}
               </div>
            </div>
         </div>
         {error && (
            <div className="flex items-center capitalize justify-start gap-1 text-secondary">
               <BsExclamation className="text-2xl"></BsExclamation>
               <p>{error}</p>
            </div>
         )}
      </div>
);
};

export default UploadImage;
