import { Link } from "react-router-dom";
import Buttom from "../Component/Button"
import Input from "../Component/Input"
import logo  from "../assets/logow.png"
import { BiArrowBack } from "react-icons/bi";

export default function Signup() {
    return (
        <div className=" flex flex-col items-center justify-around bg-zinc-900 rounded p-6 w-[30rem] h-[25rem] relative">

           
           <Link to="/">   <BiArrowBack className="text-white top-3 left-3 text-2xl absolute hover:text-sky-600 " />             </Link>
           
            
            <img src={logo} alt="" className="w-40"/>

            {/* <h1 className=" text-white font-bold text-4xl py-5">Register</h1> */}

            <form className=" flex flex-col justify-center gap-4 w-full ">
                
            <Input type="name" placeholder="Name"/> 
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Password"/>
                <Buttom type="submit" text="Register"/>
                
            </form>
            {/* <p className="text-white text-lg">Dont't have an account? Register</p> */}
        </div>
    )
}