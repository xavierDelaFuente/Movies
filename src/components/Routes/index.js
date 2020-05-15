import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Board from "../../containers/Board";
import Details from "../../containers/Details";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Board} data-testid="board" />
          <Route
            exact
            path="/Details/:number"
            component={Details}
            data-testid="details"
          />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
