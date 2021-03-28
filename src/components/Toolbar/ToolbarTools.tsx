import { forwardRef } from "react";
import {
  Eraser,
  PaintBucket,
  PenNib,
  PencilCircle,
  MarkerCircle,
  TextT,
  Eyedropper,
  ListPlus,
  Question,
} from "phosphor-react";
import { nanoid } from "nanoid";
import { useSetRecoilState } from "recoil";

import { Tool, noteIdsAtom, settingsAtom } from "../../state";
import Toolbar, { ToolbarProps } from ".";
import ToolButton from "./ToolButton";

const ToolbarTools = forwardRef<HTMLDivElement, ToolbarProps>(
  ({ id, as }, ref) => {
    const setNodeIds = useSetRecoilState(noteIdsAtom);
    const setSettings = useSetRecoilState(settingsAtom);

    const setShowOnboarding = () => {
      setSettings((s) => ({ ...s, has_onboarded: false }));
    };

    const addNote = () => {
      setNodeIds((ids) => [...ids, `note-${nanoid()}`]);
    };

    return (
      <Toolbar ref={ref} id={id} as={as} style={{ position: "sticky", top: 0 }}>
        <ToolButton
          title="Add note"
          icon={ListPlus}
          tool={Tool.NONE}
          onClick={addNote}
        />
        <ToolButton
          title="Show help"
          icon={Question}
          tool={Tool.NONE}
          onClick={setShowOnboarding}
        />
        <ToolButton title="Pen" toggleable icon={PenNib} tool={Tool.PEN} />
        <ToolButton
          title="Pencil"
          toggleable
          icon={PencilCircle}
          tool={Tool.PENCIL_CIRCLE}
        />
        <ToolButton
          title="Marker"
          toggleable
          icon={MarkerCircle}
          tool={Tool.MARKER_CIRCLE}
        />
        <ToolButton
          title="Paintbucket"
          toggleable
          icon={PaintBucket}
          tool={Tool.PAINT}
        />
        <ToolButton title="Text" toggleable icon={TextT} tool={Tool.TEXT} />
        <ToolButton
          title="Eraser"
          toggleable
          icon={Eraser}
          tool={Tool.ERASER}
        />
        <ToolButton
          title="Eyedropper"
          toggleable
          icon={Eyedropper}
          tool={Tool.EYEDROPPER}
        />
      </Toolbar>
    );
  }
);

export default ToolbarTools;
