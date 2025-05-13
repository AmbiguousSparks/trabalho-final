import { TextProps } from "../common/types";
import { StyledLegend } from "./styles";

export function LegendTypography({children, ...props}: TextProps){
    return <StyledLegend {...props}>{children}</StyledLegend>
}