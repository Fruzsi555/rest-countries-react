import './App.css';
import Countries from "./components/Countries";
import Header from "./components/Header";
import Search from "./components/Search";
import { useEffect, useState, useContext } from 'react';
import ThemeContext from './components/ThemeContext';


function App() {

    const [loadedCountries, setLoadedCountries] = useState([]);
    const [findCountry, setFindCountry] = useState("");
    const [value, setValue] = useState('dark');
    const themeContext = useContext(ThemeContext);
    const [regions, setRegions] = useState([]);

    function toggleStyle() {
        setValue(value => (value === "light" ? "dark" : "light"));
    }

    const apiGet = () => {
        fetch("https://restcountries.com/v2/all")
            .then((response) => response.json())
            .then(data => {
                setLoadedCountries(data);

                const regs = data.map((c) => c.region);
                let indexes = new Set();
                regs.forEach(a => indexes.add(a.id));
                setRegions(regs.filter((c, idx) => regs.indexOf(c) === idx));
            });
    }

    useEffect(apiGet, []);

    const handleCountrySearch = (event) => {
        const countryToFind = event.target.value;
        setFindCountry(countryToFind);
    }

    const searchCountries = () => findCountry === '' ? [] : loadedCountries.filter(country => country.name.toLowerCase().includes(findCountry.toLowerCase()));

    return (
        <div className='mainApp' cssstyle={themeContext.userTheme}>
            <Header title='Where in the world?'></Header>
            <Search value={findCountry} onChange={handleCountrySearch} regions={regions}/>
            {findCountry === '' ?
                <Countries countries={loadedCountries} /> :
                <Countries countries={searchCountries()} />
            }
        </div>
    );
}

export default App;
