export default  function Input({type, placeholder})
{
    return(

        <input 
                    type={type}
                    placeholder={placeholder}
                    className="rounded px-2 w-full h-10 text-sm " />

    );
}