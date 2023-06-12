import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(3, "O nome deve ter no mínimo 3 caracteres")
    .max(50, "O nome deve ter no máximo 50 caracteres")
    .nonempty("Nome é obrigatório"),
  email: z.string().email("Deve ser um e-mail válido"),
  phone: z
    .string()
    .nonempty("O número é obrigatório")
    .max(15, "O número de telefone deve ter no máximo 15 caracteres"),
  image: z.string().optional().nullable(),
});

export const contactEditSchema = contactSchema.partial();

export type contactData = z.infer<typeof contactSchema>;
export type contactEdit = z.infer<typeof contactEditSchema>;
