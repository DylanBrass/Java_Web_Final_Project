import React from 'react';
import { useLocation } from 'react-router-dom'
import MapChart from '../Components/MapChart';

function MapPage() {
    const location = useLocation()
    const { CountrySelected } = location.state

    return (

        <div>
            <div className='text-center'>
                <h1>The regions of  {CountrySelected.countryName}</h1>
            </div>
            <div className='container ' >
                <div className='row'>
                    <div className='col-12'>
                        <div>
                            <div className='w-75 border border-4 m-auto'>
                                <MapChart
                                    country={CountrySelected}
                                />
                                <div >
                                    <span className='text-white bg-dark'> Can you find {CountrySelected.countryName} on the european map? </span>
                                </div>
                            </div>
                            <p className='text-block'>
                                {CountrySelected.historyText}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MapPage;