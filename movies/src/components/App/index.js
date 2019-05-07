import React, { Component } from "react";
import { Link } from "react-router-dom";

import { welcomeMessage } from "../../texts/eng.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/Board">
          <p data-testid="welcome-message">{welcomeMessage}</p>
        </Link>
      </div>
    );
  }
}

export default App;
