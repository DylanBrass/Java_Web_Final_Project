import React from 'react';

function Home() {
    return (
        <div className='container'>
            <div className='row text-center'>
                <h1>Website tour</h1>
            </div>
            <div className='row'>
                <div className='col-12 col-md-6 border'>
                    <h2>
                        The goal of this website
                    </h2>
                    <p>
                        This website wants to group european countries together, and have their information in a convenient place.
                    </p>
                    <p>
                        An important aspect of this website is to bring information that is reliable and confirmed to be true. We take our information from Wikipedia and google(actual google not a google search) two widely trusted source.
                    </p>
                </div>
                <div className='col-12 col-md-6 border'>
                    <h2>
                        The feature of this website
                    </h2>
                    <p>
                        This website allows you to answer questions about multiple european countries. The user can also add questions if he or she so desires. Since these questions are added by random people their sources are not to be trusted.
                    </p>
                    <p>
                        The information on the countries comes from Wikipedia (to be more precise the information in the page with the map). Other wise the small description was taken from a quick google search of the country.
                    </p>
                    <p>
                        Other wise the user can interact with a map of the world that is next to a map of the regions/states of the country selected.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;