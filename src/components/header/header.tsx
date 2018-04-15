import * as React from "react";
import * as Styles from "./styles.css";

export const Header: React.SFC<{
  value: string,
}> = (
  props,
) => (
  <h1 className={Styles.header}>
    {props.value}
  </h1>
);
