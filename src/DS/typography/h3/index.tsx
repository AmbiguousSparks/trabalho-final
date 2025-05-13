import { StyledH3 } from "./styles";
import { TextProps } from "../common/types";

export function H3Typography({children, ...props}: TextProps){
    return <StyledH3 {...props}>{children}</StyledH3>
}