import styles from "./Textarea.module.scss"

import { ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes, Ref, forwardRef } from "react";

type DefaultInputPropsType = 
        DetailedHTMLProps<InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

type TextareaPropsType = DefaultInputPropsType & {
    id?: string
    name?: string
    labelTitle?: string
    textLength?: number
    textMaxLength?: string
    error?: any
    onChangeText?: (value: string) => void
}

export const Textarea = forwardRef((props: TextareaPropsType, ref: Ref<HTMLInputElement>) => {
    const {
        id, name, labelTitle, textLength, textMaxLength, error, 
        onChange, onChangeText, ...restProps
    } = props

    const onChangeCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange && onChange(e)
        onChangeText && onChangeText(e.currentTarget.value)
    }

    return (
        <div className={styles.textareaContainer}>
            { labelTitle && <label htmlFor={id} className={styles.label}>{labelTitle}</label> }
            <textarea
                id={id}
                name={name}
                className={styles.textarea}
                onChange={onChangeCallback}
                aria-describedby={`textarea-hint-${id}`}
                {...restProps}
            >
            </textarea>

            <div className={styles.infoContainer}>
                <div className={styles.errorContainer}>
                    { error && <span id={`textarea-hint-${id}`} className={styles.errorText}>{error}</span> }
                </div>
                <div className={styles.textareaLength}>{textLength}/{textMaxLength}</div>
            </div>
        </div>
    )
})