import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    label: string;
}

export default function Button({ label, ...rest }: ButtonProps) {
    return <button {...rest}>{label}</button>;
}
