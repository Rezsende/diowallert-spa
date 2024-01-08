import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
export default function Buttom({type, text, icon})

{
    let IconComponent;

    if(icon === "plus") IconComponent = BiPlusCircle
    if(icon === "minus") IconComponent = BiMinusCircle
    return(
        <button
                type={type}
                className="px-8   rounded w-full font-bold text-white text-lg  h-[2.8rem]   bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-center gap-2
                "
                >{IconComponent && <IconComponent/>} {text}   
                </button>
    )
} 