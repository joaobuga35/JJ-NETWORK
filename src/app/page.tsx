import Footer from "@/components/Footer/footer";
import Input from "@/components/Input/input";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <main className=" bg-white-100 flex justify-center items-center flex-col px-3.5 mb-40">
        <h1 className="font-mont-bold font-semibold text-center text-xl mt-14 mb-7 uppercase">
          jj network
        </h1>

        <div className="div-form">
          <form>
            <h2 className="text-center text-white-200 text-xl font-bold">
              Login
            </h2>

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
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
