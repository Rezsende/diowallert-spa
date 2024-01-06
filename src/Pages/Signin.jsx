import { Link } from "react-router-dom"
import Buttom from "../Component/Button"
import Input from "../Component/Input"
import logo  from "../assets/logow.png"
import { useForm } from "react-hook-form"
import z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";


const signinShema = z.object({
    email: z.string().nonempty("Email é obrigatório.").email().toLowerCase(),
    password: z.string().min(6, "A senha tem que ter no minimo 6 caracteres!"),
  });
  
export default function Signin() {


    const {
    register, 
    handleSubmit, 
    formState:{errors}, 
} = useForm({ resolver: zodResolver(signinShema)});

   

    function hansubform(data)
    {
        console.log(data);
    }

    return (
        <div className=" flex flex-col items-center justify-around bg-zinc-900 rounded p-8 w-[30rem] h-[25rem]">

            <img src={logo} alt="" className="w-40"/>

            <form onSubmit={handleSubmit(hansubform)} className=" flex flex-col justify-center gap-4 w-full ">
                
                
                <Input type="email"  placeholder="Email" register={register} name="email"/>
               
                {console.log(errors)}

                { errors.email && <span className="text-white bg-red-700 p-4">{errors.email.message}</span>}

              
                <Input type="password" placeholder="Password" register={register} name="password"/>
                { errors.password && <span className="text-white bg-red-700 p-4">{errors.password.message}</span>}

                <Buttom type="submit" text="SIGNIN"/>
                
            </form>
            <p className="text-white text-lg">Dont't have an account?  <Link className="text-sky-500  hover:text-sky-600 " to="/Signup">Register</Link></p>
        </div>
    )
}