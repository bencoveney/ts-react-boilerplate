import * as Karma from "karma";
import * as Path from "path";
import * as Webpack from "webpack";
import webpackConfig from "./webpack.karma";

// Karma configuration options, extended to allow additional plugin options.
const options: Karma.ConfigOptions & { [key: string]: any } = {
  // Browsers that tests will be run in.
  browsers: ["Chrome"],

  // Code coverage report output.
  coverageIstanbulReporter: {
    dir: Path.join(__dirname, "coverage"),
    fixWebpackSourcePaths: true,
    reports: [ "html" ],
  },

  // Prevent duplicated console output.
  client: {
    captureConsole: false,
  },

  // Files that will be loaded as entry points for test execution.
  files: [
    {
      pattern: "src/tests.ts",
      watched: false,
    },
  ],

  // Framework integrations that will be included while testing.
  frameworks: ["jasmine"],

  mime: {
    "text/x-typescript": ["ts", "tsx"],
  },

  // Preprocess test files with webpack.
  preprocessors: {
    "src/tests.ts": ["webpack"],
  },

  // Report to console and the coverage report.
  reporters: ["spec", "coverage-istanbul"],

  // Just run the tests once.
  singleRun: true,

  // Webpack configuration for tests is loaded from a different file and
  // included here.
  webpack: webpackConfig,
  webpackServer: {
    stats: webpackConfig.stats,
  },
};

module.exports = (config: Karma.Config) => config.set(options);
