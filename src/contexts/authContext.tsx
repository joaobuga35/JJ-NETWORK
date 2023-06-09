"use client";
import { clientData, loginData } from "@/schemas/client.schema";
import api from "@/services/api";
import { useRouter } from "next/navigation";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { setCookie } from "nookies";

interface Props {
  children: ReactNode;
}

interface authProviderData {
  register: (clientDatas: clientData) => void;
  login: (loginDatas: loginData) => void;
  toast: boolean;
  setToast: Dispatch<SetStateAction<boolean>>;
  toastError: boolean;
  setToastError: Dispatch<SetStateAction<boolean>>;
  toastRegister: boolean;
  setToastRegister: Dispatch<SetStateAction<boolean>>;
  toastRegisterError: boolean;
  setToastRegisterError: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<authProviderData>(
  {} as authProviderData
);

export function AuthProvider({ children }: Props) {
  const [toast, setToast] = useState(false);
  const [toastError, setToastError] = useState(false);
  const [toastRegisterError, setToastRegisterError] = useState(false);
  const [toastRegister, setToastRegister] = useState(false);
  const router = useRouter();

  const register = async (clientDatas: clientData) => {
    try {
      const response = await api.post("/clients", clientDatas);
      setToastRegister(true);
      setTimeout(() => {
        router.push("/");
      }, 500);
    } catch (error) {
      setToastError(true);
    }
  };

  const login = async (loginDatas: loginData) => {
    try {
      const response = await api.post("/auth", loginDatas);
      setToast(true);
      setCookie(null, "clientToken", response.data.token, {
        maxAge: 60 * 30,
        path: "/",
      });
      setTimeout(() => {
        router.push("/dashboard");
      }, 500);
    } catch (error) {
      setToastError(true);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        register,
        login,
        toast,
        setToast,
        toastError,
        setToastError,
        toastRegister,
        setToastRegister,
        toastRegisterError,
        setToastRegisterError
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
