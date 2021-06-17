import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import List from "./containers/List";

import "bootswatch/dist/lux/bootstrap.min.css";

const App = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="">
            Super Cine
          </a>
        </div>
      </nav>
      <main className="bg-dark">
        <div className="container">
          <List />
        </div>
      </main>
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
