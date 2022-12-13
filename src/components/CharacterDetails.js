import { Link,useParams } from "react-router-dom";

const CharacterDeatils = (props) =>{
    const {characterId} = useParams();
    const character = props.characters.find(character =>{
        return character.id === parseInt(characterId);
    });

    if(character){
        return (
            <div>
                <Link className="character" to='/'>Volver</Link>
                <section className="itemDetails">
                    <img
                        src={character.image}
                        alt={`Foto de ${character.name}`}
                        className="imageDetail"
                    />
                    <h2 className="nameDetail">{character.name}</h2>
                    <p className="paragraphDetail">{character.status}</p>
                    <p className="paragraphDetail">{character.species}</p>
                    <p className="paragraphDetail">{character.origin}</p>
                    <p className="paragraphDetail">{character.totalEpisodes}</p>
                </section>
            </div>
        );  
    } else {
        return (
            <div>
                <Link className="character" to='/'>Volver</Link>
                <h2>No se ha encontrado el personaje{character}</h2>
            </div>
        )
    }
};

export default CharacterDeatils;