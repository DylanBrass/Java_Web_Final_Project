import React from 'react'
import TimeAgo from 'react-timeago'
import { BrowserRouter, Route, Link } from "react-router-dom";

function Countries({ country }) {
    return (
        <div className='container border text-center'>
            <h1>{country.countryName}</h1>
            <p>{country.description}</p>
            {
                country.famousFlagPast != null &&
                <div>
                    <h1>Most Famous ancient Flag</h1>
                    <img className='rounded w-25' src={country.famousFlagPast} />
                </div>
            }
            <h2>Founded in {country.dateFounded}</h2>
            <h3>How long ago the country was created : <span> </span>
                <TimeAgo date={country.dateFounded} />
            </h3>
            {
                country.flagToday != null &&
                <div>
                    <h1>Current Flag of {country.countryName}</h1>
                    <img alt={country.flagToday.description} title={country.flagToday.description} className='rounded w-25' src={country.flagToday.flagPhoto} />
                    <p>The date it was first used :{country.flagToday.dateUsed}</p>
                    <p>It was created by {country.flagToday.creator}</p>
                </div>
            }
            <Link to="/mapPage" state={{ CountrySelected: country }}>See on map</Link>
            <br></br>


            <Link to="/Quiz" state={{ CountrySelected: country }}>Quiz</Link>
        </div>
    )
}

export default Countries