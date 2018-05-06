import * as Enzyme from "enzyme";
import JasmineEnzyme from "jasmine-enzyme";
import * as React from "react";
import { Header } from "./header";

describe(
  "<Header />",
  () => {
    beforeEach(
      () => {
        // Instantiate jasmine-enzyme to ensure the matchers are supported.
        JasmineEnzyme();
      },
    );

    it(
      "Should create a header with the correct text",
      () => {
        // Create the react component.
        const header = Enzyme.shallow(<Header value={"hello"} />);

        // Check it looks like we'd expect.
        expect(header).toHaveTagName("h1");
        expect(header).toHaveText("hello");
      },
    );
  },
);
