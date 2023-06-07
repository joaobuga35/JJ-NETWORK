"use client";
import { BsGlobe2 } from "react-icons/bs";
import { BiExit } from "react-icons/bi";
import Link from "next/link";
import { destroyCookie } from "nookies";
import { useContext } from "react";
import { AuthContext } from "@/contexts/authContext";

export default function Header() {
  const { setToast } = useContext(AuthContext);
  const removeCookie = () => {
    destroyCookie(null, "clientToken"), setToast(false);
  };

  return (
    <header className="header container-app">
      <h2 className="font-mont-bold font-semibold text-xl mb-7 uppercase flex items-center gap-2">
        jj network
        <BsGlobe2 className="w-5 h-5 text-blue" />
      </h2>
      <Link onClick={() => removeCookie()} href={"/"}>
        <BiExit className="w-7 h-7 text-blue" />
      </Link>
    </header>
  );
}
