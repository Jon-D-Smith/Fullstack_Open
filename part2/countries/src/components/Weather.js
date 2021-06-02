const Weather = ({destination, weather}) => {
    return ( 
         <>
<h2>Weather in {destination.name}</h2>
      <p>
        temperature {weather.current.temperature}
      </p>
      {<img src={weather.current.weather_icons[0]} />}
      <p>
        Wind: {weather.current.wind_speed}
      </p>
        </>
     );
}
 
export default Weather;