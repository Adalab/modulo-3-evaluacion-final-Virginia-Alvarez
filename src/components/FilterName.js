const FilterName = (props) =>{
    
    const handleChange = (ev) =>{
        props.handleFilterName(ev);
    };
    return (
        <>
         <label >Filtar por Nombre:</label>
            <input 
                type="text" 
                name="name"
                id= "name"
                value={props.filterName}
                onChange = {handleChange}
            
          />
        </>

    )
};

export default FilterName;