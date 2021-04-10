import { forwardRef } from "react";
import { useSetRecoilState } from "recoil";
import { Trash } from "phosphor-react";
import { WindupChildren } from "windups";

import { settingsAtom } from "../../state";
import { IntroContainer, TextPad } from "./Intro.styles";
import Toolbar, { ToolbarProps } from "../Toolbar";
import { NoteAction } from "../Note/Note.styles";

const Intro = forwardRef<HTMLDivElement, ToolbarProps>(({ id }, ref) => {
  const setSettings = useSetRecoilState(settingsAtom);
  const setHasOnboarded = () => {
    setSettings((s) => ({ ...s, has_onboarded: true }));
  };

  return (
    <Toolbar
      ref={ref}
      id={id}
      extras={
        <NoteAction onClick={setHasOnboarded}>
          <Trash size={24} weight="fill" />
        </NoteAction>
      }
    >
      <IntroContainer>
        <WindupChildren>
          <TextPad>
            {"Welcome to "}
            <span style={{ fontWeight: "bold" }}>Phosphor Draw</span>
            {"..."}
            <br />
            <br />
            This is a demo of some of the cool things you can build with{" "}
            <a href="https://phosphoricons.com" style={{ fontWeight: "bold" }}>
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
      </IntroContainer>
    </Toolbar>
  );
});

export default Intro;
