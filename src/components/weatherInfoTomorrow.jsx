import React from "react";

function WeatherInfoTomorrow(props) {
    const tmrwTempHigh = Math.round(props.tmrwTempHigh);
    const tmrwTempLow = Math.round(props.tmrwTempLow);
    const tmrwPrecipChance = Math.round(props.tmrwPrecipChance);

    return (
        <>
            <div>
                <h1>Weather Tomorrow</h1>
                <p>Feels Like Temp High: {tmrwTempHigh}{'°F'}</p>
                <p>Feels Like Temp Low: {tmrwTempLow}{'°F'}</p>
                <p>Precipitation Chance: {tmrwPrecipChance}{'%'}</p>
            </div>
        </>
    );
}

export default WeatherInfoTomorrow;
