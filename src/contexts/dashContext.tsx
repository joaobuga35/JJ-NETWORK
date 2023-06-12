"use client";
import api from "@/services/api";
import { parseCookies } from "nookies";
import { Dispatch, ReactNode, SetStateAction, createContext } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import jwt_decode from "jwt-decode";
import { contactData, contactEdit } from "@/schemas/contact.schema";

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
  registerContact: (contactsData: contactData) => void;
  updateContact: (contactData: contactEdit) => void;
  filterContacts: IContacts[];
  setFilterContacts: Dispatch<SetStateAction<IContacts[]>>;
  deleteContact: () => void
}

export const DashContext = createContext<dashProviderData>(
  {} as dashProviderData
);

export function DashProvider({ children }: Props) {
  const [contacts, setContacts] = useState<IContacts[]>([]);
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [user, setUser] = useState<string>("");
  const [filterContacts, setFilterContacts] = useState<IContacts[]>([]);

  const cookies = parseCookies();
  const token = cookies.clientToken;
  const id = filterContacts.map((elem) => elem.id)
  const router = useRouter();

  if (!token) {
    router.push("/");
  }

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
  }, [token, modal, modalEdit, contacts]);

  useEffect(() => {
    async function getUser() {
      try {
        let decoded: any = jwt_decode(token);
        let idUser: string = decoded.sub;
        const response = await api.get<IContacts>(`clients/${idUser}`, {
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
  }, [token]);

  const registerContact = async (contactsData: contactData) => {
    try {
      const response = await api.post("/contacts", contactsData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const updateContact = async (contactsData: contactEdit) => {
    try {
      const response = await api.patch(`/contacts/${id}`, contactsData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteContact = async () => {
    try {
      const response = await api.delete(`/contacts/${id}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
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
        registerContact,
        updateContact,
        filterContacts,
        setFilterContacts,
        deleteContact
      }}
    >
      {children}
    </DashContext.Provider>
  );
}
