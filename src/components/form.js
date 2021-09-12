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

    let apiURL = `https://api.openweathermap.org/data/2.5/weather`;
    let apiKey = "9e6604138c8593ca600a9243fc791e27";
    let querString = `?q=${place}&appid=${apiKey}&units=metric`;

    fetch(apiURL + querString, { method: "GET" })
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
      <h4>Search for Location</h4>
      <form onSubmit={search}>
        <input
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
