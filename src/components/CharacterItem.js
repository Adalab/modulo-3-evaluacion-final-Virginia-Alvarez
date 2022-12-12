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
    </li>
    )
}

export default CharacterItem;