import { z } from "zod";

export const formLoginExampleSchema = z.object({
  email: z.string().min(1, "Campo obrigatório").email("Formato inválido"),
  password: z
    .string()
    .min(
      8,
      "Senha com no mínimo 8 caracteres."
    ),
});
