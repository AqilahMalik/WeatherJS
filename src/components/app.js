const Title = require("./title");
const CurrentWeather = require("./form");
const ForeCast_Body = require("./forecastBody");
const Footer = require("./footer");

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
          <div className="card2">
            <ForeCast_Body />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="card1">
        <h3 className="title_footer"> Get the weather </h3>
        <Footer />
      </div>
    </main>
  );
}

module.exports = App;
