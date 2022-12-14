import logo from '../images/titulo.jpeg';
const Header = (props) =>{
    return(
        <div className={props.className} >
            <img className="title" src={logo} alt="Rick and Morty" />
        </div>
    )
}
export default Header;