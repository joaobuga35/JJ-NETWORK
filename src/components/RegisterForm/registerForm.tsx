"use client";
import Input from "../Input/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { clientData, clientSchema } from "@/schemas/client.schema";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<clientData>({
    resolver: zodResolver(clientSchema),
  });

  const submit = (formData: clientData) => {
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="flex flex-col justify-center items-center gap-5 text-white-200 font-inter mb-5">
        <h2 className="text-base font-bold">Crie sua conta</h2>
        <span className="text-xs">Rapido e grátis, vamos nessa</span>
      </div>
      <Input
        id={"name"}
        type={"text"}
        placeholder={"Digite seu nome"}
        label={"Nome"}
        register={register("name")}
      ></Input>

      <Input
        id={"email"}
        type={"email"}
        placeholder={"Digite seu e-mail"}
        label={"E-mail"}
        register={register("email")}
      ></Input>

      <Input
        id={"password"}
        type={"password"}
        placeholder={"Digite sua senha"}
        label={"Senha"}
        register={register("password")}
      ></Input>

      <Input
        id={"confirmPassword"}
        type={"password"}
        placeholder={"Digite sua senha novamente"}
        label={"Confirme sua Senha"}
        register={register("confirmPassword")}
      ></Input>

      <Input
        id={"phone"}
        type={"text"}
        placeholder={"Digite seu número (DDD) 00000-0000"}
        label={"Telefone"}
        register={register("phone")}
      ></Input>

      <button className="btn-primary-blue" type="submit">
        Cadastrar
      </button>
    </form>
  );
}
