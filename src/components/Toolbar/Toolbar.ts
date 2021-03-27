import styled from "styled-components";
import { Cursor } from "../../state";

export const ToolbarContainer = styled.nav`
  display: inline-flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 16px;
  gap: 8px;

  &:focus {
    outline: none;
  }
`;

export const ToolbarDragHandle = styled.div`
  display: flex;
  align-items: center;
  margin: 8px;
  touch-action: none;

  cursor: ${Cursor.HAND}, grab;

  &:active {
    cursor: ${Cursor.HAND_GRABBING}, grabbing;
  }

  &:focus {
    outline: none;
  }

  & > svg {
    pointer-events: none;
    touch-action: none;
  }
`;
