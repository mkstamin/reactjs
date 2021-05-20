import React from 'react';

const scaleName = {
    c: 'Celsius',
    f: 'Fahrenheit',
};

function TemperatureInput({ temperature, scale, onTemperatureChange }) {
    return (
        <fieldset>
            <legend>Entyr temperature in {scaleName[scale]}</legend>
            <input
                type="text"
                value={temperature}
                onChange={(e) => onTemperatureChange(e, scale)}
            />
        </fieldset>
    );
}

export default TemperatureInput;
