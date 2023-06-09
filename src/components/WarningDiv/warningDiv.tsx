import { CiWarning } from "react-icons/ci";
export default function WarningDiv() {
  return (
    <div className="px-0.5 w-[100%] h-[24rem] md:w-[100%] lg:w-[100%] bg-gray-100 mb-10 mt-10 flex flex-col justify-center items-center container-app">
        <CiWarning className="h-10 w-10 text-red-500"/>
        <h1 className="text-sm md:text-xl">Você ainda não possui contatos cadastrados!</h1>
    </div>
  )
}
