import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Slide from "./components/Slide";
import "./index.css";
import {
  Sandpack,
  SandpackCodeEditor,
  SandpackLayout,
  SandpackProvider,
} from "@codesandbox/sandpack-react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App>
      <Slide notes="give a short intro">
        <h1>
          <code>Reveal.js</code> test
        </h1>
        <p>Slide 1 content</p>
      </Slide>
      <Slide>
        <h2>Slide 2</h2>
        <p>Let's try to embed a sandbox</p>
        <Sandpack
          template="react"
          theme={"dark"}
          options={{
            showNavigator: true,
            showLineNumbers: true,
            showTabs: true,
          }}
        />
      </Slide>
      <Slide>
        <h2>Slide 3</h2>
        <p>Here's some code (no editor):</p>
        <SandpackProvider template="react" theme={"dark"}>
          <SandpackLayout>
            <SandpackCodeEditor />
          </SandpackLayout>
        </SandpackProvider>
      </Slide>
      <Slide
        data-background-image="http://placekitten.com/g/1920/1080"
        data-background-opacity="0.5"
      >
        <h2 className="r-fit-text">This is a kitten</h2>
      </Slide>
    </App>
  </React.StrictMode>
);
