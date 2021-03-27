import React, { forwardRef, MutableRefObject, useRef } from "react";
import { DotsNine } from "phosphor-react";
import { motion, TapInfo, useDragControls } from "framer-motion";

import { ToolbarContainer, ToolbarDragHandle } from "./Toolbar";

const dragTransition = { timeConstant: 20, power: 0 };

const Toolbar = forwardRef<HTMLDivElement, { children: React.ReactNode }>(
  ({ children }, ref) => {
    const controls = useDragControls();
    const dragHandleRef = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;

    const rejectOutsideDrag = (
      event: MouseEvent | TouchEvent | PointerEvent,
      info: TapInfo
    ) => {
      console.log(event.target);
      if (event.target === dragHandleRef.current) {
        console.log("yey");
      }
    };

    return (
      <motion.nav
        style={{ display: "inline-flex" }}
        drag
        dragConstraints={ref as React.RefObject<HTMLDivElement>}
        dragTransition={dragTransition}
        dragControls={controls}
        // onTapStart={rejectOutsideDrag}
        // onDrag={rejectOutsideDrag}
        draggable={false}
      >
        <ToolbarContainer>
          <ToolbarDragHandle ref={dragHandleRef}>
            <DotsNine size={24} weight="bold" />
          </ToolbarDragHandle>
          {children}
        </ToolbarContainer>
      </motion.nav>
    );
  }
);

export default Toolbar;
