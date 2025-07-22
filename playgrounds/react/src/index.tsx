import React from "react";
import ReactDOM from "react-dom/client";

import "@ds.e/scss/lib/Utilities.css";
import "@ds.e/scss/lib/Text.css";
import "@ds.e/scss/lib/Margin.css";
import "@ds.e/scss/lib/global.css";

import { Text, Color, Margin } from "@ds.e/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div>
    <Margin left>
      <Text size={"xs"}>this is some text</Text>
    </Margin>
  </div>
);
