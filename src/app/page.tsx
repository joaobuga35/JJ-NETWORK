import Footer from "@/components/Footer/footer";
import LoginForm from "@/components/LoginForm/loginForm";
import { ToastContainer } from "react-toastify";

export default function Login() {
  return (
    <>
      <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
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
