export default function Buttom({type, text})
{
    return(
        <button
                type={type}
                className="px-8   rounded w-full font-bold text-white text-lg  h-[2.8rem]   bg-gradient-to-r from-sky-500 to-indigo-500
                "
                >{text}</button>
    )
} 