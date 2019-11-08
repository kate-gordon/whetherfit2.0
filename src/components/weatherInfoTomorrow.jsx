import React from "react";

function WeatherInfoTomorrow(props) {
    const tmrwTempHigh = props.tmrwTempHigh;
    const tmrwTempLow = props.tmrwTempLow;
    const tmrwPrecipChance = props.tmrwPrecipChance;

    return (
        <>
            <div>
                <h1>Wheather Tomorrow</h1>
                <p>Feels Like Temp High: {tmrwTempHigh}</p>
                <p>Feels Like Temp Low: {tmrwTempLow}</p>
                <p>Precipitation Chance: {tmrwPrecipChance}</p>
            </div>
        </>
    );
}

export default WeatherInfoTomorrow;
