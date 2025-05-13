import { TextProps } from "../common/types";
import { StyledH2 } from "./styles";

export function H2Typography({children, ...props}: TextProps){
    return <StyledH2 {...props}>{children}</StyledH2>
}