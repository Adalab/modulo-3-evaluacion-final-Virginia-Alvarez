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
  const [dataCharacter,setDataCharacter] = useState([]);
  const [filterName, setFilterName] = useState ('');


  // USEEFFECT ?

  useEffect(() =>{
    const cacheValue =ls.get('data');
    if(!cacheValue){
      callToApi().then((cleanData) => {     
          setDataCharacter(cleanData);
          ls.set('data', cleanData);      
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
        <img className="title" src={logo} alt="Rick and Morty" />
      </header>
      <main className='main'>
        <Routes>
          <Route 
            path='/'
            element ={
              <>
                <Filters filterName={filterName} handleFilterName={handleFilterName} />
                <CharacterList characters = {filteredCharacters}/>
              </>
            }
          />
        <Route path='/character/:characterId' element={<CharacterDeatils characters={dataCharacter}/>} />  
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
