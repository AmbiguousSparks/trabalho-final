import { StyledBody } from "./styles";
import { TextProps } from "../common/types";

export function BodyTypography(children: TextProps){
    return <StyledBody color={children.color}>{children.children}</StyledBody>
}