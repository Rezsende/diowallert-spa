export default  function Input(
    {
        type, placeholder, register, name})
{
    return(

        <input 
                    type={type}
                    placeholder={placeholder}
                    className="rounded px-2 w-full h-10 text-sm " 
                    {...register(name)}
                    />
                    
    );
}