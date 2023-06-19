"use client";
import { useContext } from "react";
import { destroyCookie } from "nookies";
import { AuthContext } from "@/contexts/authContext";
import { BsGlobe2 } from "react-icons/bs";
import { BiExit } from "react-icons/bi";
import { useRouter } from "next/navigation";

export default function Header() {
  const { setToast } = useContext(AuthContext);
  const router = useRouter();
  const removeCookie = () => {
    destroyCookie(null, "clientToken"), setToast(false);
    router.refresh();
  };

  return (
    <header className="header container-app">
      <h2 className="font-mont-bold font-semibold text-xl mb-7 uppercase flex items-center gap-2">
        jj network
        <BsGlobe2 className="w-5 h-5 text-blue" />
      </h2>
      <BiExit
        title="Sair"
        onClick={() => removeCookie()}
        className="w-7 h-7 text-blue cursor-pointer"
      />
    </header>
  );
}
