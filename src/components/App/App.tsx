import React, { MutableRefObject, useRef } from "react";
import { createGlobalStyle } from "styled-components";
import { WindupChildren } from "windups";

import { Cursor } from "../../state";
import { AppContainer, TextPad } from "./App.styles";
import ToolbarTools from "../Toolbar/ToolbarTools";
import Toolbar from "../Toolbar";

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
  const containerRef = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  return (
    <AppContainer ref={containerRef}>
      <Style />
      <ToolbarTools ref={containerRef} />
      <Toolbar ref={containerRef}>
        <div
          style={{
            height: 600,
            width: 400,
            borderRadius: 6,
            border: "2px solid black",
            backgroundColor: "white",
            boxShadow: "4px 4px 0 0 black",
            padding: 16,
          }}
        >
          <WindupChildren>
            <TextPad contentEditable>
              {"Welcome to "}
              <span style={{ fontWeight: "bold" }}>Phosphor Draw</span>
              {"..."}
              <br />
              <br />
              This is a demo of some of the cool things you can build with{" "}
              <a
                href="https://phosphoricons.com"
                style={{ fontWeight: "bold" }}
              >
                Phosphor Icons
              </a>
              , a flexible icon pack for everyone.
              <br />
              <br />
              With tons of unique interface icons for all sorts of applications,
              you can build calculators, design applications, writing apps and
              twitter clones. Anything your heart desires!
            </TextPad>
          </WindupChildren>
        </div>
      </Toolbar>
    </AppContainer>
  );
};

export default App;
