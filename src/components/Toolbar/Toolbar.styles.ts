import styled from "styled-components";
import { Cursor } from "../../state";
import { NoteAction } from "../Note/Note.styles";

export const ToolbarContainer = styled.div`
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
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin: 8px;
  touch-action: none;

  cursor: ${Cursor.HAND}, grab;

  &:active {
    cursor: ${Cursor.HAND_GRABBING}, grabbing;
  }

  &:focus {
    outline: none;
  }

  & > ${NoteAction} > svg {
    cursor: ${Cursor.POINTER}, pointer;
  }
`;
