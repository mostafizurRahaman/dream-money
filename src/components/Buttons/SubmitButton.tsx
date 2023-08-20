interface SubmitButtonType {
   validation: boolean;
   text: string;
}
const SubmitButton = ({ validation, text }: SubmitButtonType) => {
   console.log(validation); 
   return (
      <div className="flex items-center justify-center ">
         <button className={`${validation ? "bg-secondary" : "bg-blue-500 hover:scale-110"}  px-10 py-2 rounded-md text-xl font-medium text-white my-5`} disabled={validation ? true : false}>
            {text}
         </button>
      </div>
   );
};

export default SubmitButton;
