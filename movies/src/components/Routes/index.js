import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "../../containers/App";
import Board from "../../containers/Board";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} data-testid="home" />
          <Route exact path="/Board" component={Board} data-testid="board" />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
