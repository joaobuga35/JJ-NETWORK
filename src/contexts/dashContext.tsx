"use client";
import api from "@/services/api";
import { parseCookies } from "nookies";
import { Dispatch, ReactNode, SetStateAction, createContext } from "react";
import { useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

interface IContacts {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  image: string | null;
  clientId: string;
}

interface dashProviderData {
  contacts: IContacts[];
  setContacts: Dispatch<SetStateAction<IContacts[]>>;
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  modalEdit: boolean;
  setModalEdit: Dispatch<SetStateAction<boolean>>;
}

export const DashContext = createContext<dashProviderData>(
  {} as dashProviderData
);

export function DashProvider({ children }: Props) {
  const [contacts, setContacts] = useState<IContacts[]>([]);
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  const cookies = parseCookies();
  const token = cookies.clientToken;

  useEffect(() => {
    async function getContacts() {
      try {
        const response = await api.get<IContacts[]>("contacts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setContacts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getContacts();
  }, [token]);

  return (
    <DashContext.Provider
      value={{
        contacts,
        setContacts,
        modal,
        setModal,
        modalEdit,
        setModalEdit,
      }}
    >
      {children}
    </DashContext.Provider>
  );
}
