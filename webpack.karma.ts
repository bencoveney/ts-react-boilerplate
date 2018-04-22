import * as Webpack from "webpack";
import * as WebpackMerge from "webpack-merge";
import * as Common from "./webpack.common";

const configuration: Webpack.Configuration = {
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      {
        enforce: "post",
        exclude: /(test|node_modules|bower_components)/,
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
