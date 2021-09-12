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
          <span className="weather__value">
            {f_city}, {f_country} <br /> {f_date}
          </span>
        </h2>
        <div className="f_forecast">
          <div className="card_forecast">
            <div className="currentDetail_value">
              {" "}
              10:00 am <br />
              {f_maxtemp1}&deg;C <br />
              {f_mintemp1}&deg;F <br />
              {f_cond1}
            </div>
          </div>

          <div className="card_forecast">
            <div className="currentDetail_value">
              {" "}
              04:00 pm <br />
              {f_maxtemp2}&deg;C <br />
              {f_mintemp2}&deg;F <br />
              {f_cond2}
            </div>
          </div>

          <div className="card_forecast">
            <div className="currentDetail_value">
              {" "}
              10:00 pm <br />
              {f_maxtemp3}&deg;C <br />
              {f_mintemp3}&deg;F <br />
              {f_cond3}
            </div>
          </div>

          <div className="card_forecast">
            <div className="currentDetail_value">
              {" "}
              04:00 am <br />
              {f_maxtemp4}&deg;C <br />
              {f_mintemp4}&deg;F <br />
              {f_cond4}
            </div>
          </div>

          <div className="card_forecast">
            <div className="currentDetail_value">
              {" "}
              07:00 am <br />
              {f_maxtemp5}&deg;C <br />
              {f_mintemp5}&deg;F <br />
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
