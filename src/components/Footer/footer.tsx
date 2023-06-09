import { BsGlobe2 } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-blue h-14 flex items-center justify-between py-5 px-3 md:justify-center md:gap-4 ">
        <h2 className="text-gray-500 font-mont font-medium">Todos os direitos reservados.</h2>
        <BsGlobe2 className="text-white-200 h-6 w-6"/>
    </footer>
  );
}
