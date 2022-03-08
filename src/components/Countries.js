import CountryCard from "./CountryCard";

const Countries = ({ countries }) => {

    return (
        <ul className="countries-container">
        {countries.map((country) => (
          <CountryCard
            key={country.name}
            flag={country.flags.png}
            name={country.name}
            population={country.population}
            capital={country.capital}
            region={country.region}
          />
        ))}
      </ul>
    )
}

export default Countries;