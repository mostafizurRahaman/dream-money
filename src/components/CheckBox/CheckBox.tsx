import { CheckBoxType } from "../../Configs/types";

const CheckBox = ({handleCheckBox, checked}:CheckBoxType) => {
   return (
      <div className="flex gap-2 text-lg items-center justify-center text-secondary ">
         <input
            type="checkbox"
            id="termsAndServices"
            onChange={handleCheckBox}
            checked={checked}
         />
         <label htmlFor="termsAndServices">
            agree with our <span>terms of services</span>
         </label>
      </div>
   );
};

export default CheckBox;
