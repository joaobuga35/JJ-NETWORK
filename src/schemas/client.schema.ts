import { z } from "zod";

export const clientSchema = z
  .object({
    name: z
      .string()
      .min(3, "O nome deve ter no mínimo 3 caracteres")
      .max(50, "O nome deve ter no máximo 50 caracteres")
      .nonempty("Nome é obrigatório"),
    email: z.string().email("Deve ser um e-mail válido"),
    password: z
      .string()
      .nonempty("A senha é obrigatória")
      .min(8, "A senha é obrigatória e precisa de no mínimo 8 caracteres")
      .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número"),
    confirmPassword: z.string().min(1, "É obrigatório confirmar a senha"),
    phone: z
      .string()
      .nonempty("O número é obrigatório")
      .max(15, "O número de telefone deve ter no máximo 15 caracteres"),
  })
  .refine(({ password, confirmPassword }) => confirmPassword === password, {
    message: "As senhas precisam ser iguais",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z.string().email("O email é obrigatório"),
  password: z.string().nonempty("A senha é obrigatória"),
});

export type loginData = z.infer<typeof loginSchema>;
export type clientData = z.infer<typeof clientSchema>;

