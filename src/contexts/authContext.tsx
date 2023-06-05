"use client";
import { clientData } from "@/schemas/client.schema";
import api from "@/services/api";
import { ReactNode, createContext, useContext } from "react";

interface Props {
  children: ReactNode;
}

interface authProviderData {
  register: (clientDatas: clientData) => void;
}

const AuthContext = createContext<authProviderData>({} as authProviderData);

export function AuthProvider({ children }: Props) {

     const register = async (clientDatas: clientData) => {
        try {
            const response = await api.post("/clients", clientDatas)
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }
  return <AuthContext.Provider value={{register}}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
