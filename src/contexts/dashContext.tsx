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
}

export const DashContext = createContext<dashProviderData>(
  {} as dashProviderData
);

export function DashProvider({ children }: Props){
    const [contacts, setContacts] = useState<IContacts[]>([]);

  useEffect(() => {
    async function getContacts() {
      const cookies = parseCookies();
      const token = cookies.clientToken;

      try {
        const response = await api.get<IContacts[]>('contacts', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setContacts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getContacts()
  },[])

    return (
        <DashContext.Provider value={{contacts, setContacts}}>{children}</DashContext.Provider>
    )
}