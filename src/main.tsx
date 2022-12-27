import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Slide from "./components/Slide";
import "./index.css";
import { Sandpack } from "@codesandbox/sandpack-react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App>
      <Slide>
        <h1>Slide 1</h1>
        <p>Slide 1 content</p>
      </Slide>
      <Slide>
        <h1>Slide 2</h1>
        <p>Let's try to embed a sandbox</p>
        <Sandpack template="react" theme={"dark"} />
      </Slide>
      <Slide>
        <h1>Slide 3</h1>
        <p>Slide 3 content</p>
      </Slide>
    </App>
  </React.StrictMode>
);
