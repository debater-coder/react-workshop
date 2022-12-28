import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Slide from "./components/Slide";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App>
      <Slide>
        <h1>Building React Apps</h1>
      </Slide>
      <Slide>
        <h3>Course objectives:</h3>
        <ul>
          <li className="fragment">
            Learn web app development tools like React
          </li>
          <li className="fragment">Learn general app design principles</li>
          <li className="fragment">Design and build your own web app</li>
        </ul>
      </Slide>
      <Slide>
        <h3>The plan:</h3>
        <ul>
          <li className="fragment">App design</li>
          <li className="fragment">
            Learn the fundementals of React, and do some challenges to practice
          </li>
          <li className="fragment">Start building the app</li>
          <li className="fragment">Cover the necessary principles as we go</li>
        </ul>
      </Slide>
    </App>
  </React.StrictMode>
);
