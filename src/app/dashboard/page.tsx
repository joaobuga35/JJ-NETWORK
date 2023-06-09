"use client";
import Card from "@/components/Card/card";
import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";
import ModalCreateContact from "@/components/Modals/modal";
import SectionName from "@/components/SectionName/sectionName";
import WarningDiv from "@/components/WarningDiv/warningDiv";
import { DashContext } from "@/contexts/dashContext";
import { useContext, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function Dashboard() {
  const { contacts, modal, setModal,modalEdit } = useContext(DashContext);

  return (
    <>
      {modal ? <ModalCreateContact nameModal="Adicionar contato"></ModalCreateContact> : null}
      {modalEdit ? <ModalCreateContact nameModal="Mais informações"></ModalCreateContact> : null}
      <Header></Header>
      <main className=" bg-white-100 mb-14">
        <section className="bg-[url('../../assets/image.svg')] bg-cover bg-no-repeat bg-center lg:bg-fixed h-image pt-[7.875rem] px-5 font-inter text-white-200 mb-[1rem] lg:pt-[6rem] lg:h-80">
          <h1 className="mb-[1.438rem] font-semibold text-xl lg:text-4xl container-app lg:mb-4">
            Conectando você ao seu sonho!
          </h1>
          <p className="text-sm font-medium lg:text-lg container-app">
            Empresa especializada em marketing digital, voltada a entregar
            performance aos clientes.
          </p>
        </section>
        <SectionName></SectionName>
        <section className="px-5 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-8 lg:flex-row container-app">
            <div className="font-mont text-center text-gray-500">
              <h2 className="font-semibold text-2xl mb-3">Contatos</h2>
              <p className="text-base">
                Visualize todos os seus contatos de maneira fácil e prática.
              </p>
            </div>
            <button onClick={() => setModal(true)}>
              <AiOutlinePlusCircle className="w-10 h-10 text-blue" />
            </button>
          </div>
          {contacts.length === 0 ? (
            <WarningDiv></WarningDiv>
          ) : (
            <ul className="flex flex-col gap-10 p-10 container-app lg:flex-row lg:flex-wrap">
              {contacts.map((contact) => (
                <Card
                  key={contact.id}
                  name={contact.name}
                  phone={contact.phone}
                  image={contact.image}
                ></Card>
              ))}
            </ul>
          )}
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
