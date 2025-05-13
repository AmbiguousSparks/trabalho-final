import { DS_InputProps } from "../../components/Input/types";
import { StyledInput } from "./styles";

export function InputTypography({ hasError, ...props }: DS_InputProps) {
    return <StyledInput hasError={hasError} {...props}></StyledInput>
}