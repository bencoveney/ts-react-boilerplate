const context = require.context(".", true, /\.test\.tsx?$/);
context.keys().forEach(context);
