import styled from "styled-components";
import { Cursor } from "../../state";

export const NoteContainer = styled.div`
  background-color: white;
  border: 2px solid black;
  border-radius: 6px;
  box-shadow: 4px 4px 0 0 black;
`;

export const NoteContent = styled.textarea`
  resize: none;
  min-width: 400px;
  height: 100%;
  min-height: 300px;
  padding: 16px;
  border: none;
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

export const NoteHidden = styled.div`
  display: grid;
  place-items: center;
  padding: 16px;
  min-width: 400px;
  min-height: 40px;
`;
