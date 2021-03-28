import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { MutableSnapshot, RecoilRoot } from "recoil";
import { readTextFile } from "tauri/api/fs";

import { noteIdsAtom, noteAtoms, settingsAtom, AppState } from "./state";
import App from "./components/App";

(async function () {
  let noteString: string | undefined = undefined;
  try {
    noteString = await readTextFile("data/notes.json");
  } catch (e) {
    console.error(e);
  }

  const initialize = noteString
    ? ({ set }: MutableSnapshot) => {
        const state = JSON.parse(noteString!!) as AppState;
        set(
          noteIdsAtom,
          state.notes.map(({ id }) => id)
        );
        state.notes.forEach(({ id, content, locked }) => {
          set(noteAtoms(id), { content, locked });
        });
        set(settingsAtom, state.settings);
      }
    : undefined;

  ReactDOM.render(
    <React.StrictMode>
      <RecoilRoot initializeState={initialize}>
        <App />
      </RecoilRoot>
    </React.StrictMode>,
    document.getElementById("root")
  );
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
