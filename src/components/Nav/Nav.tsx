import { Link } from "react-router-dom";

const Nav = () => {
   // const [show, setShow] = useState<boolean>(false);
   return (
      <nav className="flex items-center px-10 justify-between bg-primary text-info uppercase h-20 border-b border-accent ">
         <div className="">
            <Link to="/">
               <h1 className="text-2xl font-bold italic text-white ">Dream Money</h1>
            </Link>
         </div>
         <div className="flex items-center gap-4">
            <Link to="/home" className=" text-secondary hover:text-white ">Home</Link>
            <Link to="/about-us" className=" text-secondary hover:text-white ">About Us</Link>
            <Link to="/tasks" className=" text-secondary hover:text-white ">Task</Link>
            <Link to="/dashboard" className=" text-secondary hover:text-white ">Dashboard</Link>          
         </div>
         <div className="flex items-center">
            <Link
               to="/login"
               className="px-5 py-2 rounded-sm bg-secondary text-accent hover:bg-white hover:text-black "
            >
               Sign in
            </Link>
            <Link
               to="/register"
               className="px-5 py-2 rounded-sm hover:bg-secondary hover:text-white text-black  bg-white "
            >
               Sign up
            </Link>
         </div>
      </nav>
   );
};

export default Nav;
