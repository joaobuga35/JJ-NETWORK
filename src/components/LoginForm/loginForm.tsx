"use client"
import Link from "next/link";
import Input from "../Input/input";
import { useForm } from "react-hook-form";
import { loginData, loginSchema } from "@/schemas/client.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { AuthContext } from "@/contexts/authContext";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
  } = useForm<loginData>({
    resolver: zodResolver(loginSchema),
  });
  const { login, setToastRegister } = useContext(AuthContext);
  const submit = (formData: loginData) => {
    login(formData);
  }
  return (
    
    <form noValidate onSubmit={handleSubmit(submit)}>
      <h2 className="text-center text-white-200 text-xl font-bold">Login</h2>

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

      <div className="flex flex-col justify-center items-center gap-4">
        <button className="btn-primary-blue" type="submit">
          Entrar
        </button>
        <span className="text-white-200 text-xs">
          Ainda não possui uma conta?
        </span>
        <Link onClick={() => setToastRegister(false)} className="btn-register" href={"/register"}>
          Cadastre-se
        </Link>
      </div>
    </form>
  );
}
