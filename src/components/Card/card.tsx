/* eslint-disable @next/next/no-img-element */
import { StaticImageData } from "next/image";
import Image from "next/image";
import naruto from "../../assets/naruto.png";
interface ICardProps {
  name: string;
  phone: string;
  image: any
}
export default function Card({ name, phone, image}: ICardProps) {
  const imageUrl = image || naruto
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

      <button className="btn-info">Mais informações</button>
    </li>
  );
}
