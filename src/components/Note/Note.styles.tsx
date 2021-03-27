import styled from "styled-components";
import { Cursor } from "../../state";

export const NoteContainer = styled.div``;

export const NoteContent = styled.textarea`
  resize: none;
  width: 400px;
  min-height: 300px;
  padding: 16px;
  background-color: white;
  border: 2px solid black;
  border-radius: 6px;
  box-shadow: 4px 4px 0 0 black;
  transition: all 100ms ease;
  font-size: 16px;
  cursor: ${Cursor.POINTER}, pointer;

  &:focus {
    outline: none;
  }
`;

export const NoteAction = styled.div`
  height: 24px;
`;
