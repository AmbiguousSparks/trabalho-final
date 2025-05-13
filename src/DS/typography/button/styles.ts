import styled from "styled-components";
import { DS_Colors } from "../../colors";
import { DS_ButtonProps } from "../../components/Button/types";

const fontSizesMap = new Map<string, number>();

fontSizesMap.set("default", 16);
fontSizesMap.set("medium", 16);
fontSizesMap.set("large", 18);
fontSizesMap.set("ultra-large", 18);

export const StyledButton = styled.span<DS_ButtonProps>`
    font-size: ${(props) => fontSizesMap.get(props.size)}px;
    color: ${DS_Colors.white};
`