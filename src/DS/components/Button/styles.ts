import styled from "styled-components";
import { DS_ButtonProps } from "./types";
import { DS_Spacing } from "../../spacing";
import { DS_Radius } from "../../radius";
import { DS_Colors } from "../../colors";

const buttonSizeMap = new Map<string, { height: string }>();

buttonSizeMap.set("default", {
  height: "40px"
});
buttonSizeMap.set("medium", {
  height: "48px"
});
buttonSizeMap.set("large", {
  height: "56px"
});
buttonSizeMap.set("ultra-large", {
  height: "56px"
});

export const Container = styled.button<DS_ButtonProps>`
    display: flex;
    flext-direction: row;
    justify-content: center;
    align-items: center;
    min-width: 80px;
    width: 100%;
    height: ${(props) => buttonSizeMap.get(props.size)?.height};
    cursor: pointer;

    gap: ${DS_Spacing.s2};
    padding: ${DS_Spacing.s1};
    border-radius: ${DS_Radius.s1};
    transition: background-color 0.2 ease;
    color: ${DS_Colors.white};

    background-color: ${(props) => DS_Colors[props.state]};
`;