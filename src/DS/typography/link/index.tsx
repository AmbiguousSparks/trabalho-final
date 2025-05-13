import { PropsWithChildren } from "react";
import { StyledLink } from "./styles";

export function LinkTypography({ children, ...props }: PropsWithChildren) {
    return <StyledLink {...props}>{children}</StyledLink>
}