import * as React from "react";
import * as ReactDOM from "react-dom";
import Container from "./components/container";

declare let module: any;

ReactDOM.render(
  <div>
    <Container />
  </div>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
