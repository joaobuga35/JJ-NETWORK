import Footer from "@/components/Footer/footer";
import Input from "@/components/Input/input";
import Link from "next/link";

export default function Register() {
  return (
    <>
      <main className="flex justify-center items-center flex-col mb-10">
        <div className="mt-14 mb-7 flex max-w-xs justify-around gap-28 md:max-w-sm md:gap-44">
          <h1 className="font-mont-bold font-semibold text-xl uppercase">
            jj network
          </h1>
          <Link className="btn-back" href={"/"}>
            Voltar
          </Link>
        </div>
        <div className="div-form-register">
          <form>
            <div className="flex flex-col justify-center items-center gap-5 text-white-200 font-inter mb-5">
              <h2 className="text-base font-bold">Crie sua conta</h2>
              <span className="text-xs">Rapido e grátis, vamos nessa</span>
            </div>
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
              placeholder={"Digite seu número (DDD) 00000-0000"}
              label={"Telefone"}
            ></Input>

            <button className="btn-primary-blue" type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
