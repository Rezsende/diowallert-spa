




import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Button({ type, text, icon, transaction }) {
    let IconComponent;
    const navigate = useNavigate();

    if (icon === "plus") IconComponent = BiPlusCircle;
    if (icon === "minus") IconComponent = BiMinusCircle;

    return (
        <button
            type={type}
            className="px-8 rounded w-full font-bold text-white text-lg h-[2.8rem] bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-center gap-2"
            onClick={() => transaction && navigate(`/transaction/${transaction}`)}
        >
            {IconComponent && <IconComponent />} {text}
        </button>
    );
}
