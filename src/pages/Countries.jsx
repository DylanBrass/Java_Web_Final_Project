import React, { useEffect, useState } from 'react';
import CountryDisplay from '../Components/CountryDisplay';
import axios from 'axios';




function Countries() {
    const [countries, setCountries] = useState([]);

    const loadCountriesFromAPI = () => {
        axios.get("http://localhost:8080/api/countries")
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response);
                    setCountries(response.data);
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    useEffect(() => {
        loadCountriesFromAPI();
    }, []);

    const getCountriesFromSearch = (search) => {
        axios.get("http://localhost:8080/api/countries?countryName=" + search)
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response);
                    setCountries(response.data);
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    const formSubmit = (event) => {
        event.preventDefault();

        const search = event.target.elements.search.value;

        if (search !== '') {

            getCountriesFromSearch(search);
        }
        else
            loadCountriesFromAPI();
        console.log("formSubmit function")
    }


    return (
        <div className='container'>
            <div className='row text-center'>
                <h1>Inform yourself about a Country !</h1>
                <form onSubmit={formSubmit}>
                    <input className='w-25 m-3' id='search' name='search' placeholder='Search for a specific country' />
                    <button className='search-button m-3' type='submit'>Search</button>
                </form>
                {
                    document.getElementById("search") != null && countries.length <= 0 && <div>Sorry no result came back for : {document.getElementById("search").value}</div>
                }
            </div>
            <div className='row'>
                <div className='col-12 text-center'>
                    <div>

                        {
                            countries.map((country) => (
                                <CountryDisplay
                                    key={country.id}
                                    country={country}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Countries;
