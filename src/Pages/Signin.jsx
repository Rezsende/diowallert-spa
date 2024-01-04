import Buttom from "../Component/Button"
import Input from "../Component/Input"
import logo  from "../assets/logo.png"
export default function Signin() {
    return (
        <div className=" flex flex-col items-center justify-around bg-zinc-900 rounded p-8 w-[35rem] h-[35rem]">

            <img src={logo} alt="" className="w-44"/>

            <form className=" flex flex-col justify-center gap-4 w-full text-2xl">
                
                
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Password"/>
                <Buttom type="submit" text="SIGNIN"/>
                
            </form>
            <p className="text-white text-2xl">Dont't have an account? Register</p>
        </div>
    )
}