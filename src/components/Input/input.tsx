import { UseFormRegisterReturn } from "react-hook-form";

interface iDataInput {
    type: string;
    id: string;
    placeholder: string;
    label: string
    register?: UseFormRegisterReturn;
}


export default function Input({
  id,
  label,
  type,
  register,
  placeholder,
}: iDataInput) {
  return (
    <div className="mb-4 flex flex-col gap-4">
      <label className="text-white-300 text-xs" htmlFor={id}>{label}</label>
      <input
        className="w-full h-9 p-1 rounded outline-none"
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
      ></input>
    </div>
  );
}
