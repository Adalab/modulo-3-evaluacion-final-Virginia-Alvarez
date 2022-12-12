import '../styles/App.scss';
import callToApi from '../services/api';
// import {Routes, Route, Link, NavLink} from 'react-router-dom';
import { useEffect, useState} from 'react';
import ls from '../services/localstorage';
import CharacterList from './CharacterList';
import CharacterItem from './CharacterItem';

function App() {
  // VARIABLES ESTADO
  const [dataCharacter,setDataCharacter] = useState([]);

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

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML
  const filteredCharacters = dataCharacter;

  // HTML EN EL RETURN

  return (
    <div className="App">
       <header className="header">
        <h1 className="title">Ricky y Morty</h1>
      </header>
      <main>
        <CharacterList characters = {filteredCharacters}/>



      </main>

      
    </div>
  );
}

export default App;
