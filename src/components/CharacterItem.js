import { Link } from "react-router-dom";

const CharacterItem = (props) =>{
    return (
        <li className='itemList'>
        <img 
            src={props.character.image} 
            alt={`Foto de ${props.character.name}`}
            className="image"
        />
        <h2 className="titleName">{props.character.name}</h2>
        <p className="paragraph">{`Especie ${props.character.specie}`}</p>
        <Link className="characterDetail" to ={`/character/${props.character.id}`}>Ver personaje</Link>
    </li>
    )
}

export default CharacterItem;