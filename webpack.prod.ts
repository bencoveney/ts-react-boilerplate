import * as UglifyJSPlugin from "uglifyjs-webpack-plugin";
import * as Webpack from "webpack";
import * as WebpackMerge from "webpack-merge";
import * as Common from "./webpack.common";

// tslint:disable:no-var-requires

// No typings.
const FaviconsPlugin = require("favicons-webpack-plugin");

const configuration: Webpack.Configuration = {
  devtool: "source-map",
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new Webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
    new FaviconsPlugin(Common.faviconOptions),
  ],
};

export default WebpackMerge(
  Common.configuration,
  configuration,
);
