const FilterName = (props) =>{
    
    const handleChange = (ev) =>{
        props.handleFilterName(ev);
    };
    return (
        <>
            <label className="labelName" >Filtar por Nombre:</label>
            <input 
                type="text" 
                name="name"
                id= "name"
                value={props.filterName}
                onChange = {handleChange}
                className="inputName"
                placeholder ="Ej: Morty"  
            />
        </>

    )
};

export default FilterName;