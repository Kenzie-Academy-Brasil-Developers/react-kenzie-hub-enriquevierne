import { z } from "zod";

export const formEditTechExampleSchema = z.object({
  status: z.string().nonempty("Campo obrigatório"),
});
