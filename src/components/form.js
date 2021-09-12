const { useState } = require("react");
const Weather = require("./weather");

function CurrentWeather() {
  const [place, setPlace] = useState("");
  const [data, setData] = useState(null);

  let dataCity,
    dataTemp,
    dataHumidity,
    dataDescription,
    dataCountry,
    dataWind,
    dataVisibility,
    dataPressure,
    dataType;
  let tempMax, weatherIcon, weatherId;

  if (data !== null) {
    dataCity = data.name;
    dataCountry = data.sys.country;
    dataTemp = data.main.temp;
    dataHumidity = data.main.humidity;
    dataPressure = data.main.pressure;
    dataWind = data.wind.speed;
    dataVisibility = data.visibility;
    dataDescription = data.weather[0].description;

    let round = data.main.temp;
    tempMax = Math.round(round);

    weatherIcon = data.weather[0].icon;
    weatherId = data.weather[0].id;

    dataType = data.sys.type;
  }

  function updatePlace(event) {
    setPlace(event.target.value);
  }

  function search(event) {
    event.preventDefault();

    let weather_url = `https://api.openweathermap.org/data/2.5/weather`;
    let weather_key = process.env.WEATHER_API_KEY;
    let querString = `?q=${place}&appid=${weather_key}&units=metric`;

    fetch(weather_url + querString, { method: "GET" })
      .then(function (res) {
        if (!res.ok) {
          let msg = `Place ${res.statusText} `;
          throw Error(msg);
        }
        return res.json();
      })
      .then(function (data) {
        setData(data);
      });
  }

  return (
    <div>
      <h4 className="sub4">Search for Location</h4>
      <form onSubmit={search}>
        <input
          className="sub4"
          type="text"
          placeholder="City"
          value={place}
          onChange={updatePlace}
        ></input>
        <button className="button"> Get Weather</button>
      </form>
      <hr className="striped-border" />

      <Weather
        city={dataCity}
        country={dataCountry}
        temperature={dataTemp}
        maximum={tempMax}
        wind={dataWind}
        pressure={dataPressure}
        humidity={dataHumidity}
        visibility={dataVisibility}
        description={dataDescription}
        weaIcon={weatherIcon}
        weaId={weatherId}
        type={dataType}
      />
    </div>
  );
}

module.exports = CurrentWeather;
