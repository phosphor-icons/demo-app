import styled from "styled-components";
import { Cursor } from "../../state";

export const AppContainer = styled.div`
  height: 100vh;
  overflow: hidden;
`;

export const TextPad = styled.p`
  height: 100%;
  margin: 0;
  /* cursor: ${Cursor.POINTER}, pointer; */

  &:focus {
    outline: none;
  }
`;
