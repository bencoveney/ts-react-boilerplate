# ts-react-boilerplate

[![CircleCI](https://circleci.com/gh/bencoveney/ts-react-boilerplate/tree/master.svg?style=shield)](https://circleci.com/gh/bencoveney/ts-react-boilerplate/tree/master)
[![Greenkeeper badge](https://badges.greenkeeper.io/bencoveney/ts-react-boilerplate.svg)](https://greenkeeper.io/)

A boilerplate configuration for web applications with TypeScript, React and
WebPack.

## About

This project aims to simplify the process of getting up-and-running with a
complete base configuration to build upon.

With many boilerplate projects there will be a lot of configuration files and
dependencies and it can be difficult to work out why things are included and
what can be changed. `ts-react-boilerplate` aims to have readable, documented
configuration files to help modifications be made in then future.

Rather than installing the boilerplate project using a CLI tool or NPM package
we recommend you pull/merge the git repository into a branch in your project.
This allows you to:

- Pick which parts of the configuration you want.
- Merge the boilerplate in to your existing project.
- Pull again at a later date to get updated dependencies and configuration.

See "Usage - Install" for instructions.

## Requirements

Requires node `circleci/node:6.13` and compiles to the TypeScript `es6` target
by default.

## React and TypeScript

The project includes TypeScript compilation which can be configured in `tsconfig.json`.

- `src/index.tsx` serves as the initial entry point and starts rendering React
  at the root of your document.
- `src/components/` contains some sample react components.

All webpack configuration files are also written in TypeScript.

## Webpack

A complete up-to-date webpack configuration is included with:

- Hot module reloading.
- Source maps.
- HTML page creation from the `src/index.ejs` template.
- Favicons generation using `assets/favicon.png`.
- Inclusion of style and image assets.

Relevant information (for example the project name) is loaded from the
`package.json` file and used throughout.

Webpack output goes to the `docs/` directory by default for easy integration
with GitHub Pages.

- `webpack.common.ts` contains the base configuration that will be applied in
  all scenarios.
- `webpack.dev.ts` contains development configuration for quicker compilation
  and easier debugging. When running in the browser any JavaScript errors will
  be shown in an error overlay.
- `webpack.prod.ts` contains production configuration which produces a
  compressed bundle.

The file `.babelrc` supports hot module reloading (using `react-hot-loader`).

## Linting

TypeScript code is linted using the recommended `tslint` ruleset as well as the
`tslint-react` rules. This is configured in `tslint.json` and generally uses
the default rule-set, with a couple of exceptions:

- Perfer 2 spaces for indentation.
- Avoid `I` prefix on interfaces.
- Shorter line lengths of 80 characters.
- `no-implicit-dependencies` to support `devDependencies` in `package.json`

Markdown linting is included and can be configured in `mdlint.json`.

The `package.json` file is linted and can be configured in
`.npmpackagejsonlintrc.json`.

## Styling

CSS can be structured as CSS modules, with typings files automatically
generated.

The following libraries are also included during the webpack build:

- Meyerweb CSS reset
- Extended material design icons library.

## VSCode

Editor settings are included `.vscode/settings.json` and reflect linter rules.
Install the [npm extension][vscode npm] for script support.

## CI

Configuration for CircleCI (v2) is included in `.circleci/config.yml` to support
this project. If you need CI it is straightforward to set up and free for open
source projects. The config file specified the node version and test command.

Greenkeeper is used to keep this project's dependencies up to date. We have
some additional content in `package.json` to work around
[this issue][source-map issue].

## Usage

### Install

To set up the boilerplate in your project:

1. You need a git repository. Create a new one or open an existing one.
2. If you are creating a new project you may want to commit an initial
   `package.json` using `npm init`
3. Start a branch using `git checkout -b boilerplate`
4. Pull the boilerplate project's master branch into your current one:
   `git pull --allow-unrelated-histories
   https://github.com/bencoveney/ts-react-boilerplate.git master`
5. Resolve any conflicts - for example combining conflicting `dependencies` in
   `package.json`.
6. `npm install` to get the dependencies.
7. `npm test` to conform everything is working.
8. You may wish to squash the merge commit to avoid boilerplate project entries
   appearing in the commit log.

### Upgrade

To get updates to dependencies and configuration files:

1. Start a branch using `git checkout -b boilerplate`
2. Pull the boilerplate project's master branch into your current one:
   `git pull --allow-unrelated-histories
   https://github.com/bencoveney/ts-react-boilerplate.git master`
3. Resolve any conflicts - for example combining conflicting `dependencies` in
   `package.json`.
4. `npm install` to get the dependencies.
5. `npm test` to conform everything is working.
6. You may wish to squash the merge commit to avoid boilerplate project entries
   appearing in the commit log.

## Scripts

- `npm test` - Runs `lint` and `prod` tasks.
- `npm run prod` - Runs webpack using the `prod` configuration.
- `npm run dev` - Runs webpack using the `dev` configuration.
- `npm run lint` - Lints markdown and webpack config files.

## Notes

We are using a pre-release version of `awesome-typescript-loader` to get a fix
for deprecation warnings.

We are using a specific version of `@types/source-map` to fix issues in webpack
compilation.

[vscode npm]: https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script
[source-map issue]: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/23649
