// This file is the entry point for unit test execution.

import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

// Configure enzyme with the correct adapter for the version of react. Cast the
// adapter to work around wonky typings.
const adapterHack = (Adapter as any).default;
Enzyme.configure({ adapter: new adapterHack() });

// Include all files matching ...test.ts and ...test.tsx
const context = require.context(".", true, /\.test\.tsx?$/);
context.keys().forEach(context);
