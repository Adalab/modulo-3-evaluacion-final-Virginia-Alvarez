import CharacterItem from "./CharacterItem";


const CharacterList =(props)=>{
    const characterElements = props.characters.map((character)=>{
        
        return <CharacterItem key={character.id} character={character}/>;
    });
    return(
        <section className='container'>
            <ul className='list'>{characterElements}</ul>
        </section>
    )
    };

export default CharacterList;