import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logow.png"
import { GoSignIn } from "react-icons/go";
import Buttom from "../Component/Button";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { userLogged } from "../Services/user";
import { findAllTransaction } from "../Services/transactnions";

export default function Home ()
{
    const navigate = useNavigate();
    const [ user, setUser] = useState({});
    const [ transections, SetTransections] = useState({});
    
    function validateToken()
    {
        // Cookies.remove("token")
        const token  = Cookies.get("token")
        if(!token) navigate("/signin")
    }
    
 async   function getUserLogged(){
        try{

            const userResponse = await userLogged();
            
            setUser(userResponse.data);

        }catch(e)
        {
            console.log(e)
        }
    }

async function getAllTransections(){
    try{
      const response =  await findAllTransaction();
      SetTransections(response.data);
    }catch(error)
    {
        console.log(error);
    }
}
    
    useEffect(()=>
    {
        validateToken();
        getUserLogged();
        getAllTransections();
    }, [])
    return (
        <main className=" flex flex-col items-center justify-center
         bg-zinc-900 rounded p-8 w-[60rem] h-[35rem] text-2xl">
        
        <header className="flex items-center justify-between w-full pb-4">
        <img src={logo} alt="Logo Dio Wallet" className="w-32" />
         
            <div className="flex items-center gap-4 text-white text-2xl">
                <h1>Olá. {user.name}</h1>
                <Link to="/signin">
                <GoSignIn />
                </Link>
            </div>
        </header>
        <section className="bg-zinc-300 p-4 w-full h-full rounded flex
        items-center justify-center">
            
            { transections.length ?(<p>Tem Alguma coisa</p>): (<p>There is no check-in or check-out</p>)}
            
            </section>
        <footer className="w-full pt-2 flex gap-2 text-white 
        text-lg font-bold"
        >
            <Buttom type="button" text="New Input" icon="plus" transaction="input"/>
            <Buttom type="button" text="New Output" icon="minus" transaction="output"/>
        </footer>
        </main>
    )
}