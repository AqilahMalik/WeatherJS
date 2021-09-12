const Title = require("./title");
const CurrentWeather = require("./form");
// const ForeCast_Body = require("./forecastBody");

function App() {
  return (
    <main>
      <Title />
      <div className="wrapper_2">
        <div className="wrapper">
          <div className="card1">
            <CurrentWeather />
          </div>
        </div>
        <div className="wrapper">
          <div className="card2">{/* <ForeCast_Body /> */}</div>
        </div>
      </div>
    </main>
  );
}

module.exports = App;
