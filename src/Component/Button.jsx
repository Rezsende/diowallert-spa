export default function Buttom({type, text})
{
    return(
        <button
                type={type}
                className="px-4 py-2 rounded w-full font-bold text-white text-2x1 "
                >{text}</button>
    )
} 