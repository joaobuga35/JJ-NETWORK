import Card from "@/components/Card/card";
import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function Dashboard() {
  return (
    <>
      <Header></Header>
      <main className=" bg-white-100">
        <section className="bg-[url('../../assets/image.svg')] bg-cover bg-no-repeat bg-center h-image pt-[7.875rem] px-5 font-inter text-white-200 mb-[4rem]">
          <h1 className="mb-[1.438rem] font-semibold text-xl">
            Conectando você ao seu sonho!
          </h1>
          <p className="text-sm font-medium">
            Empresa especializada em marketing digital voltada a entregar
            performance aos clientes.
          </p>
        </section>

        <section className="px-5 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-8">
            <div className="font-mont text-center text-gray-500">
              <h2 className="font-semibold text-2xl mb-3">Contatos</h2>
              <p className="text-base">
                Visualize todos os seus contatos de maneira fácil e prática.
              </p>
            </div>
            <button>
              <AiOutlinePlusCircle className="w-10 h-10 text-blue" />
            </button>
          </div>
          <ul className="flex flex-col gap-10 p-10">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </ul>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
