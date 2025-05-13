import styled from "styled-components";
import { DS_Colors } from "../../colors";
import { DS_InputProps } from "../../components/Input/types";
import { DS_Radius } from "../../radius";

export const StyledInput = styled.input<DS_InputProps>`
    font-size: 16px;
    background-color: ${DS_Colors.secondary};
    color: ${DS_Colors.white};
    width: 100%;
    font-size: 16px;
    border-radius: ${DS_Radius.s1};
    height: 56px;
    box-shadow: none;
    outline: none;
    padding: 0 16px;

    &:focus {
        ${(props) => props.hasError ? `
            border: 3px solid ${DS_Colors.error};
        ` : `
            border: 3px solid ${DS_Colors.primary};            
        `}
    }

    ${(props) => props.hasError && `
        border: 3px solid ${DS_Colors.error};
    `}
`
