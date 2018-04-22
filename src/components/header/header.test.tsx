import * as Enzyme from "enzyme";
import JasmineEnzyme from "jasmine-enzyme";
import * as React from "react";
import { Header } from "./header";

describe(
  "<Header />",
  () => {
    beforeEach(
      () => {
        JasmineEnzyme();
      },
    );
    it(
      "Should create a header with the correct text",
      () => {
        const header = Enzyme.shallow(<Header value={"hello"} />);
        expect(header).toHaveTagName("h1");
        expect(header).toHaveText("hello");
      },
    );
  },
);
