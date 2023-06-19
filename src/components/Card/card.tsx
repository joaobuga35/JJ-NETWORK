/* eslint-disable @next/next/no-img-element */
import imageDefault from "../../assets/default.png";
import { useContext } from "react";
import { DashContext } from "@/contexts/dashContext";
import Image from "next/image";

interface ICardProps {
  id: string;
  name: string;
  phone: string;
  image: any;
}
export default function Card({ name, phone, image, id }: ICardProps) {
  const { setModalEdit, contacts, setFilterContacts } = useContext(DashContext);

  const filterAll = (id: string) => {
    const oneContact = contacts.filter((elem) => elem.id === id);
    setFilterContacts(oneContact);
  };
  return (
    <li className="card">
      <figure>
        {!image ? (
          <Image
            className="object-contain hover:object-scale-down w-[6.25rem] h-[6.25rem]"
            src={imageDefault}
            alt={name}
            width={200}
            height={200}
          />
        ) : (
          <img
            className="object-contain hover:object-scale-down w-[6.25rem] h-[6.25rem]"
            src={image}
            alt={name}
            width={200}
            height={200}
          />
        )}
      </figure>
      {name.length > 25 ? (
        <h2 className="w-full whitespace-nowrap overflow-hidden text-ellipsis">
          {name}
        </h2>
      ) : (
        <h2 className="whitespace-nowrap overflow-hidden text-ellipsis">
          {name}
        </h2>
      )}
      <span>{phone}</span>

      <button
        id={id}
        onClick={() => {
          filterAll(id);
          setModalEdit(true);
        }}
        className="btn-info"
      >
        Mais informações
      </button>
    </li>
  );
}
