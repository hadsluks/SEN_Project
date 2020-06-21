import React from "react";
import ReactDOM from "react-dom";

import Danger from "../components/Typography/Danger";

describe("Danger component", () => {
  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Danger
        children="I will be the leader of a company that ends up being worth billions of
        dollars, because I got the answers..."
      />,
      div
    );
  });
});
