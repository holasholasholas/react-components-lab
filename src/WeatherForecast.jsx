import "./WeatherForecast.css";


export default function WeatherForecast({weather}){
return(

<div className="weather">
  <h2>{weather.day}</h2>
  <img src={weather.img} alt={weather.alt} />
  <p>
    <span>{weather.conditions} </span>current weather conditions
  </p>
  <p>
    <span>{weather.time} </span>time of day
  </p>
</div>
);
}