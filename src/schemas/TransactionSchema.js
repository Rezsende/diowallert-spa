import {z} from "zod";

export const transactionSchema = z.object({
    value:z.string().min(3, "O valor precisa ter no minimo 3 caractesres")
    .transform((value)=> Number(value)),
    description:z.string().min(3, "A descrição precisa ter no  minimo 3 caracteres")
});