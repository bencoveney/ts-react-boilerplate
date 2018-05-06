// This file is the entry point for regular execution.

import * as React from "react";
import * as ReactDOM from "react-dom";

// Configure the hot module reload container to render the application.
import { AppContainer } from "react-hot-loader";
const render = (RootComponent: React.ComponentClass) => {
  ReactDOM.render(
    <AppContainer>
      <RootComponent />
    </AppContainer>,
    document.getElementById("root"),
  );
};

// Render the application initially.
import { App } from "./components/app/app";
render(App);

// If using hot module reloading - update the container when any updates are
// detected.
if (module.hot) {
  module.hot.accept("./components/app/app", () => {
    const NextApp = require("./components/app/app").App;
    render(NextApp);
  });
}
