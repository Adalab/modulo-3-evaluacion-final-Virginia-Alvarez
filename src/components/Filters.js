import FilterName from "./FilterName";

const Filters =(props) =>{
    return(
        <section>
            <form >
                <FilterName filterName={props.filterName} handleFilterName = {props.handleFilterName}/>
            </form>
        </section>
)

};

export default Filters;