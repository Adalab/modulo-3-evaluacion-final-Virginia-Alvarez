import FilterName from "./FilterName";

const Filters =(props) =>{
    const handleSubmit = (event) => {    //para impedir que en el input de filtrado, al darle a intro, la página refresque
        event.preventDefault();
    }
    return(
        <section>
            <form onSubmit ={handleSubmit} > 
                <FilterName filterName={props.filterName} handleFilterName = {props.handleFilterName}/>
            </form>
        </section>
)

};

export default Filters;