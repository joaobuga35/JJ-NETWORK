"use client";
import Input from "../Input/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { clientData, clientSchema } from "@/schemas/client.schema";
import { useForm } from "react-hook-form";
import { AuthContext } from "@/contexts/authContext";
import { useContext } from "react";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<clientData>({
    mode: "onBlur",
    resolver: zodResolver(clientSchema),
  });
  const { register: registerUser } = useContext(AuthContext);
  const submit = (formData: clientData) => {
    registerUser(formData);
    console.log(formData);
  }
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
      {errors.name ? <p className="error">{errors.name.message}</p> : null}
      <Input
        id={"email"}
        type={"email"}
        placeholder={"Digite seu e-mail"}
        label={"E-mail"}
        register={register("email")}
      ></Input>
      {errors.email ? <p className="error">{errors.email.message}</p> : null}
      <Input
        id={"password"}
        type={"password"}
        placeholder={"Digite sua senha"}
        label={"Senha"}
        register={register("password")}
      ></Input>
      {errors.password ? (
        <p className="error">{errors.password.message}</p>
      ) : null}
      <Input
        id={"confirmPassword"}
        type={"password"}
        placeholder={"Digite sua senha novamente"}
        label={"Confirme sua Senha"}
        register={register("confirmPassword")}
      ></Input>
      {errors.confirmPassword ? (
        <p className="error">{errors.confirmPassword.message}</p>
      ) : null}
      <Input
        id={"phone"}
        type={"text"}
        placeholder={"Digite seu número (DDD) 00000-0000"}
        label={"Telefone"}
        register={register("phone")}
      ></Input>
      {errors.phone ? <p className="error">{errors.phone.message}</p> : null}
      <button className="btn-primary-blue" type="submit">
        Cadastrar
      </button>
    </form>
  );
}
