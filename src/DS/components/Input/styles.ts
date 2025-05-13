import styled from "styled-components";
import { DS_InputProps } from "./types";
import { DS_Colors } from "../../colors";

export const Container = styled.div`
  position: relative;
  margin: 15px 0 0 0;
`;

export const StyledLabel = styled.label<{ $isFloating: boolean }>`
  position: absolute;
  left: 8px;
  top: 16px;
  color: ${DS_Colors.label};
  transition: 0.2s;
  pointer-events: none;
  font-size: 18px;

  ${(props) =>
    props.$isFloating &&
    `
      top: -20px;
      left: 4px;
    `}
`;

export const StyledInputErrorMessage = styled.span<DS_InputProps>`
    font-size: 12px;
    color: ${DS_Colors.error};
    margin-top: 4px;

    position: absolute;
    top: 60px;
    left: 4px;
`