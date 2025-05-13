import { ButtonTypography } from "../../typography/button";
import { Container } from "./styles";
import { DS_ButtonProps } from "./types";

export function DS_Button({leftIcon, children, ...props}: DS_ButtonProps) {
    return (
        <Container {...props}>
            {leftIcon && <span data-testid="left-icon">{leftIcon}</span>}
            <ButtonTypography {...props}>{children}</ButtonTypography>
        </Container>
    )
}