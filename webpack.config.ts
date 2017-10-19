import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";
import * as webpack from "webpack";

// tslint:disable-next-line:no-var-requires
const packageJson = require("./package.json");

const resolvePath = (target: string) => path.resolve(__dirname, target);

const config: webpack.Configuration = {
    devServer: {
        open: true,
    },
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
        path: resolvePath("docs"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            author: packageJson.author,
            chunksSortMode: "dependency",
            description: packageJson.description,
            template: resolvePath("./src/index.ejs"),
            title: packageJson.name,
        }),
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
};

export default config;
