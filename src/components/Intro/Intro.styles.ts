import styled from "styled-components";

export const IntroContainer = styled.div`
  width: 400px;
  border-radius: 6px;
  border: 2px solid black;
  background-color: white;
  box-shadow: 4px 4px 0 0 black;
  padding: 16px;
`;

export const TextPad = styled.p`
  height: 100%;
  margin: 0;

  &:focus {
    outline: none;
  }
`;
