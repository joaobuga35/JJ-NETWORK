/* eslint-disable @next/next/no-img-element */
import { StaticImageData } from "next/image";
import Image from "next/image";
import naruto from "../../assets/naruto.png";
import { useContext } from "react";
import { DashContext } from "@/contexts/dashContext";
interface ICardProps {
  id: string;
  name: string;
  phone: string;
  image: any;
}
export default function Card({ name, phone, image, id }: ICardProps) {
  const { modalEdit, setModalEdit, contacts, setFilterContacts } =
    useContext(DashContext);
  const imageUrl = image || naruto;

  const filterAll = (id: string) => {
    const oneContact = contacts.filter((elem) => elem.id === id);
    setFilterContacts(oneContact);
  };
  return (
    <li className="card">
      <figure>
        <img
          className="object-contain hover:object-scale-down w-[6.25rem] h-[6.25rem]"
          src={imageUrl}
          alt={name}
          width={200}
          height={200}
        />
      </figure>

      <h2>{name}</h2>
      <span>{phone}</span>

      <button
        id={id}
        onClick={() => {
          filterAll(id)
          setModalEdit(true);
        }}
        className="btn-info"
      >
        Mais informações
      </button>
    </li>
  );
}
