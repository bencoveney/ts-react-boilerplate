import * as Express from "express";
import * as Webpack from "webpack";
import * as WebpackDevMiddleware from "webpack-dev-middleware";
import * as WebpackHotMiddleware from "webpack-hot-middleware";

import Config from "../webpack.dev";
const compiler = Webpack(Config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
const app = Express();
app.use(
  WebpackDevMiddleware(
    compiler,
    {
      publicPath: (Config.output as { publicPath: string }).publicPath,
    },
  ),
);
app.use(WebpackHotMiddleware(compiler));

// Serve the files on port 3000.
app.listen(
  3000,
  // tslint:disable-next-line:no-console
  () => console.log("Example app listening on port 3000!\n"),
);
