import * as Webpack from "webpack";
import webpackConfig from "./webpack.dev";

module.exports = (config: any) => {
  config.set({
    browsers: ["Chrome"],
    concurrency: Infinity,
    coverageReporter: {
      dir: "coverage/",
      reporters: [
        { type: "html" },
        { type: "text" },
        { type: "text-summary" },
      ],
    },
    files: [
      { pattern: "src/**/*.test.tsx", watched: false },
    ],
    frameworks: ["jasmine"],
    mime: { "text/x-typescript": ["ts", "tsx"] },
    preprocessors: {
      "src/**/!(*.spec).*": [ "webpack", "sourcemap", "coverage" ],
    },
    reporters: ["spec", "coverage"],
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: webpackConfig.devServer.stats,
    },
  });
};

// "bundle-loader": "^0.5.2",
// "chai": "^3.5.0",
// "gulp": "^3.8.11",
// "istanbul": "^0.4.5",
// "istanbul-instrumenter-loader": "^1.2.0",
// "karma": "^1.4.1",
// "karma-coverage": "^1.1.1",
// "karma-mocha": "^1.3.0",
// "karma-phantomjs-launcher": "^1.0.2",
// "karma-spec-reporter": "0.0.26",
// "karma-webpack": "^2.0.2",
// "mocha": "^3.2.0",
// "mocha-loader": "^1.1.0",
// "phantomjs-polyfill": "0.0.2",
// "webpack": "^1.14.0",
// "webpack-dev-server": "^1.16.3"
