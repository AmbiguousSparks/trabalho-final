import { InputHTMLAttributes } from "react";

export interface DS_InputProps extends InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean;
    errorMessage?: string;
    label?: string;
    isFloating?: boolean;
    isFocused?: boolean;
}