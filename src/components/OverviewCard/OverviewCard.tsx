import { useEffect, useState } from "react";
import { BsBagCheckFill } from "react-icons/bs";

interface OverviewCardType {
   countEnd: number;
   title: string;
}
const OverviewCard = ({ countEnd,  title } : OverviewCardType) => {
   const [number, setNumber] = useState<number>(0);

   useEffect(() => {
      if (number === countEnd) {
         return;
      }
      const myInterval = setInterval(
         () => setNumber((number) => number + 1),
         10
      );

      return () => clearInterval(myInterval);
   }, [number, countEnd]);
   return (
      <article className=" flex relative before:w-20 before:h-20 before:rounded-full before:absolute before:top-5 overflow-hidden  before:left-5 before:-translate-x-1/2 before:-translate-y-1/2  before:block before:bg-secondary npm  flex-col gap-3 items-center justify-center w-[360px] bg-white shadow-xl rounded-lg  p-5">
         <BsBagCheckFill className="text-5xl text-center text-secondary"></BsBagCheckFill>
         <h2 className="text-6xl font-bold uppercase">{number}k+</h2>
         <h4 className=" text-secondary uppercase text-2xl font-bold ">{title}</h4>
      </article>
   );
};

export default OverviewCard;
