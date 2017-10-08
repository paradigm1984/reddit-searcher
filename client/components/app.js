import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "./header.js";
// import Body from "./body.js";
import Apicall from "../views/apicall.js"

class App extends Component {

  render() {
    return(
      <div>
        <Header />
        <Apicall />
      </div>

    )
  }
}

export default App;
