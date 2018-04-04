import * as React from "react";
import * as ReactDOM from "react-dom";

import { AppContainer } from "react-hot-loader";

import App from "./components/app/app";

const render = (Hue: React.ComponentClass) => {
  ReactDOM.render(
    <AppContainer>
      <Hue />
    </AppContainer>,
    document.getElementById("root"),
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./components/app/app", () => {
    const NextApp = require("./components/app/app").default;
    render(NextApp);
  });
}
