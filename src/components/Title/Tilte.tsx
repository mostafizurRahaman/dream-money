import { childrenType } from "../../Configs/types";

const Tilte = ({ children }: childrenType) => {
   return (
      <div className="flex items-center justify-center">
         <h2 className="text-4xl font-semibold uppercase  text-primary border-b-2 pb-1  px-3 border-primary">
            {children}
         </h2>
      </div>
   );
};

export default Tilte;
