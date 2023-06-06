"use client";
import Toast from "@/components/Toast/toast";
import { clientData, loginData } from "@/schemas/client.schema";
import api from "@/services/api";
import { useRouter } from "next/navigation";
import { ReactNode, createContext, useContext } from "react";
import { parseCookies, setCookie } from "nookies";

interface Props {
  children: ReactNode;
}

interface authProviderData {
  register: (clientDatas: clientData) => void;
  login: (loginDatas: loginData) => void;
}

export const AuthContext = createContext<authProviderData>(
  {} as authProviderData
);

export function AuthProvider({ children }: Props) {
  const router = useRouter();
  const register = async (clientDatas: clientData) => {
    try {
      const response = await api.post("/clients", clientDatas);
      Toast({ message: "usuário cadastrado com sucesso!", isSucess: true });
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error(error);
      Toast({ message: "Erro ao criar usuário, tente utilizar outro e-mail!" });
    }
  };

  const login = async (loginDatas: loginData) => {
    try {
      const response = await api.post("/auth", loginDatas);
      setCookie(null, "clientToken", response.data.token, {
        maxAge: 60 * 30,
        path: "/",
      });
      const cookies = parseCookies();
      const token: string = String(cookies.clientToken);
      Toast({ message: "login realizado com sucesso!", isSucess: true });
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
      Toast({
        message:
          "Erro ao logar, verifique e o e-mail e a senha estão corretos !",
      });
    }
  };
  return (
    <AuthContext.Provider value={{ register, login }}>
      {children}
    </AuthContext.Provider>
  );
}
