const { useState } = require("react");
const Forecast = require("./forecast");

function ForeCast_Body() {
  const [placeName, setPlace] = useState("");
  const [data, setData] = useState(null);

  let f_city,
    f_country,
    f_date,
    f_maxtemp1,
    f_mintemp1,
    f_cond1,
    f_maxtemp2,
    f_mintemp2,
    f_cond2,
    f_maxtemp3,
    f_mintemp3,
    f_cond3,
    f_maxtemp4,
    f_mintemp4,
    f_cond4,
    f_maxtemp5,
    f_mintemp5,
    f_cond5;

  if (data !== null) {
    f_city = data.location.name;
    f_country = data.location.country;
    f_date = data.forecast.forecastday[0].date;

    f_maxtemp1 = data.forecast.forecastday[0].hour[10].temp_c;
    f_mintemp1 = data.forecast.forecastday[0].hour[10].temp_f;
    f_cond1 = data.forecast.forecastday[0].hour[10].condition.text;

    f_maxtemp2 = data.forecast.forecastday[0].hour[16].temp_c;
    f_mintemp2 = data.forecast.forecastday[0].hour[16].temp_f;
    f_cond2 = data.forecast.forecastday[0].hour[16].condition.text;

    f_maxtemp3 = data.forecast.forecastday[0].hour[22].temp_c;
    f_mintemp3 = data.forecast.forecastday[0].hour[22].temp_f;
    f_cond3 = data.forecast.forecastday[0].hour[22].condition.text;

    f_maxtemp4 = data.forecast.forecastday[0].hour[4].temp_c;
    f_mintemp4 = data.forecast.forecastday[0].hour[4].temp_f;
    f_cond4 = data.forecast.forecastday[0].hour[4].condition.text;

    f_maxtemp5 = data.forecast.forecastday[0].hour[7].temp_c;
    f_mintemp5 = data.forecast.forecastday[0].hour[7].temp_f;
    f_cond5 = data.forecast.forecastday[0].hour[7].condition.text;
  }

  function updatePlace(event) {
    setPlace(event.target.value);
  }

  function search(event) {
    event.preventDefault();

    let forecastApiURL = `https://api.weatherapi.com/v1/forecast.json`;
    let forecastApiKey = process.env.FORECAST_API_KEY;
    let querString = `?key=${forecastApiKey}&q=${placeName}&aqi=no`;

    fetch(forecastApiURL + querString, { method: "GET" })
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
      <h4 className="sub">Search weather hourly for location</h4>
      <form onSubmit={search}>
        <input
          type="text"
          placeholder="City"
          value={placeName}
          onChange={updatePlace}
        ></input>
        <button className="button"> Get Weather</button>
      </form>

      <hr className="striped-border" />
      <Forecast
        f_city={f_city}
        f_country={f_country}
        f_date={f_date}
        f_maxtemp1={f_maxtemp1}
        f_mintemp1={f_mintemp1}
        f_cond1={f_cond1}
        f_maxtemp2={f_maxtemp2}
        f_mintemp2={f_mintemp2}
        f_cond2={f_cond2}
        f_maxtemp3={f_maxtemp3}
        f_mintemp3={f_mintemp3}
        f_cond3={f_cond3}
        f_maxtemp4={f_maxtemp4}
        f_mintemp4={f_mintemp4}
        f_cond4={f_cond4}
        f_maxtemp5={f_maxtemp5}
        f_mintemp5={f_mintemp5}
        f_cond5={f_cond5}
      />
    </div>
  );
}

module.exports = ForeCast_Body;
