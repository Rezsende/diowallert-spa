import z from "zod";

export const signinUpShema = z.object({
    name:z.string().min(3, "O nome precisar ter no minimo 3 caracteres!")
    .transform((name)=>{
        return name
        .trim().split(" ").map((word)=>{
            return word[0].toLocaleUpperCase().concat(word.substring(1));
        }).join(" ");
    }),
    
    email: 
    z.string()
    .email("Email invalido.")
    .nonempty("O Email é obrigatório.")
    .toLowerCase(),
    
    password: z.string().min(6, "A senha tem que ter no minimo 6 caracteres!"),
    
    ConfirmPassword: z.string().min(6, "A senha precisa ter no minimmo6 caracteres!")


  }).refine((data) => data.password === data.ConfirmPassword, {
    message: "As senhas não corespodem!",
    path: ["ConfirmPassword"], 
  });