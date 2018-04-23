import * as Enzyme from "enzyme";
import JasmineEnzyme from "jasmine-enzyme";
import * as React from "react";
import { Header } from "../header/header";
import { App, tickRateMilliseconds } from "./app";

const tickOnce = () => jasmine.clock().tick(tickRateMilliseconds);

const checkCount = (
  app: Enzyme.ShallowWrapper<any, any>,
  count: number,
) => {
  app.update();
  expect(app.find("div > div")).toHaveText(
    `Welcome to the react/typescript boilerplate ${count}`,
  );
};

describe("<App />", () => {
  beforeEach(() => {
    JasmineEnzyme();
    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it("Should render initially", () => {
    const app = Enzyme.shallow(<App />);
    expect(app).toHaveTagName("div");
    expect(app.find(Header)).toHaveProp("value", "Hello world!");
    checkCount(app, 0);
  });

  it("Should start counting once it is mounted", () => {
    const app = Enzyme.shallow(<App />);
    checkCount(app, 0);
    tickOnce();
    checkCount(app, 1);
    tickOnce();
    checkCount(app, 2);
    app.unmount();
  });
});
