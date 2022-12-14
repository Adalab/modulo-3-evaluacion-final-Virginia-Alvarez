import CharacterItem from "./CharacterItem";
import notFound from '../images/notFound.png';
const CharacterList =(props)=>{
    const characterElements = props.characters.map((character)=>{
        return <CharacterItem key={character.id} character={character}/>;
    });
    if (characterElements && characterElements.length >0){
        return(
            <section className='containerList'>
                <ul className='list'>{characterElements}</ul>
            </section>
        )
    } else {
        return (
            <section className='containerNotFound'>
                <p className='paragrpah'>Rick, esto me molesta mucho. Es muy duro enterarse de que no existe este personaje.</p>
                <img src={notFound} alt="Rick and Morty" className="imageNotFound"/>
            </section>
        )
    }
    };
export default CharacterList;