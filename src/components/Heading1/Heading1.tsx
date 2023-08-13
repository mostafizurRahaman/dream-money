import { ReactNode } from "react";
import './Heading1.module.css'; 
interface Heading1Type {
   children: ReactNode;
}
const Heading1 = ({ children }: Heading1Type) => {
   return <h1 className=" heading1  uppercase space-y-5 text-5xl  font-bold text-secondary   ">{children}</h1>;
};

export default Heading1;
