
import { Link, useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Input from "../Component/Input";
import ErrorMensage from "../Component/ErroMensage";
import Button from "../Component/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { transactionSchema } from "../schemas/TransactionSchema";
import { createNewTransaction } from "../Services/transactnions";



export default function NewTransaction()
{
    const {type} = useParams();
    const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      formState: {errors},
    } = useForm({
      resolver: zodResolver(transactionSchema)
    });

  async  function onsubmitForm(data){
      try{

        const body = {...data, type}
        await createNewTransaction(body);
        navigate("/")
      }catch(e)
      {
        console.log(e)

      }
    }

  return <div className="flex flex-col items-center
  ustify-around bg-zinc-900 rounded p-8 gap-7 relative">


<header>
    <Link to="/">
    <BiArrowBack className="text-white absolute top-3 left-3 text-2xl"/>
    </Link>
    <h1 className="text-white font-bold text-5xl">New {type }</h1>
</header>



<form onSubmit={handleSubmit(onsubmitForm)} 
className=" flex flex-col justify-center gap-4 w-full text-2xl ">
                <Input type="number" placeholder="Value" register={register} name="value" />
                {errors.value && <ErrorMensage text={errors.value.message} />}
                <Input type="text" placeholder="Description" register={register} name="description" />
                {errors.description && <ErrorMensage text={errors.description.message} />}
                <Button type="submit" text="SAVE" />

            </form>

</div>

}