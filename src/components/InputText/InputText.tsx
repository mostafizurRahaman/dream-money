import { BsExclamation } from "react-icons/bs";
import { InputTextType } from "../../Configs/types";

const InputText = ({
   name,
   type,
   label,
   placeholder,
   error,
   onChange,
}: InputTextType) => {
   return (
      <div className="flex flex-col gap-1">
         <label className="text-base font-semibold text-secondary">{label}</label>
         <input
            className="w-full rounded-md border-0  -mb-1 p-2 text-base text-secondary placeholder:text-secondary"
            type={type}
            placeholder={placeholder}
            name={name}
            id={name}
            onChange={onChange}
         />
         {error && (
            <div className="flex items-center capitalize justify-start gap-1 text-secondary">
               <BsExclamation className="text-2xl"></BsExclamation>
               <p>{error}</p>
            </div>
         )}
      </div>
   );
};

export default InputText;
