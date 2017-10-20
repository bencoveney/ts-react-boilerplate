import * as Webpack from "webpack";
import * as WebpackMerge from "webpack-merge";
import * as Common from "./webpack.common";

// tslint:disable:no-var-requires

// No typings.
const FaviconsPlugin = require("favicons-webpack-plugin");

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
        open: true,
        stats: "minimal",
    },
    devtool: "source-map",
    plugins: [
        new Webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development"),
            },
        }),
        new FaviconsPlugin(faviconOptions),
    ],
};

export default WebpackMerge(
    Common.configuration,
    configuration,
);
