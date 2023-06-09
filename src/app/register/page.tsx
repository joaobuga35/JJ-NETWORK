"use client";
import Footer from "@/components/Footer/footer";
import Link from "next/link";
import RegisterForm from "@/components/RegisterForm/registerForm";
import { useContext } from "react";
import { AuthContext } from "@/contexts/authContext";
import Alert from "@mui/material/Alert";

export default function Register() {
  const { toastRegister, setToastRegister, toastError, setToastError } =
    useContext(AuthContext);
  return (
    <>
      {toastError ? <Alert severity="error" onClose={() => {setToastError(false)}}>Email inválido!</Alert> : null}
      {toastRegister ? <Alert onClose={() => {setToastRegister(false)}}>Cadastro realizado com sucesso!</Alert> : null}
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
          <RegisterForm></RegisterForm>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
