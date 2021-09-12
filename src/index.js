const React = require("react");
const ReactDom = require("react-dom");

import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";

const App = require("./components/app");

let target = document.querySelector("#app");
ReactDom.render(<App />, target);
