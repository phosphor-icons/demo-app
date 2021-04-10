import styled from "styled-components";
import { Cursor } from "../../state";

export const SettingsContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: inline-flex;
  gap: 16px;
  padding: 16px;

  & > svg {
    cursor: ${Cursor.POINTER}, pointer;
  }
`;

export const SettingsPane = styled.div`
  border-radius: 6px;
  border: 2px solid black;
  background-color: white;
  box-shadow: 4px 4px 0 0 black;
  min-width: 200px;
  min-height: 100px;
`;
