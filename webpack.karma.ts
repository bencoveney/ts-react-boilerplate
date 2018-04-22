import * as Webpack from "webpack";
import * as WebpackMerge from "webpack-merge";
import * as Common from "./webpack.common";

const configuration: Webpack.Configuration = {
  // Include source maps.
  devtool: "inline-source-map",

  mode: "development",

  module: {
    rules: [
      // Apply instanbul code coverage instrumentation to all non-test source
      // code files.
      {
        enforce: "post",
        exclude: /(test|node_modules)/,
        loader: "istanbul-instrumenter-loader",
        test: /\.tsx?$/,
      },
    ],
  },
};

const merged = WebpackMerge(
  Common.configuration,
  configuration,
);

merged.entry = undefined;

export default merged;
