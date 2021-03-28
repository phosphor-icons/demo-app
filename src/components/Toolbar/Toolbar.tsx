import React, { forwardRef, MutableRefObject, useRef } from "react";
import { DotsNine } from "phosphor-react";
import { motion, TapInfo, useDragControls } from "framer-motion";

import { ToolbarContainer, ToolbarDragHandle } from "./Toolbar.styles";

const dragTransition = { power: 0 };

export interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  as?: string | React.ElementType<any>;
  children?: React.ReactNode;
  extras?: React.ReactNode;
}

const Toolbar = forwardRef<HTMLDivElement, ToolbarProps>(
  ({ as, extras, children, style }, ref) => {
    const controls = useDragControls();
    const dragHandleRef = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;

    const rejectOutsideDrag = (
      event: MouseEvent | TouchEvent | PointerEvent,
      info: TapInfo
    ) => {
      if (event.target !== dragHandleRef.current) {
        console.log("handle");
      }
    };

    return (
      <motion.div
        style={{ display: "inline-flex", ...style }}
        drag
        dragConstraints={ref as React.RefObject<HTMLDivElement>}
        dragTransition={dragTransition}
        dragControls={controls}
        dragElastic={0}
        onDragEnd={(e, i) => console.log(e, i)}
      >
        <ToolbarContainer as={as}>
          <ToolbarDragHandle ref={dragHandleRef}>
            <DotsNine size={24} weight="bold" />
            {extras}
          </ToolbarDragHandle>
          {children}
        </ToolbarContainer>
      </motion.div>
    );
  }
);

export default Toolbar;
