import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
    Marker
} from "react-simple-maps";


const MapChart = ({ country }) => {

    const geoUrlEurope =
        "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
    const geoUrl =
        "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/" + country.map;
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 w-50">
                    <ComposableMap projection="geoMercator">
                        <ZoomableGroup center={[10, 50]} zoom={5}>
                            <Geographies geography={geoUrlEurope}>
                                {({ geographies }) =>
                                    geographies.map((geo) => (
                                        <Geography key={geo.rsmKey} geography={geo} style={{
                                            default: { outline: "none" },
                                            hover: { outline: "none" },
                                            pressed: { outline: "none" },
                                        }}
                                        />
                                    ))
                                }
                            </Geographies>
                        </ZoomableGroup>
                    </ComposableMap>
                </div>
                <div className="col-6 w-50">
                    <ComposableMap projection="geoMercator">
                        <ZoomableGroup center={[15, 45]} zoom={6}>
                            <Geographies geography={geoUrl}>
                                {({ geographies }) =>
                                    geographies.map((geo) => (
                                        <Geography key={geo.rsmKey} geography={geo} style={{
                                            default: { outline: "none" },
                                            hover: { outline: "none" },
                                            pressed: { outline: "none" },
                                        }}
                                        />
                                    ))
                                }
                            </Geographies>
                        </ZoomableGroup>
                    </ComposableMap>
                </div>
            </div>
        </div>
    );
};

export default MapChart;
