import clsx from "clsx"
import styles from "./Input.module.scss"

import {
    ChangeEvent, 
    DetailedHTMLProps, 
    InputHTMLAttributes, 
    forwardRef,
    Ref
} from 'react'
import { InputThemes } from "../../data/enums"

type DefaultInputPropsType = 
        DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputPropsType = DefaultInputPropsType & {
    id?: string
    labelTitle?: string
    theme?: InputThemes.BackgroundGray | InputThemes.BackgroundWhite
    error?: any
    advantage?: boolean
    onChangeText?: (value: string) => void
}

export const Input = forwardRef((props: InputPropsType, ref: Ref<HTMLInputElement>) => {
    const { 
        onChange, onChangeText, id, theme = InputThemes.BackgroundWhite, 
        error, advantage, labelTitle, ...restProps 
    } = props
    
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeText && onChangeText(e.currentTarget.value)
    }

    return (
        <div className={styles.inputContainer}>
            { labelTitle && <label htmlFor={id} className={styles.label}>{labelTitle}</label> }
            <input
                type="text"
                onChange={onChangeCallback}
                id={id}
                className={clsx(styles.input, styles[theme])}
                aria-describedby={`input-hint-${id}`}
                {...restProps}
            />

            {
                error &&
                    <div className={styles.errorContainer}>
                        {error && <span id={`input-hint-${id}`} className={styles.errorText}>{error}</span>}
                    </div>
            }
        </div>
    )
})