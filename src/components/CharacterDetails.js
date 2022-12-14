import { Link,useParams } from "react-router-dom";
import Morty from "./Morty";
import characterNotFound from '../images/characterNotFound.png';

const CharacterDeatils = (props) =>{
    const {characterId} = useParams();
    const character = props.characters.find(character =>{
        return character.id === parseInt(characterId);
    });

    if(character){
        return (
            <>
                <div className="characterContainer">
                    <Link className="character" to='/'>Volver</Link>
                    <section className="itemDetails">
                        <img
                            src={character.image}
                            alt={`Foto de ${character.name}`}
                            className="imageDetail" />
                        <div className="justifyContent">
                            <h2 className="nameDetail">{character.name}</h2>
                            <p className="paragraphDetail"><span className="span">Status: </span>{character.status}</p>
                            <p className="paragraphDetail"><span className="span">Species: </span>{character.specie}</p>
                            <p className="paragraphDetail"><span className="span">Origin: </span>{character.origin}</p>
                            <p className="paragraphDetail"><span className="span">Episodes: </span>{character.totalEpisodes}</p>
                        </div>
                    </section>
                </div>
                <Morty />
            </>
        );  
    } else {
        return (
            <>
                <div className="containerNotFoundCharacter">
                    <Link className="characterBack" to='/'>Volver</Link>
                    <div className="containerNotCharacter">
                        <h2 className="notFound">No me vas a creer, porque casi nunca pasa, pero cometí un error, no existe el personaje</h2>
                        <img className="imageCharacterNot" src={characterNotFound} alt="" />
                    </div>
                </div>
                <Morty />
            </>
        )
    }
};

export default CharacterDeatils;