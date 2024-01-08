import z from "zod";
export  const  signinShema = z.object({
    email: z.string().nonempty("Email é obrigatório.").email().toLowerCase(),
    password: z.string().min(6, "A senha tem que ter no minimo 6 caracteres!"),
});