import * as Webpack from "webpack";
import webpackConfig from "./webpack.karma";

module.exports = (config: any) => {
  config.set({
    browsers: ["jsdom"],
    coverageReporter: {
      dir : "coverage/",
      type : "html",
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
    reporters: ["spec", "coverage"],
    singleRun: true,
    webpack: webpackConfig,
    webpackServer: {
      stats: webpackConfig.stats,
    },
  });
};
