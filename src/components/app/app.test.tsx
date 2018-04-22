import * as Enzyme from "enzyme";
import JasmineEnzyme from "jasmine-enzyme";
import * as React from "react";
import { App } from "./app";

describe(
  "<App />",
  () => {
    beforeEach(
      () => {
        JasmineEnzyme();
      },
    );
    it(
      "Should be a component",
      () => {
        const app = Enzyme.shallow(<App />);
        expect(app).toHaveTagName("div");
      },
    );
  },
);
