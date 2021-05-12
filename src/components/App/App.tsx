import React, { MutableRefObject, useRef } from "react";
import { createGlobalStyle } from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { useHotkeys } from "react-hotkeys-hook";

import { Cursor, noteIdsAtom, settingsAtom } from "../../state";
import { AppContainer } from "./App.styles";
import Settings from "../Settings";
import ToolbarTools from "../Toolbar/ToolbarTools";
import Note from "../Note";
import usePersistence from "../../hooks/usePersistence";
import Intro from "../Intro/Intro";

const Style = createGlobalStyle`
  body, html {
    cursor: ${Cursor.DEFAULT}, auto;
    background-color: #FFD171;
    margin: 0;
    font-family: 'Courier New', Courier, monospace;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`;

const App: React.FC<{}> = () => {
  const containerRef =
    useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;

  const [noteIds, setNoteIds] = useRecoilState(noteIdsAtom);
  const { has_onboarded } = useRecoilValue(settingsAtom);
  const { saveSnapshotToDisk } = usePersistence({ minutes: 1 });
  
  useHotkeys("ctrl+s", saveSnapshotToDisk, {
    enableOnTags: ["TEXTAREA", "INPUT"],
  });

  const onDeleteNote = (id: string) => {
    setNoteIds((ids) => ids.filter((i) => i !== id));
  };

  return (
    <AppContainer ref={containerRef}>
      <Style />
      <Settings />
      <ToolbarTools ref={containerRef} id="tools" as="nav" />
      {!has_onboarded && <Intro ref={containerRef} id="intro" />}
      {noteIds.map((id) => (
        <Note key={id} id={id} ref={containerRef} onDelete={onDeleteNote} />
      ))}
    </AppContainer>
  );
};

export default App;
