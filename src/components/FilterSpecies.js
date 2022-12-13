import iconAll from '../images/Photos.png';
import iconHuman from '../images/Reminders.png';
import iconAlien from '../images/Among-Us.png';

const FiltersSpecies = (props) => {
  const handleSelect = (ev) => {
    props.handleFilterSpecie(ev.target.dataset.id);
  };
  return (
    <div className='radioContainer'>
      <p className="labelName">Especie:</p>
      <label htmlFor="">
        <input
          type="radio"
          className="labelName"
          id=""
          name="All"
          value="All"
          checked={props.filterSpecie === "All"}
        />
        <img data-id="All" src={iconAll} alt="Todos" title="Todos" className='radioImage' onClick={handleSelect}/>
      </label>
      <label htmlFor="">
        <input
          type="radio"
          className=""
          id=""
          name="Human"
          value="Human"
          checked={props.filterSpecie === "Human"}
          
        />
        <img data-id="Human" src={iconHuman} alt="Human" title="Human" className='radioImage' onClick={handleSelect}/>
      </label>
      <label htmlFor="">
        <input
          type="radio"
          className=""
          id=""
          name="Alien"
          value="Alien"
          checked={props.filterSpecie === "Alien"}
        />
        <img data-id="Alien" src={iconAlien} alt="Alien" title="Alien" className='radioImage' onClick={handleSelect}/>
      </label>
    </div>
  );
};

export default FiltersSpecies;
