import React from 'react'

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
            {
                country.flagToday != null &&
                <div>
                    <h1>Current Flag of {country.countryName}</h1>
                    <img className='rounded w-25' src={country.flagToday.flagPhoto} />
                </div>
            }
        </div>
    )
}

export default Countries