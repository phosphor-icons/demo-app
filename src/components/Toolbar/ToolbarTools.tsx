import { forwardRef } from "react";
import {
  Eraser,
  PaintBucket,
  PenNib,
  PencilCircle,
  MarkerCircle,
  TextT,
  Eyedropper,
} from "phosphor-react";

import { Tool } from "../../state";
import Toolbar from ".";
import ToolButton from "./ToolButton";

const ToolbarTools = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <Toolbar ref={ref}>
      <ToolButton icon={PenNib} tool={Tool.PEN} />
      <ToolButton icon={PencilCircle} tool={Tool.PENCIL_CIRCLE} />
      <ToolButton icon={MarkerCircle} tool={Tool.MARKER_CIRCLE} />
      <ToolButton icon={PaintBucket} tool={Tool.PAINT} />
      <ToolButton icon={TextT} tool={Tool.TEXT} />
      <ToolButton icon={Eraser} tool={Tool.ERASER} />
      <ToolButton icon={Eyedropper} tool={Tool.EYEDROPPER} />
    </Toolbar>
  );
});

export default ToolbarTools;
