import Input from "@/components/Input/input";
import Link from "next/link";

export default function Register() {
  return (
    <main className='flex justify-center'>
      <h1 className='font-mont-bold font-semibold text-xl mt-14 mb-7 uppercase'>jj network</h1>

      <div>
        <form>
          <h2>Crie sua conta</h2>
          <span>Rapido e grátis, vamos nessa</span>
          <Input
            id={"name"}
            type={"text"}
            placeholder={"Digite seu nome"}
            label={"Nome"}
          ></Input>

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

          <Input
            id={"confirmPassword"}
            type={"password"}
            placeholder={"Digite sua senha novamente"}
            label={"Confirme sua Senha"}
          ></Input>

          <Input
            id={"phone"}
            type={"text"}
            placeholder={"Digite seu numero (DDD) 00000-0000"}
            label={"Telefone"}
          ></Input>

            <button className="btn-primary-blue" type="submit">
              Cadastrar
            </button>
        </form>
      </div>
    </main>
  );
}
