import styled, { css } from "styled-components";
import { Cursor } from "../../state";

export const ToolButtonContainer = styled.button<{ $active: boolean }>`
  display: grid;
  place-items: center;
  padding: 4px 8px;
  background-color: white;
  border: 2px solid black;
  border-radius: 6px;
  box-shadow: 4px 4px 0 0 black;
  margin-right: -1px;
  transition: all 100ms ease;
  cursor: ${Cursor.POINTER}, pointer;
  z-index: 2;

  &:focus {
    outline: none;
  }

  &:active {
    z-index: 1;
    color: white;
    background-color: #925bff;
    transform: translate(4px, 4px);
    box-shadow: 0 0 0 0 black;
  }

  ${({ $active }) =>
    $active &&
    css`
      color: white;
      background-color: #925bff;
      transform: translate(4px, 4px);
      box-shadow: 0 0 0 0 black;
    `}
`;
