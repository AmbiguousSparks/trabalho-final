import { ButtonHTMLAttributes, ReactNode } from "react";

export interface DS_ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    state: "primary" | "secondary" | "accent";
    size: "default" | "medium" | "large" | "ultra-large";
    leftIcon?: ReactNode;
}