import { DS_ButtonProps } from "../../components/Button/types";
import { StyledButton } from "./styles";

export function ButtonTypography ({children, ...props}: DS_ButtonProps) {
    return <StyledButton {...props}>{children}</StyledButton>
 }