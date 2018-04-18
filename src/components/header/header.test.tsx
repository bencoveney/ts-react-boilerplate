import { Header } from "./header";

describe(
  "Header component",
  () => {
    it(
      "should be nice",
      () => {
        const buh = Header({ value: "Hello" });
        expect(buh).toBeDefined();
      },
    );
  },
);
