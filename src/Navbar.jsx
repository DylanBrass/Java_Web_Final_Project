import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="container">
            <div className="row">
                <div className="col-4 text-center">
                    <button>
                        <Link to="/">Home</Link>
                    </button>
                </div>
                <div className="col-4 text-center">
                    <button>
                        <Link to="/Quiz" state={{ CountrySelected: null }}>Quiz</Link>
                    </button>
                </div>
                <div className="col-4 text-center">
                    <button>
                        <Link to="/Countries">Countries</Link>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;