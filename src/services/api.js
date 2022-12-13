const callToApi = ()=>{
    return fetch ('https://rickandmortyapi.com/api/character')     
    .then ((response) => response.json())
    .then ((response) =>{
        const cleanData= response.results.map ((character)=>{
            return{
                id: character.id,
                image: character.image,
                name: character.name,
                specie: character.species,
                status: character.status,
                origin: character.origin.name,
                totalEpisodes: character.episode.length  //character.episode ? character.episode.length : 0
            }
        });
        return cleanData.sort(
            (a, b) => {
                if ( a.name < b.name ){
                    return -1;
                }
                if ( a.name > b.name ){
                return 1;
                }
                return 0;
            }
        );
    })

};

export default callToApi;