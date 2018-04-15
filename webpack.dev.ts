import * as Webpack from "webpack";
import * as WebpackMerge from "webpack-merge";
import * as Common from "./webpack.common";

// No typings.
// tslint:disable-next-line:no-var-requires
const FaviconsPlugin = require("favicons-webpack-plugin");
// tslint:disable-next-line:no-var-requires
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");

const faviconOptions = Object.create(Common.faviconOptions);
faviconOptions.icons = {
  android: false,
  appleIcon: false,
  appleStartup: false,
  coast: false,
  favicons: true,
  firefox: false,
  opengraph: false,
  twitter: false,
  windows: false,
  yandex: false,
};

const configuration: Webpack.Configuration = {
  devServer: {
    inline: true,
    open: true,
    port: 3000,
    stats: Common.stats,
  },
  devtool: "source-map",
  plugins: [
    new FaviconsPlugin(faviconOptions),
    new ErrorOverlayPlugin(),
    new Webpack.WatchIgnorePlugin([
      /css\.d\.ts$/,
    ]),
  ],
};

export default WebpackMerge(
  Common.configuration,
  configuration,
);
