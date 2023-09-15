import React, { useState } from "react";
import './Weather.css'
const Weather = () => {
    const [city, setCity] = useState('')
    const [result, setResult] = useState('')
    const changeHandler = (e) => {
        setCity(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=84f0dab438b94809a9591f3563d206c3`).then(
            response => response.json()
        ).then(data => {
            //console.log(data.list[0].main.temp)
            const kelvin = data.list[0].main.temp
            const celsius = kelvin - 273.15
            //const celsius = kelvin - 273.15
            setResult(`Temperature at ${city} is ${Math.round(celsius)} °C`)
        })
    }
    return <center>
            <div className="container">
                <div>
                    <h4>Weather Application</h4>
                    <form onSubmit={submitHandler}>
                        <input type="text" value={city} onChange={changeHandler}/> <br /> <br />
                        <input type="submit" value='Get Temperature' />
                    </form>
                    <h3>{result}</h3>
                </div>
            </div>
        </center>
}

export default Weather;