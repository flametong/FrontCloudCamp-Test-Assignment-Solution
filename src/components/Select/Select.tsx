import styles from "./Select.module.scss"

import { 
    ChangeEvent,
    DetailedHTMLProps, 
    Ref, 
    SelectHTMLAttributes, 
    forwardRef
} from "react"

type DefaultSelectPropsType = 
        DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SelectPropsType = DefaultSelectPropsType & {
    id?: string
    name?: string
    options?: any[]
    optionPlaceholder: string
    error?: any
    labelTitle?: string
    onChangeOption?: (option: any) => void
}

export const Select = forwardRef((props: SelectPropsType, ref: Ref<HTMLSelectElement>) => {
    const { onChange, onChangeOption, id, name, options, optionPlaceholder, error, labelTitle, ...restProps } = props
    
    const mappedOptions = options 
            && options.map((item, i) => (
                <option key={i} className={styles.option}>{item}</option>
            ))

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }
    
    return (
        <div className={styles.selectContainer}>
            { labelTitle && <label htmlFor={id} className={styles.label}>{labelTitle}</label> }
            <select name={name} id={id} className={styles.select} onChange={onChangeCallback} {...restProps}>
                <option className={styles.option} hidden>{optionPlaceholder}</option>
                {mappedOptions}
            </select>
            { error &&
                <div className={styles.errorContainer}>
                    {error && <span className={styles.errorText}>{error}</span>}
                </div>
            }
        </div>
    )
})