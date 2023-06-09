import { AuthContext } from "@/contexts/authContext";
import { useContext } from "react";

export default function SectionName() {
  return (
    <section className="flex flex-col justify-center items-center border-b border-gray-300 pb-4 mb-6 font-mont">
      <h2 className="mb-1">Olá, !</h2>
      <p>Seja bem-vindo novamente.</p>
    </section>
  );
}
