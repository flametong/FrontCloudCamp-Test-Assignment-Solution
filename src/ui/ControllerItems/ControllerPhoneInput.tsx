import styles from "../Input/Input.module.scss"

import { Controller } from "react-hook-form"
import { MaskedInput, createDefaultMaskGenerator } from "react-hook-mask"
import clsx from "clsx"

interface ControllerPhoneInputProps {
    id?: string,
    name: string,
    placeholder?: string,
    labelTitle?: string,
    control: any,
    theme: string,
    error?: any,
}

// Была использована библиотека react-hook-mask
// для удобного создания маски
const maskGenerator = createDefaultMaskGenerator("+7 (999) 999-99-99")

export const ControllerPhoneInput = (props: ControllerPhoneInputProps) => {
    const { 
            name, placeholder, labelTitle, control, 
            id, theme, error
    } = props
    
    return (
        <Controller
            name={name}
            control={control}
            render={({field}: any) => (
                <div className={styles.inputContainer}>
                    { labelTitle && <label htmlFor={id} className={styles.label}>{labelTitle}</label> }
                    <MaskedInput
                        {...field}
                        maskGenerator={maskGenerator}
                        value={field.value}
                        error={error}
                        className={clsx(styles.input, styles[theme])}
                        placeholder={placeholder}
                        id={id}
                        aria-describedby={`phone-input-hint-${id}`}
                    />
                    {
                        error &&
                            <div className={styles.errorContainer}>
                                {error && <span id={`phone-input-hint-${id}`} className={styles.errorText}>{error}</span>}
                            </div>
                    }
                </div>
            )}
        />
    )
}