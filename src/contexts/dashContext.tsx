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

interface IUser extends Omit<IContacts, "image" | "clientId"> {}

interface dashProviderData {
  contacts: IContacts[];
  setContacts: Dispatch<SetStateAction<IContacts[]>>;
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  modalEdit: boolean;
  setModalEdit: Dispatch<SetStateAction<boolean>>;
  user: string;
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

  // let decoded: any = jwt_decode(token);

  useEffect(() => {
    async function getContacts() {
      try {
        const response = await api.get<IContacts[]>("contacts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log(decoded)
        setContacts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    async function getUser() {
      try {
        const response = await api.get<IUser[]>("clients", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // const nameUser = response.data.find((elem) => {
        //   return elem.email === decoded.email;
        // });
        // setUser(nameUser!.name);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
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
        user,
      }}
    >
      {children}
    </DashContext.Provider>
  );
}
