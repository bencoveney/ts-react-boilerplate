// This file contains the web-server for development and (optionally)
// production which can be extended with custom server functionality.

import * as Express from "express";
import * as Path from "path";
import * as Webpack from "webpack";
import * as WebpackDevMiddleware from "webpack-dev-middleware";
import * as WebpackHotMiddleware from "webpack-hot-middleware";
import Config from "../webpack.dev";

// Shorthand for building paths.
const resolvePath = (path: string) => Path.resolve(__dirname, path);

// Create the server.
const app = Express();

if (process.env.NODE_ENV === "development") {
  // If in development mode...

  // Create the webpack instance.
  const compiler = Webpack(Config);

  // Tell express to use the webpack compiler as middleware.
  app.use(
    WebpackDevMiddleware(
      compiler,
      {
        publicPath: (Config.output as { publicPath: string }).publicPath,
        stats: Config.stats,
      },
    ),
  );

  // Configure hot module reloading.
  app.use(WebpackHotMiddleware(compiler));
} else {
  // If in production mode...

  // Serve compiled files as content and index.html as the default page.
  app.use(Express.static(resolvePath("../docs")));
  app.get(
    "*",
    (request, response) => response.sendFile(resolvePath("../docs/index.html")),
  );
}

// A different port could be specified as an environment variable.
const port = process.env.PORT || 8080;

// Listen for (and respond to) requests.
app.listen(
  port,
  (error: any) => {
    // Log any errors.
    if (error) {
      // tslint:disable-next-line:no-console
      console.error(error);
    }

    // tslint:disable-next-line:no-console
    console.log(`Express listening on port ${port}\n`);
  },
);
