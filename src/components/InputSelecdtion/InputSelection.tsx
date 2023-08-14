import { useState } from "react";
import {  ChangeSelectionType, GenderSelectionType } from "../../Configs/types";


const InputSelection = ({label, data,  setData}: GenderSelectionType) => {
   const [options, setOptions ] = useState<['male', 'female']>(["male", "female"])
   const [selected, setSelected] = useState<"male" | "female">(options[0])

   const handleSelecdtion : ChangeSelectionType =(e) =>{
      let items : "male" | "female" 
      if(e.target.value ==="male" || e.target.value==="female"){
         items = e.target.value; 
         setSelected(items); 
         setData({...data, gender: selected})
      }
      
   }

   return (
      <div>
      <label className="text-base font-semibold text-secondary">{label}</label>
         <select className="w-full rounded-md border-0  -mb-1 p-2 text-base text-secondary placeholder:text-secondary"  onChange={handleSelecdtion} >
            {
               options.map((option:'male' | "female", idx:number) =><option  selected={selected === option} key={idx}  value={option} > {option}</option> )
            }
         </select>
      </div>
   );
};

export default InputSelection;