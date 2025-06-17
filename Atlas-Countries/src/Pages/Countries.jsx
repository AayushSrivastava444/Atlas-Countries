
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Countries.css';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,continents")
      .then((response) => {
        const sorted = response.data
          .map((country) => {
            const currencyObj = country.currencies ? Object.values(country.currencies)[0] : null;

            return {
              flag: country.flags?.png || "",
              name: country.name?.common || "N/A",
              capital: country.capital?.[0] || "N/A",
              currency: currencyObj?.name || "N/A",
              continent: country.continents?.[0] || "N/A",
            };
          })
          .sort((a, b) => a.name.localeCompare(b.name));

        setCountries(sorted);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  return (
    <div>
      <h1 className="page-title">Countries of the World</h1>
      <div className="countries-container">
        {countries.map((country, index) => (
          <div className="country-card" key={index}>
            <img src={country.flag} alt={country.name} width="100" />
            <h3>{country.name}</h3>
            <p><strong>Capital:</strong> {country.capital}</p>
            <p><strong>Continent:</strong> {country.continent}</p>
            <p><strong>Currency:</strong> {country.currency}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
