import { BsExclamation } from "react-icons/bs";
import { childrenType } from "../../Configs/types";

const ErrorCom = ({ children }: childrenType) => {
   return (
      <div className="flex items-center capitalize justify-start gap-1 text-secondary">
         <BsExclamation className="text-2xl"></BsExclamation>
         <p className="text-sm ">{children}</p>
      </div>
   );
};

export default ErrorCom;
