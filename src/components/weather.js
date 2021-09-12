function Weather(props) {
  let {
    city,
    country,
    temperature,
    humidity,
    wind,
    pressure,
    visibility,
    description,
    maximum,
    weaIcon,
    weaId,
    time,
    type,
  } = props;

  weaIcon = {
    Thunderstom: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-showers",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    ClearSunny: "wi-day-sunny",
    ClearNight: "wi-night-clear",
    Clouds: "wi-day-fog",
  };

  function get_WeatherIcon(weaId) {
    if (weaId >= 200 && weaId < 232) {
      return weaIcon.Thunderstom;
    } else if (weaId >= 300 && weaId < 321) {
      return weaIcon.Drizzle;
    } else if (weaId >= 500 && weaId <= 521) {
      return weaIcon.Rain;
    } else if (weaId >= 600 && weaId <= 622) {
      return weaIcon.Snow;
    } else if (weaId >= 701 && weaId <= 781) {
      return weaIcon.Atmosphere;
    } else if (weaId === 800) {
      if (type === 1) {
        return weaIcon.ClearSunny;
      } else if (type === 2) {
        return weaIcon.ClearNight;
      }
    } else if (weaId >= 801 && weaId <= 804) {
      return weaIcon.Clouds;
    } else {
      return weaIcon.Clouds;
    }
  }

  if (city && temperature) {
    return (
      <div>
        <h3 className="deco_h3">Current Weather</h3>
        <h2 className="py-2">
          <span className="weather__value">
            {city}, {country}
          </span>
        </h2>
        <h1 className="py-4">
          <i className={`wi ${get_WeatherIcon(weaId)} display-1`}></i>
        </h1>
        <h2 className="py-2">
          <span className="weather__value">{temperature}&deg;C </span>
        </h2>
        <h3>
          <span className="weather__key"> Feels like {maximum}&deg;C </span>
        </h3>
        <h3>
          <span className="weather__value"> {description} </span>
        </h3>
        <br />

        <div className="entryPoint1">
          <div className="card_weather">
            <h3>
              <i className={`wi wi-windy`}></i>
            </h3>
            WIND
            <div className="currentDetail_value">{wind} km/h</div>
          </div>

          <div className="card_weather">
            <h3>
              <i className={`wi wi-humidity display-1 `}></i>
            </h3>
            HUMIDITY
            <div className="currentDetail_value">{humidity} %</div>
          </div>

          <div className="card_weather">
            <h3>
              <i className={`wi wi-fog display-1 `}></i>
            </h3>
            VISIBILITY
            <div className="currentDetail_value"> {visibility} km </div>
          </div>

          <div className="card_weather">
            <h3>
              <i className={`wi wi-thermometer display-1 `}></i>
            </h3>
            PRESSURE
            <div className="currentDetail_value"> {pressure} hPa </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p className="py-2"> Please Enter the value. </p>
      </div>
    );
  }
}

module.exports = Weather;
