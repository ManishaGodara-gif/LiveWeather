import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info}){
    const INIT_URL = "https://images.unsplash.com/photo-1641970304222-b2b332808a4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fERVU1RZJTIwV0VBVEhFUiUyMElNQUdFfGVufDB8fDB8fHww";
    const HOT_URL = "https://images.unsplash.com/photo-1494548162494-384bba4ab999?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN1bnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://media.istockphoto.com/id/930879822/photo/winter-morning-scene-rural-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=zie3zDKi021vcwYKajEcNzhKk1sT_W2RQU_0hHxFWw0=";
    const RAIN_URL = "https://images.unsplash.com/photo-1434118489318-42a0e62c6235?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UkFJTiUyMFdFQVRIRVIlMjBJTUFHRXxlbnwwfHwwfHx8MA%3D%3D";

    return(
        <div className = "InfoBox">
        <div className="cardContainer"> 
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.Humidity > 80 
            ? RAIN_URL
            : info.temp > 20
            ? HOT_URL
            : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
          info.Humidity > 80 
            ? <ThunderstormIcon />
            : info.temp > 20   
            ? <WbSunnyIcon />
            : <AcUnitIcon />
        }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity = {info.Humidity}&deg;C</p>
         <p>Min Temp = {info.tempMin}&deg;C</p>
         <p>Max Temp = {info.tempMax}&deg;C</p>
         <p>the weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}