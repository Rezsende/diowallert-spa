import { Link } from "react-router-dom"
import Buttom from "../Component/Button"
import Input from "../Component/Input"
import logo from "../assets/logow.png"
import { useForm } from "react-hook-form"
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMensage from "../Component/ErroMensage"
import {signinShema} from "../schemas/SigninSchema"



export default function Signin() {


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(signinShema) });



    function hansubform(data) {
        console.log(data);
    }

    return (
        <div className=" flex flex-col items-center justify-around bg-zinc-900 rounded p-8 w-[30rem] ">

            <img src={logo} alt="" className="w-40 mb-8" />

            <form onSubmit={handleSubmit(hansubform)} className=" flex flex-col justify-center gap-4 w-full ">
                <Input type="email" placeholder="Email" register={register} name="email" />
                {errors.email && <ErrorMensage text={errors.email.message} />}
                <Input type="password" placeholder="Password" register={register} name="password" />
                {errors.email && <ErrorMensage text={errors.password.message} />}
                <Buttom type="submit" text="SIGNIN" />

            </form>
            <p className="text-white text-lg mt-8">Dont't have an account?  <Link className="text-sky-500  hover:text-sky-600 " to="/Signup">Register</Link></p>
        </div>
    )
}