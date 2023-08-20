import { InputTextType } from "../../Configs/types";
import ErrorCom from "../ErrorCom/ErrorCom";

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
         <label className=" capitalize text-base font-semibold text-secondary">
            {label}
         </label>
         <input
            className="w-full placeholder:capitalize rounded-md border-0  -mb-1 p-2 text-base text-secondary placeholder:text-secondary"
            type={type}
            placeholder={placeholder}
            name={name}
            id={name}
            onChange={onChange}
         />
         {error && <ErrorCom> {error}</ErrorCom>}
      </div>
   );
};

export default InputText;
