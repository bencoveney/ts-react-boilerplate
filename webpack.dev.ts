import * as Webpack from "webpack";
import * as WebpackMerge from "webpack-merge";
import * as Common from "./webpack.common";

// No typings.
// tslint:disable-next-line:no-var-requires
const FaviconsPlugin = require("favicons-webpack-plugin");
// tslint:disable-next-line:no-var-requires
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");

// Only generate basic favicons during development.
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
  // Settings for webpack dev server.
  devServer: {
    inline: true,
    open: true,
    port: 3000,
    stats: Common.stats,
  },

  // Include source maps.
  devtool: "source-map",

  mode: "development",

  plugins: [
    // Generate favicons.
    new FaviconsPlugin(faviconOptions),

    // Show a useful overlay in the browser when an error occurs.
    new ErrorOverlayPlugin(),

    // Ignore TypeScript definition files for CSS modules as they are being
    // generated.
    new Webpack.WatchIgnorePlugin([
      /css\.d\.ts$/,
    ]),
  ],
};

export default WebpackMerge(
  Common.configuration,
  configuration,
);
