import { Character } from '../models/character'
import { IoMdFemale, IoMdMale } from "react-icons/io";
interface Props {
    character: Character;

}

export const CharacterCard = ({character}: Props) => {
    const {name, image, gender, species,status} = character;
    const bgColor = status === 'Dead' ? 'bg-red-500' :  status === 'Alive' ? 'bg-green-500': 'bg-blue-500';
  return (
    <div className='bg-white shadow-md  flex flex-col items-center justify-center relative' >
   
        <img src={image} alt={name} className="w-full h-auto "/>
        <p className='text-black'>Nombre: {name}</p> 
       <div className='flex items-center justify-between'><p>Sexo: </p> {gender == 'Female' ? <IoMdFemale className='text-rose-400'/> : gender == 'Male'  ? <IoMdMale className='text-blue-700' /> : 'Desconocido' } </div>
       <p>Especie: {species}</p>
       {/* usando ternario */}
        <span className = {`absolute top-0 right-0 rounded-bl-md p-1 text-white font-bold text-sm ${bgColor}`}>{status}</span>
    </div>
  )
}
