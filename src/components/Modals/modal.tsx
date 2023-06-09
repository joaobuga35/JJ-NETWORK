"use client";
import { useContext } from "react";
import Input from "../Input/input";
import { DashContext } from "@/contexts/dashContext";
import { useForm } from "react-hook-form";
import { contactData, contactSchema } from "@/schemas/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ModalCreateContact() {
  const { modal, setModal } = useContext(DashContext);

  const { register, handleSubmit } = useForm<contactData>({
    resolver: zodResolver(contactSchema),
  });

  const submit = (formData: contactData) => {

    setModal(false);
  };
  return (
    <div className="modal-wrapper">
      <div className="modal-container">
        <div className="h-[40px] text-white-200 bg-blue flex justify-between items-center rounded-t px-4 mb-2">
          <h2 className="text-[16px]">Adicionar contato</h2>
          <button
            type="button"
            onClick={() => {
              setModal(false);
            }}
          >
            X
          </button>
        </div>
        <form noValidate onSubmit={handleSubmit(submit)} className="px-4">
          <Input
            id="name"
            label="Nome"
            type="text"
            placeholder="Digite o nome do contato"
            colorText="text-black"
            register={register("name")}
          />
          <Input
            id="email"
            label="E-mail"
            type="email"
            placeholder="Digite o e-mail do contato"
            colorText="text-black"
            register={register("email")}
          />
          <Input
            id="phone"
            label="Telefone"
            type="text"
            placeholder="(DDD) 00000-0000"
            colorText="text-black"
            register={register("phone")}
          />
          <Input
            id="image"
            label="Imagem(OPCIONAL)"
            type="text"
            placeholder="Imagem do contato"
            colorText="text-black"
            register={register("image")}
          />
          <div className="mb-4">
            <button
              className="btn-save"
              type="submit"
            >
              Salvar contato
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
