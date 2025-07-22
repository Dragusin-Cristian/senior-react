import React from "react";
import ReactDOM from "react-dom/client";

import "@ds.e/scss/lib/Utilities.css";
import "@ds.e/scss/lib/Text.css";
import "@ds.e/scss/lib/Margin.css";
import "@ds.e/scss/lib/Select.css";
import "@ds.e/scss/lib/global.css";

import { Margin, Select } from "@ds.e/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div>
    <Margin top right bottom left space="lg">
      <Select
        options={[
          { label: "value 1", value: "Banana" },
          { label: "value 2", value: "Orange" },
        ]}
      />
    </Margin>
  </div>
);
