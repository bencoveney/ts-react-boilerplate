import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

// Bad typings
const adapterHack = (Adapter as any).default;

Enzyme.configure({ adapter: new adapterHack() });

const context = require.context(".", true, /\.test\.tsx?$/);
context.keys().forEach(context);
