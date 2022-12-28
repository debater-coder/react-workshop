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
      <Slide notes="Point to design poster in makerspace. Focus on first three points.">
        <h3>App design</h3>
        <p className="fragment">
          Not design as in visual design, but more about designing the features.
        </p>
        <ol>
          <li className="fragment">
            <strong>Empathise:</strong> Who is your target market? What
            problems/pain points do they have?
          </li>
          <li className="fragment">
            <strong>Define:</strong> Define the problem you are trying to solve.
          </li>
          <li className="fragment">
            <strong>Ideate:</strong> Brainstorm lots of ideas of how to solve
            the problem.
          </li>
          <li className="fragment">
            <strong>Prototype:</strong> Build a prototype of the solution you
            like the most.
          </li>
          <li className="fragment">
            <strong>Test:</strong> Test your solution in the real world.
          </li>
        </ol>
      </Slide>
      <Slide>
        <Slide>
          <h3>What is an app?</h3>
          <blockquote>
            <strong>app:</strong> a program or piece of software designed to
            fulfil a particular purpose.
          </blockquote>
          <blockquote>
            <strong>web app:</strong> an app built using web technologies. (As
            opposed to a web page, which just contains static content.)
          </blockquote>
        </Slide>
        <Slide>
          <h3>Apps can be mobile, desktop or both.</h3>
        </Slide>
      </Slide>
      <Slide>
        <h3>Web apps are 'real' apps too</h3>
        <ul>
          <li className="fragment">Electron (for desktop apps)</li>
          <li className="fragment">Ionic (for mobile apps)</li>
          <li className="fragment">React Native (for both)</li>
          <li className="fragment">
            <strong>PWAs</strong> (web apps that can be added to home screen and
            use native features)
          </li>
        </ul>
      </Slide>
    </App>
  </React.StrictMode>
);
