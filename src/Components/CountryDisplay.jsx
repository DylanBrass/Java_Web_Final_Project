import React from 'react'
import TimeAgo from 'react-timeago'
import { BrowserRouter, Route, Link } from "react-router-dom";

function Countries({ country }) {
    return (
        <div className='container m-2 text-center rounded' style={{ border: '4px solid black', backgroundColor: "#e3f2fd", fontFamily: 'Agency FB' }}>
            <h1><strong>{country.countryName}</strong></h1>
            <p>{country.description}</p>
            {
                country.famousFlagPast != null &&
                <div>
                    <h1>Most Famous ancient Flag</h1>
                    <img className='rounded w-25 border' src={country.famousFlagPast} />
                </div>
            }
            <h2>Founded in {country.dateFounded}</h2>
            <h3>{country.countryName} was founded : <span> </span>
                <TimeAgo date={country.dateFounded} />
            </h3>
            {
                country.modernFlag != null &&
                <div>
                    <h1>Current Flag of {country.countryName}</h1>
                    <img alt={country.modernFlag.description} title={country.modernFlag.description} className='rounded w-25' src={country.modernFlag.flagPhoto} />
                    <p>The date it was first used :{country.modernFlag.dateUsed}</p>
                    <p>It was created by {country.modernFlag.creator}</p>
                </div>
            }
            <Link className="w-50 btn btn-outline-dark mb-1" to="/mapPage" state={{ CountrySelected: country }}>More info</Link>
            <br></br>


            <Link className="w-50 btn btn-outline-dark mb-1" to="/Quiz" state={{ CountrySelected: country }}>Quiz on {country.countryName}</Link>
        </div>
    )
}

export default Countries