import { Link } from "react-router-dom";
import Buttom from "../Component/Button"
import Input from "../Component/Input"
import logo  from "../assets/logow.png"
import { useForm } from "react-hook-form"
import { BiArrowBack } from "react-icons/bi";

export default function Signup() {


    const {register, handleSubmit} = useForm();

    function hansubform(data)
    {
        console.log(data);
    }

    return (
        <div className=" flex flex-col items-center justify-around bg-zinc-900 rounded p-6 w-[30rem] h-[25rem] relative">

           
           <Link to="/">   <BiArrowBack className="text-white top-3 left-3 text-2xl absolute hover:text-sky-600 " />             </Link>
           
            
            <img src={logo} alt="" className="w-40"/>

          

            <form onSubmit={handleSubmit(hansubform)} className=" flex flex-col justify-center gap-4 w-full ">
                
                <Input type="name" placeholder="Name" register={register} name="name"/> 
                <Input type="email" placeholder="Email" register={register} name="email"/>
                <Input type="password" placeholder="Password" register={register} name="password"/>
                <Input type="password" placeholder="PasswordConfirm" register={register} name="passwordConfirm"/>
                <Buttom type="submit" text="Register"/>
                
            </form>
          
        </div>
    )
}