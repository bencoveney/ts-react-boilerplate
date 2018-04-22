import * as Path from "path";
import * as Webpack from "webpack";
import webpackConfig from "./webpack.karma";

module.exports = (config: any) => {
  config.set({
    browsers: ["jsdom"],
    coverageIstanbulReporter: {
      dir: Path.join(__dirname, "coverage"),
      fixWebpackSourcePaths: true,
      reports: [ "html" ],
    },
    files: [
      {
        pattern: "src/tests.ts",
        watched: false,
      },
    ],
    frameworks: ["jasmine"],
    preprocessors: {
      "src/tests.ts": ["webpack", "sourcemap"],
    },
    reporters: ["spec", "coverage-istanbul"],
    singleRun: true,
    webpack: webpackConfig,
    webpackServer: {
      stats: webpackConfig.stats,
    },
  });
};
