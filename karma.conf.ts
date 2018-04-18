import * as Webpack from "webpack";
import webpackConfig from "./webpack.dev";

webpackConfig.entry = undefined;

module.exports = (config: any) => {
  config.set({
    browsers: ["jsdom"],
    files: [
      {
        pattern: "src/**/*test.tsx",
        watched: false,
      },
    ],
    frameworks: ["jasmine"],
    preprocessors: {
      "src/**/*test.tsx": ["webpack"],
    },
    reporters: ["spec"],
    singleRun: true,
    webpack: webpackConfig,
    webpackServer: {
      stats: webpackConfig.stats,
    },
  });
};
