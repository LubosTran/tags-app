import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import { TagDataProvider } from "./TagData";
import history from "./history";
import App from "./App";

const Routing = () => {
  return (
    <Router history={history}>
      <TagDataProvider>
        <Route path="/" component={App} />
      </TagDataProvider>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById("root")
);
