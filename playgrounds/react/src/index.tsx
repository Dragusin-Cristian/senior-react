import React from "react";
import ReactDOM from "react-dom/client";
import "@ds.e/scss/lib/Utilities.css";

import { Color } from "@ds.e/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Color hexCode="#000" />);
