import clsx from "clsx";
import styles from "./Button.module.scss"

import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { ButtonThemes } from "../../data/enums";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    id?: string
    className?: string
    theme?: ButtonThemes
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
    const { id, className, theme = ButtonThemes.Primary, children, ...restProps } = props

    return (
        <button 
            id={id} 
            className={clsx(styles.button, [className, styles[theme]])}
            {...restProps}
        >
            {children}
        </button>
    )
}