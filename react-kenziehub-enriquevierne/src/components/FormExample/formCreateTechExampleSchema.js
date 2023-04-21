import { z } from "zod";

export const formCreateTechExampleSchema = z.object({
  title: z.string().min(1, "Campo obrigatório"),
  status: z.string().nonempty("Campo obrigatório"),
});
