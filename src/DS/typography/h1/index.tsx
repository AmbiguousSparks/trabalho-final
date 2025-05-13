import { TextProps } from "../common/types";
import { StyledH1 } from "./styles";

export function H1Typography({children, ...props}: TextProps){
    return <StyledH1 {...props}>{children}</StyledH1>
}