import { useState } from "react";
import { DS_InputProps } from "./types";
import { Container, StyledInputErrorMessage, StyledLabel } from "./styles";
import { InputTypography } from "../../typography/input";

export function DS_Input({ label, hasError, onFocus, onBlur, errorMessage, value, ...props }: DS_InputProps) {
    const [isFloating, setIsFloating] = useState(!!value);

    return (
        <Container>
            <InputTypography
                {...props}
                value={value}
                hasError={hasError}
                onFocus={(e) => {
                    setIsFloating(true);
                    if (onFocus) onFocus(e);
                }}
                onBlur={(e) => {
                    setIsFloating(!!e.target.value);
                    if (onBlur) onBlur(e);
                }}
            />
            <StyledLabel data-testid="test-label" htmlFor={props.id} $isFloating={isFloating}>{label}</StyledLabel>
            {hasError && <StyledInputErrorMessage>{errorMessage}</StyledInputErrorMessage>}
        </Container>);
}