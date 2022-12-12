import '../styles/App.scss';
import callToApi from '../services/api';
// import {Routes, Route, Link, NavLink} from 'react-router-dom';
import { useEffect, useState} from 'react';
import ls from '../services/localstorage';
import CharacterList from './CharacterList';
import Filters from './Filters';

function App() {
  // VARIABLES ESTADO
  const [dataCharacter,setDataCharacter] = useState([]);
  const [filterName, setFilterName] = useState ('');


  // USEEFFECT ?

  useEffect(() =>{
    const cacheValue =ls.get('character');
    if(!cacheValue){
      callToApi().then((cleanData) => {     
          setDataCharacter(cleanData);
          ls.set('data', dataCharacter);      
      });
    }else{
      setDataCharacter(cacheValue);
    }
  }, []);

  // FUNCIONES HANDLER
  const handleFilterName = (ev) =>{
    setFilterName(ev.target.value)
  };

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML
  const filteredCharacters = dataCharacter
    .filter(dataCharacter =>{
      return dataCharacter.name.toUpperCase().includes(filterName.toUpperCase());
    });

  // HTML EN EL RETURN

  return (
    <div className="App">
       <header className="header">
        <h1 className="title">Ricky y Morty</h1>
      </header>
      <main>
        <CharacterList characters = {filteredCharacters}/>
        <Filters filterName={filterName} handleFilterName={handleFilterName} />



      </main>

      
    </div>
  );
}

export default App;
