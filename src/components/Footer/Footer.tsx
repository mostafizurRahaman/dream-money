import { Link } from "react-router-dom";
const Footer = () => {
   return (
      <footer className="bg-primary py-20 ">
         <div className="flex items-start  ">
            <div className="w-2/4 px-10 flex flex-col gap-3">
               <h4 className="text-secondary text-2xl font-bold uppercase">
                  Dream Money
               </h4>
               <p className="text-accent text-lg mr-10 ">
                  Dream money is an microjob website. Where you can earn money
                  by completing any small task.
               </p>
            </div>
            <div className="w-1/4 flex flex-col gap-3">
               <h4 className="text-secondary text-2xl font-bold uppercase">
                  About Company
               </h4>
               <Link
                  className="text-accent text-base capitalize"
                  to="/find-jobs"
               >
                  jobs
               </Link>
               <Link className="text-accent text-base capitalize" to="/faqs">
                  faqs{" "}
               </Link>
               {/* <Link to="/blogs=">blogs</Link> */}
               <Link
                  className="text-accent text-base capitalize"
                  to="/contact-us"
               >
                  contact us
               </Link>
            </div>
            <div className="w-1/4  flex flex-col gap-3">
               <h4 className="text-secondary text-2xl font-bold uppercase">
                  Policy Pages
               </h4>
               <Link  className="text-accent text-base capitalize" to="/privacy-policy">Privacy Policy</Link>
               <Link  className="text-accent text-base capitalize" to="/terms-of-services">terms of services</Link>
               <Link  className="text-accent text-base capitalize" to="/refund-policy">refund policy</Link>
               <Link  className="text-accent text-base capitalize" to="/working-policy">working policy</Link>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
