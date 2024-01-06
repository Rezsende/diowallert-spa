import { Link } from "react-router-dom";
import Buttom from "../Component/Button"
import Input from "../Component/Input"
import logo  from "../assets/logow.png"
import { useForm } from "react-hook-form"
import { BiArrowBack } from "react-icons/bi";
import z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";



const signinUpShema = z.object({
    name:z.string().min(3, "O nome precisar ter no minimo 3 caracteres!")
    .transform((name)=>{
        return name
        .trim().split(" ").map((word)=>{
            return word[0].toLocaleUpperCase().concat(word.substring(1));
        }).join(" ");
    }),
    email: 
    z.string()
    .email("Email invalido.")
    .nonempty("O Email é obrigatório.")
    .toLowerCase(),
    password: z.string().min(6, "A senha tem que ter no minimo 6 caracteres!"),
    ConfirmPassword: z.string


  });



export default function Signup() {


    const {register, 
        handleSubmit,
        formState:{errors}, 
    
    } = useForm({ resolver: zodResolver(signinUpShema)});

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
                { errors.email && <span className="text-white bg-red-700 p-4">{errors.email.message}</span>}
                <Input type="email" placeholder="Email" register={register} name="email"/>
                { errors.email && <span className="text-white bg-red-700 p-4">{errors.email.message}</span>}
                <Input type="password" placeholder="Password" register={register} name="password"/>
                { errors.email && <span className="text-white bg-red-700 p-4">{errors.email.message}</span>}
                <Input type="password" placeholder="ConfirmPassword" register={register} name="ConfirmPassword"/>
                { errors.email && <span className="text-white bg-red-700 p-4">{errors.email.message}</span>}
                <Buttom type="submit" text="Register"/>

                
            </form>
          
        </div>
    )
}