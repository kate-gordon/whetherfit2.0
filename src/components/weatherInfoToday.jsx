import React from "react";

function WeatherInfoToday(props) {
    const apparentTemp = props.apparentTemp;
    const precip = props.precip
    
    return (
        <>
            <p>It currently feels like {apparentTemp}</p>
            <p>Precipitation Chance: {precip}</p>
        </>
    );
}

export default WeatherInfoToday;
