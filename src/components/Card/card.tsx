import { StaticImageData } from "next/image";
import Image from "next/image";
import naruto from "../../assets/naruto.png";
interface ICardProps {
  name: string;
  phone: string;
}
export default function Card({ name, phone}: ICardProps) {
  return (
    <li className="card">
      <figure>
        <Image
          className="object-contain hover:object-scale-down w-[6.25rem] h-[6.25rem]"
          src={naruto}
          alt={name}
          width={100}
          height={100}
        />
      </figure>

      <h2>{name}</h2>
      <span>{phone}</span>

      <button className="btn-info">Mais informações</button>
    </li>
  );
}
