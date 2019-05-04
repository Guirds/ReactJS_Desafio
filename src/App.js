import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Header from "./components/Header ";

class App extends Component {
  state = [];

  render() {
    return <Header />;
  }
}

render(<App />, document.getElementById("app"));
