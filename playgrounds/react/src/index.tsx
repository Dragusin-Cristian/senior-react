import React from "react";
import ReactDOM from "react-dom/client";
import "@ds.e/scss/lib/Button.css";

import { Button } from "@ds.e/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Button label="Example button" />);
