"use client"
import Footer from "@/components/Footer/footer";
import LoginForm from "@/components/LoginForm/loginForm";
import { AuthContext } from "@/contexts/authContext";
import Alert from '@mui/material/Alert';
import { useContext } from "react";

export default function Login() {
  const {toast, setToast, toastError, setToastError} = useContext(AuthContext)
  return (
    <>
      {toastError ? <Alert severity="error" onClose={() => {setToastError(false)}}>Email ou senha incorretos, tente novamente!</Alert> : null}
      {toast ? <Alert onClose={() => {setToast(false)}}>Login realizado com sucesso!</Alert> : null}
      <main className=" bg-white-100 flex justify-center items-center flex-col px-3.5 mb-40">
        <h1 className="font-mont-bold font-semibold text-center text-xl mt-14 mb-7 uppercase">
          jj network
        </h1>

        <div className="div-form">
          <LoginForm></LoginForm>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
