import { childrenType } from "../../Configs/types";

const Section = ({children}: childrenType) => {
   return (
      <section  className="px-10 py-20 bg-white">
         {children}
      </section>
   );
};

export default Section;