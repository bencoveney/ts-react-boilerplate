import * as React from "react";
import * as Styles from "./styles.css";

export const Header: React.SFC<{
  value: string,
}> = (
  { value },
) => (
  <h1 className={Styles.header}>
    {value}
  </h1>
);
