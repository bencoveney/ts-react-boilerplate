import * as CleanPlugin from "clean-webpack-plugin";
import * as UglifyJSPlugin from "uglifyjs-webpack-plugin";
import * as Webpack from "webpack";
import * as WebpackMerge from "webpack-merge";
import * as Common from "./webpack.common";

// tslint:disable:no-var-requires

// No typings.
const FaviconsPlugin = require("favicons-webpack-plugin");

const configuration: Webpack.Configuration = {
  // Include source maps.
  devtool: "source-map",

  mode: "production",

  plugins: [
    // Clean the output directory to ensure fresh output.
    new CleanPlugin(
      [Common.outputDirectory],
      { verbose: false },
    ),

    // Compress JavaScript output.
    new UglifyJSPlugin({
      sourceMap: true,
    }),

    // Generate all favicons.
    new FaviconsPlugin(Common.faviconOptions),
  ],
};

export default WebpackMerge(
  Common.configuration,
  configuration,
);
