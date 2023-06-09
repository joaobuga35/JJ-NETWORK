"use client";
import api from "@/services/api";
import { parseCookies } from "nookies";
import { Dispatch, ReactNode, SetStateAction, createContext } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import jwt_decode from "jwt-decode";
import { contactData } from "@/schemas/contact.schema";

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

interface IUser extends Omit<IContacts, "image" | "clientId"> {}

interface dashProviderData {
  contacts: IContacts[];
  setContacts: Dispatch<SetStateAction<IContacts[]>>;
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  modalEdit: boolean;
  setModalEdit: Dispatch<SetStateAction<boolean>>;
  user: string;
  registerContact: (contactsData: contactData) => void
}

export const DashContext = createContext<dashProviderData>(
  {} as dashProviderData
);

export function DashProvider({ children }: Props) {
  const [contacts, setContacts] = useState<IContacts[]>([]);
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [user, setUser] = useState<string>("");

  const cookies = parseCookies();
  const token = cookies.clientToken;
  const router = useRouter()


  useEffect(() => {
    if(!token){
      router.push("/")
    }
    let decoded: any = jwt_decode(token);
    let idUser: string = decoded.sub
  
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
    async function getUser() {
      try {
        const response = await api.get<IUser>(`clients/${idUser}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data.name);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
    getContacts();
  }, [token, modal, modalEdit, router]);

  const registerContact = async (contactsData: contactData) => {
    try {
      const response = await api.post("/contacts", contactsData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <DashContext.Provider
      value={{
        contacts,
        setContacts,
        modal,
        setModal,
        modalEdit,
        setModalEdit,
        user,
        registerContact
      }}
    >
      {children}
    </DashContext.Provider>
  );
}
