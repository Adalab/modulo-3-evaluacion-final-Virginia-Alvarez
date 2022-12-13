import CharacterItem from "./CharacterItem";


const CharacterList =(props)=>{
    const characterElements = props.characters.map((character)=>{
        
        return <CharacterItem key={character.id} character={character}/>;
    });
    if (characterElements && characterElements.length >0){
        return(
            <section className='container'>
                <ul className='list'>{characterElements}</ul>
            </section>
        )
    } else {
        return (
            <section className=''>
                <p className=''>No se han encontrado resultados para la búsqueda</p>
            </section>
        )
    }
    };

export default CharacterList;