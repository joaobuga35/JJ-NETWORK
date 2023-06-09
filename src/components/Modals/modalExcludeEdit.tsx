import { useContext } from "react";
import Input from "../Input/input";
import { DashContext } from "@/contexts/dashContext";

interface Iname {
  nameModal: string;
}

export default function ModalExcludeEdit() {
  const { modalEdit, setModalEdit } = useContext(DashContext);
  return (
    <div className="modal-wrapper">
      <div className="modal-container">
        <div className="h-[40px] text-white-200 bg-blue flex justify-between items-center rounded-t px-4 mb-2">
          <h2 className="text-[16px]">Mais informações</h2>
          <button onClick={() => {setModalEdit(false)}}>X</button>
        </div>
        <form className="px-4">
          <Input
            id="name"
            label="Nome"
            type="text"
            placeholder="Digite o nome do contato"
            colorText="text-black"
          ></Input>
          <Input
            id="email"
            label="E-mail"
            type="email"
            placeholder="Digite o e-mail do contato"
            colorText="text-black"
          ></Input>
          <Input
            id="phone"
            label="Telefone"
            type="text"
            placeholder="(DDD) 00000-0000"
            colorText="text-black"
          ></Input>
          <Input
            id="image"
            label="Imagem(OPCIONAL)"
            type="text"
            placeholder="Imagem do contato"
            colorText="text-black"
          ></Input>
            <div className="mb-4 flex justify-between item-center">
              <button
                onClick={() => setModalEdit(false)}
                className="btn-save-edit"
                type="submit"
              >
                Salvar alterações
              </button>
              <button className="btn-exclude" onClick={() => setModalEdit(false)}>Excluir contato</button>
            </div>
        </form>
      </div>
    </div>
  );
}
