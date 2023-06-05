import Link from "next/link";
import Input from "../Input/input";

export default function LoginForm() {
  return (
    <form>
      <h2 className="text-center text-white-200 text-xl font-bold">Login</h2>

      <Input
        id={"email"}
        type={"email"}
        placeholder={"Digite seu e-mail"}
        label={"E-mail"}
      ></Input>

      <Input
        id={"password"}
        type={"password"}
        placeholder={"Digite sua senha"}
        label={"Senha"}
      ></Input>

      <div className="flex flex-col justify-center items-center gap-4">
        <button className="btn-primary-blue" type="submit">
          Entrar
        </button>
        <span className="text-white-200 text-xs">
          Ainda não possui uma conta?
        </span>
        <Link className="btn-register" href={"/register"}>
          Cadastre-se
        </Link>
      </div>
    </form>
  );
}
