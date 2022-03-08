import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";


const CountryCard = (props) => {

    const { value, toggleStyle } = useContext(ThemeContext);


    return (
        <Link to={`/${props.name.toLowerCase()}`} className='link'>
            <div className="card" cssstyle={value}>
                <img className="image" src={props.flag} alt={props.name} />
                <div className="content">
                    <p>{props.name}</p>
                    <p>Population: {null == props.population ? "-" : props.population}</p>
                    <p>Region: {null == props.region ? "-" : props.region}</p>
                    <p>Capital: {null == props.capital ? "-" : props.capital}</p>
                </div>
            </div>
        </Link>

    );
}

export default CountryCard;