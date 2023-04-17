import { z } from "zod";

export const formRegisterExampleSchema = z
  .object({
    name: z.string().min(3, "Campo obrigatório"),
    email: z.string().min(1, "Campo obrigatório").email("Formato inválido"),
    password: z
      .string()
      .min(
        8,
        "Senha com no mínimo 8 caracteres. Necessário ter letras, números e ao menos um símbolo"
      )
      .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
      .regex(
        /(?=.*?[`~<>?,/!@#$%^&*()-_+="'|{};:])/,
        "É necessário pelo menos um símbolo especial, ex: @#$%^"
      ),
    confirm: z.string().min(8, "Campo obrigatório"),
    bio: z.string().min(10, "Campo obrigatório, mínimo 10 caracteres."),
    contact: z.string().min(8, "Campo obrigatório"),
    course_module: z.string().nonempty("Campo obrigatório")
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: "As senhas precisam ser iguais",
    path: ["confirm"],
  });
