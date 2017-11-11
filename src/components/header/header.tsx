import * as React from "react";

const style: Readonly<React.CSSProperties> = {
  color: "indigo",
  fontSize: "1.8em",
};

export const Header: React.SFC<{ value: string }> = (props) => {
  return <h1 style={style}>{props.value}</h1>;
};
