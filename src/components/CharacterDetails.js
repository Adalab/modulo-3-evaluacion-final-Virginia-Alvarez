import { Link,useParams } from "react-router-dom";

const CharacterDeatils = (props) =>{
    const {characterId} = useParams();
    const character = props.characters.find(character =>{
        return character.id === characterId;
    });

    if(character){
        return (
            <div>
                <Link to='/'>Volver</Link>
                <section>
                    <img
                        src={props.character.image}
                        alt={`Foto de ${props.character.name}`}
                        className=""
                    />
                    <h2>{props.character.name}</h2>
                    <p>{props.character.status}</p>
                    <p>{props.character.species}</p>
                    <p>{props.character.origin}</p>
                    <p>{props.character.totalEpisodes}</p>
                </section>
            </div>
        );  
    } else {
        return (
            <div>
                <Link to='/'>Volver</Link>
                <h2>No se ha encontrado el personaje{character}</h2>
            </div>
        )
    }
};

export default CharacterDeatils;