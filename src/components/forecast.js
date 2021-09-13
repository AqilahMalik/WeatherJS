function Forecast(props) {
  let {
    f_city,
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
    f_cond5,
  } = props;

  if (f_city && f_country) {
    return (
      <div>
        <h2 className="py-2">
          <h3 className="deco_h3">Hourly Weather</h3>
          <span className="weather__value">
            {f_city}, {f_country} <br /> {f_date}
          </span>
        </h2>
        <div className="entryPoint2">
          <div className="card_forecast">
            10:00 am <br /> <hr />
            <h3>
              <i className={`wi wi-time-10 display-5`}></i>
            </h3>
            <div className="currentDetail_value">
              {f_maxtemp1}&deg;C <br />
              {f_mintemp1}&deg;F <br /> <hr />
              {f_cond1}
            </div>
          </div>

          <div className="card_forecast">
            {" "}
            16:00 pm <br /> <hr />
            <h3>
              <i className={`wi wi-time-4 display-5`}></i>
            </h3>
            <div className="currentDetail_value">
              {f_maxtemp2}&deg;C <br />
              {f_mintemp2}&deg;F <br /> <hr />
              {f_cond2}
            </div>
          </div>

          <div className="card_forecast">
            {" "}
            22:00 pm <br /> <hr />
            <h3>
              <i className={`wi wi-time-10 display-5`}></i>
            </h3>
            <div className="currentDetail_value">
              {f_maxtemp3}&deg;C <br />
              {f_mintemp3}&deg;F <br /> <hr />
              {f_cond3}
            </div>
          </div>

          <div className="card_forecast">
            {" "}
            04:00 am <br /> <hr />
            <h3>
              <i className={`wi wi-time-4 display-5`}></i>
            </h3>
            <div className="currentDetail_value">
              {f_maxtemp4}&deg;C <br />
              {f_mintemp4}&deg;F <br /> <hr />
              {f_cond4}
            </div>
          </div>

          <div className="card_forecast">
            {" "}
            07:00 am <br /> <hr />
            <h3>
              <i className={`wi wi-time-7 display-5`} color="blue"></i>
            </h3>
            <div className="currentDetail_value">
              {f_maxtemp5}&deg;C <br />
              {f_mintemp5}&deg;F <br /> <hr />
              {f_cond5}
            </div>
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

module.exports = Forecast;
