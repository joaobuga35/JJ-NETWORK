import Footer from "@/components/Footer/footer";
import LoginForm from "@/components/LoginForm/loginForm";

export default function Login() {
  return (
    <>
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
