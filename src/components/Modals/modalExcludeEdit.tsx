import { useContext } from "react";
import Input from "../Input/input";
import { DashContext } from "@/contexts/dashContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactData, contactEdit, contactSchema } from "@/schemas/contact.schema";
import { useForm } from "react-hook-form";


export default function ModalExcludeEdit() {
  const { modalEdit, setModalEdit,updateContact, filterContacts, deleteContact } = useContext(DashContext);
  const { register, handleSubmit } = useForm<contactEdit>({
    mode: "onSubmit",
    resolver: zodResolver(contactSchema),
    defaultValues:{
      name: filterContacts.length > 0 ? filterContacts[0].name : "",
      email: filterContacts.length > 0 ? filterContacts[0].email : "",
      phone: filterContacts.length > 0 ? filterContacts[0].phone : "",
      image: filterContacts.length > 0 ? filterContacts[0].image : ""
    }
  });

  const submit = (formData: contactEdit) => {
    updateContact(formData)
    setModalEdit(false);
  };
  return (
    <div className="modal-wrapper">
      <div className="modal-container">
        <div className="h-[40px] text-white-200 bg-blue flex justify-between items-center rounded-t px-4 mb-2">
          <h2 className="text-[16px]">Mais informações</h2>
          <button onClick={() => {setModalEdit(false)}}>X</button>
        </div>
        <form onSubmit={handleSubmit(submit)} className="px-4">
          <Input
            id="name"
            label="Nome"
            type="text"
            placeholder="Digite o nome do contato"
            colorText="text-black"
            register={register("name")}
          ></Input>
          <Input
            id="email"
            label="E-mail"
            type="email"
            placeholder="Digite o e-mail do contato"
            colorText="text-black"
            register={register("email")}
          ></Input>
          <Input
            id="phone"
            label="Telefone"
            type="text"
            placeholder="(DDD) 00000-0000"
            colorText="text-black"
            register={register("phone")}
          ></Input>
          <Input
            id="image"
            label="Imagem(OPCIONAL)"
            type="text"
            placeholder="Imagem do contato"
            colorText="text-black"
            register={register("image")}
          ></Input>
            <div className="mb-4 flex justify-between item-center">
              <button
                className="btn-save-edit"
                type="submit"
              >
                Salvar alterações
              </button>
              <button className="btn-exclude" onClick={() => {deleteContact(),setModalEdit(false)}}>Excluir contato</button>
            </div>
        </form>
      </div>
    </div>
  );
}
