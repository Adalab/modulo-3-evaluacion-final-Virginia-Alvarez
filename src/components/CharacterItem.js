import { Link } from "react-router-dom";

const CharacterItem = (props) =>{
    return (
        <li className='item'>
        <img 
            src={props.character.image} 
            alt={`Foto de ${props.character.name}`}
            className=""
        />
        <h2>{props.character.name}</h2>
        <p>{props.character.species}</p>
        <Link to ={`/character/${props.character.id}`}>Ver personaje</Link>
    </li>
    )
}

export default CharacterItem;