import * as Express from "express";
import * as Path from "path";
import * as Webpack from "webpack";
import * as WebpackDevMiddleware from "webpack-dev-middleware";
import * as WebpackHotMiddleware from "webpack-hot-middleware";
import Config from "../webpack.dev";

const compiler = Webpack(Config);

const resolvePath = (path: string) => Path.resolve(__dirname, path);

const app = Express();

if (process.env.NODE_ENV === "development") {
  app.use(
    WebpackDevMiddleware(
      compiler,
      {
        publicPath: (Config.output as { publicPath: string }).publicPath,
        stats: Config.stats,
      },
    ),
  );
  app.use(WebpackHotMiddleware(compiler));
} else {
  app.use(Express.static(resolvePath("../docs")));
  app.get(
    "*",
    (request, response) => response.sendFile(resolvePath("../docs/index.html")),
  );
}

const port = process.env.PORT || 8080;

// Serve the files on port 3000.
app.listen(
  port,
  (error: any) => {
    if (error) {
      // tslint:disable-next-line:no-console
      console.error(error);
    }

    // tslint:disable-next-line:no-console
    console.log(`Express listening on port ${port}\n`);
  },
);
