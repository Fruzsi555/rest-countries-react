import { Link, useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState, useContext } from "react";
import Header from './Header';
import ThemeContext from "./ThemeContext";
import '../styles/countryinfo.css'

const CountryInfo = () => {
    let navigate = useNavigate();
    let { countryName } = useParams();
    const [countryInfo, setCountryInfo] = useState([]);
    const themeContext = useContext(ThemeContext);

    useEffect(() => {
        fetch(`https://restcountries.com/v2/name/${countryName}`).then(res => {
            return res.json();
        }).then(result => {
            if (null == result[0].borders) {
                setCountryInfo(result);
            } else {
                const newList = result[0].borders;

                Promise.all(newList).then(values => {

                    values.forEach((v, i) => {
                        if (result[0].borders[i] !== v) {
                            result[0].borders.splice(result[0].borders.indexOf(i), 1);
                            result[0].borders.unshift(v);
                        }
                    });
                    setCountryInfo(result);
                });
            }
        });
    }, []);


    return (
        <div className="main" cssstyle={themeContext.userTheme}>
            <Header title='Where in the world?'></Header>

            <div>
                <button type="button" className="btn-container">
                    <Link className='btn-text' to="/">Back</Link>
                </button>
            </div>

            {countryInfo && countryInfo.map(info => {
                let languages = "";
                info.languages.map(l => languages += l.name + " ");

                return (
                    <section className="country-info-container" cssstyle={themeContext.userTheme} key={info.name}>
                        <img src={info.flag} alt={info.name} className="flag" />
                        <section className="info">
                            <h2>{info.name}</h2>
                            <div className='data'>
                                <div>
                                    <p>Native Name: {info.nativeName}</p>
                                    <p>Population: {info.population}</p>
                                    <p>Region: {info.region}</p>
                                    <p>Sub Region: {null == info.subregion ? "-" : info.subregion}</p>
                                    <p>Capital: {info.capital}</p>
                                </div>
                                <div>
                                    <p>Top Level Domain: {null == info.topLevelDomain[0] ? "-" : info.topLevelDomain[0]}</p>
                                    <p>Currencies: {null == info.currencies[0] ? "-" : info.currencies[0].name}</p>
                                    <p>Languages: {languages}</p>
                                </div>
                            </div>
                            <div className="border-countries">
                                <h3>Border Countries: </h3>
                                {null == info.borders ?
                                    <h4 className='no-value'>no neighbours</h4> :

                                    <div className="list-border-countries">

                                        {info.borders.map((border, i) => {
                                            // let selectedBorder = findSelectedBorder(border);

                                            return (
                                                <Link to={`/${border.toLowerCase()}`} className="link" key={i}>
                                                    <p className="border-name" key={i}>{border}</p>
                                                </Link>
                                            )
                                        })}

                                    </div>

                                }

                            </div>
                        </section>
                    </section>
                )
            })}
        </div>
    )
}

export default CountryInfo;