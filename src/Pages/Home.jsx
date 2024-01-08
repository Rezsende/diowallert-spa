import { Link } from "react-router-dom";
import logo from "../assets/logow.png"
import { GoSignIn } from "react-icons/go";
import Buttom from "../Component/Button";


export default function Home ()
{
    return (
        <main className=" flex flex-col items-center justify-center
         bg-zinc-900 rounded p-8 w-[60rem] h-[35rem] text-2xl">
        
        <header className="flex items-center justify-between w-full pb-4">
        <img src={logo} alt="Logo Dio Wallet" className="w-32" />
         
            <div className="flex items-center gap-4 text-white text-2xl">
                <h1>Olá. Fulano</h1>
                <Link to="/signin">
                <GoSignIn />
                </Link>
            </div>
        </header>
        <section className="bg-zinc-300 p-4 w-full h-full rounded flex
        items-center justify-center
        ">section</section>
        <footer className="w-full pt-2 flex gap-2 text-white 
        text-lg font-bold"
        >
            <Buttom type="button" text="New Input" icon="plus"/>
            <Buttom type="button" text="New Output" icon="minus"/>
        </footer>
        </main>
    )
}