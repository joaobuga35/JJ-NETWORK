import Image from "next/image";
import naruto from "../../assets/naruto.png";
export default function Card() {
  return (
    <li className="card">
      <figure>
        <Image className="object-contain hover:object-scale-down w-[6.25rem] h-[6.25rem]" src={naruto} alt="narutinho" width={100} height={100} />
      </figure>

      <h2>Naruto</h2>
      <span>16 99225-5656</span>

      <button className="btn-info">Mais informações</button>
    </li>
  );
}
