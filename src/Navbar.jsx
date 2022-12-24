import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
    return (


        <nav className="navbar navbar-light sticky-top d-flex justify-content-around" style={{ backgroundColor: "#e3f2fd", border: '2px', borderColor: 'black', borderStyle: 'solid' }}>
            <div>
                <div className="row">
                    <h1>European Country Knowledge</h1>
                </div>
                <div className="row flex">
                    <div className="col-4 text-center" >
                        <Link className="btn btn-outline-dark" to="/">Home</Link>
                    </div>
                    <div className="col-4 text-center">
                        <Link className="btn btn-outline-dark" to="/Quiz" state={{ CountrySelected: null }}>Quiz</Link>
                    </div>
                    <div className="col-4 text-center" >
                        <Link className="btn btn-outline-dark" to="/Countries">Countries</Link>
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;