import '../styles/App.scss';
import logo from '../images/titulo.jpeg';
import callToApi from '../services/api';
import {Routes, Route} from 'react-router-dom';
import { useEffect, useState} from 'react';
import ls from '../services/localstorage';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDeatils from './CharacterDetails';

function App() {
  // VARIABLES ESTADO
  const [dataCharacters,setDataCharacters] = useState([]);
  const [filterName, setFilterName] = useState ('');
  const [filterSpecie, setFilterSpecie] = useState('All');


  // USEEFFECT ?

  useEffect(() =>{
    const cacheValue =ls.get('data');
    if(!cacheValue){
      callToApi().then((cleanData) => {     
          setDataCharacters(cleanData);
          ls.set('data', cleanData);      
      });
    }else{
      setDataCharacters(cacheValue);
    }
  }, []);

  // FUNCIONES HANDLER
  const handleFilterName = (ev) =>{
    setFilterName(ev.target.value)
  };

  const handleFilterSpecie = (value) =>{
    setFilterSpecie(value)
  };

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML
  const filteredCharacters = dataCharacters
    .filter((character) =>{
      return character.name.toUpperCase().includes(filterName.toUpperCase());
    })
    .filter((character) =>{
      if(filterSpecie === 'All'){
        return true;
      }else {
        return character.specie === filterSpecie
      }
    });


  // HTML EN EL RETURN

  return (
    <div className="App">
       <header className="header">
        <img className="title" src={logo} alt="Rick and Morty" />
      </header>
      <main className='main'>
        <Routes>
          <Route 
            path='/'
            element ={
              <>
                <Filters filterName={filterName} handleFilterName={handleFilterName} filterSpecie={filterSpecie} handleFilterSpecie={handleFilterSpecie}/>
                <CharacterList characters = {filteredCharacters}/>
              </>
            }
          />
        <Route path='/character/:characterId' element={<CharacterDeatils characters={dataCharacters}/>} />  
        </Routes>  
      </main>
      <footer className='footer'>
        <p className='blue'>Ev.Final Virginia Álvarez   &copy;Adalab</p>
        <p className='blue'> Si, bienvenido al club, amigo</p>
      </footer>
      

      
    </div>
  );
}

export default App;
