import { useEffect, useState } from "react";
import Reveal from "reveal.js";
// @ts-ignore
import RevealNotes from "reveal.js/plugin/notes/notes.esm.js";
// @ts-ignore
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/night.css";
import "reveal.js/plugin/highlight/monokai.css";

let initialized = false;

export default function App({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!initialized) {
      Reveal.initialize({
        plugins: [RevealNotes, RevealHighlight],
        history: true,
      });
      initialized = true;
    }
  }, []);

  return (
    <div className="reveal">
      <div className="slides">{children}</div>
    </div>
  );
}
