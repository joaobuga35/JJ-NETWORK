import Input from "@/components/Input/input";
import Link from "next/link";

export default function Login() {
  return (
    <main className=" bg-white-100 flex justify-center items-center flex-col px-3.5">
      <h1 className="font-mont-bold font-semibold text-center text-xl mt-14 mb-7 uppercase">
        jj network
      </h1>

      <div className="w-80 h-25 md:w-96 md:px-8 backdrop-blur border-solid border-1 rounded px-4 py-9 border-gray-300 bg-gray-200">
        <form>
          <h2 className="text-center text-white-300 text-xl">Login</h2>

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
            <span className="text-white-200 text-xs">Ainda não possui uma conta?</span>
            <Link className="btn-register" href={"/register"}>Cadastre-se</Link>
          </div>
        </form>
      </div>
    </main>
  );
}
