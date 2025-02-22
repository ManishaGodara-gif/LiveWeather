import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";
export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [err, setErr] = useState(false);
    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;
    
    console.log(API_URL, API_KEY);  // Check if values are correctly loaded
    

    let getWeatherInfo = async () => {
        try{
        let response = await fetch(`${API_URL}q=${city}&appid=${API_KEY}`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city : city,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            Humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
    } catch(err) {
        throw err;
    }
    };
   

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async(event) => {
        try {
        event.preventDefault();
        console.log(city);
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        setCity("");
        } catch (err) {
            setErr(true);
        }
    };  
    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br /><br />
            <Button variant="contained" type="Submit"> Search</Button>
            {err && <p style = {{color: "red"}}>NO RESULTS FOUND</p>}
            </form>
        </div>
    )
}