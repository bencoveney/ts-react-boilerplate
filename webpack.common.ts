import * as CopyPlugin from "copy-webpack-plugin";
import * as HtmlPlugin from "html-webpack-plugin";
import * as Path from "path";
import * as Webpack from "webpack";

// tslint:disable:no-var-requires

// No typings.
const CleanPlugin = require("clean-webpack-plugin");
const IncludeAssetsPlugin = require("html-webpack-include-assets-plugin");

// Load package definition.
const packageJson = require("./package.json");

// Shorthand for paths.
const resolvePath = (target: string) => Path.resolve(__dirname, target);

// Output to `/docs/` for GitHub pages.
const outputDirectory = "docs";

export const configuration: Webpack.Configuration = {
  devtool: "source-map",
  entry: [
    "./src/index.tsx",
  ],
  module: {
    rules: [
      {
        exclude: resolvePath("node_modules"),
        include: resolvePath("src"),
        loaders: [ "awesome-typescript-loader" ],
        test: /\.tsx?$/,
      },
      {
        enforce: "pre",
        loader: "source-map-loader",
        test: /\.js$/,
      },
      {
        enforce: "pre",
        loader: "tslint-loader",
        options: {
          configFile: resolvePath("tslint.json"),
        },
        test: /\.tsx?$/,
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: resolvePath(outputDirectory),
  },
  plugins: [
    new CleanPlugin([outputDirectory]),
    new CopyPlugin([{
      from: "assets/reset.css",
      to: ".",
    }]),
    new HtmlPlugin({
      author: packageJson.author,
      chunksSortMode: "dependency",
      description: packageJson.description,
      template: resolvePath("./src/index.ejs"),
      title: packageJson.name,
    }),
    new IncludeAssetsPlugin({
      append: false,
      assets: "reset.css",
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};

export const faviconOptions = {
  background: "#000000",
  logo: resolvePath("assets/favicon.png"),
  title: packageJson.name,
};
