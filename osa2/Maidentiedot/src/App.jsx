import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Virhe haettaessa maiden tietoja:", error);
      });
  }, []);

  const filteredCountries = countries.filter((item) => {
    if (search === "") {
      return true;
    } else if (item.name.common.toLowerCase().includes(search.toLowerCase())) {
      return true;
    }
    return false;
  });

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const renderCountryInfo = (country) => {
    return (
      <>
        <h2>{country.name.common}</h2>
        <p>Virallinen nimi: {country.name.official}</p>
        <p>Pääkaupunki: {country.capital}</p>
        <p>Area: {country.area}</p>
        <p>Väestö: {country.population}</p>
        <h2>Kielet</h2>
        <ul>
          {Object.values(country.languages).map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt={`Flags of ${country.name.common}`} />
      </>
    );
  };

  return (
    <>
      <div>
        <h1>Maiden tiedot</h1>
        <input
          type="text"
          placeholder="Hae"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {filteredCountries.length === 1 ? (
          renderCountryInfo(filteredCountries[0])
        ) : filteredCountries.length > 10 ? (
          <p>Tarkenna hakuehtoa, yli kymmenen maan tulos.</p>
        ) : (
          filteredCountries.map((item, index) => (
            <div key={index}>
              <p>{item.name.common}</p>
              <button onClick={() => handleCountryClick(item)}>Näytä</button>
            </div>
          ))
        )}
        {selectedCountry && (
          <div>
            {renderCountryInfo(selectedCountry)}
            <button onClick={() => setSelectedCountry(null)}>Sulje</button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
