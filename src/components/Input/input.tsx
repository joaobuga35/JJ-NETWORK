import { UseFormRegisterReturn } from "react-hook-form";

interface iDataInput {
  type: string;
  id: string;
  placeholder: string;
  label: string;
  register?: UseFormRegisterReturn;
  colorText?: string;
}

export default function Input({
  id,
  label,
  type,
  register,
  placeholder,
  colorText,
}: iDataInput) {
  const color = colorText || "text-white-300";

  return (
    <div className="mb-4 flex flex-col gap-1">
      <label className={`${color} text-xs`} htmlFor={id}>
        {label}
      </label>
      <input
        className="w-full h-9 p-2 rounded outline-none border-blue ring-1 focus:border-blue focus:ring-2 focus:ring-blue"
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
      ></input>
    </div>
  );
}
