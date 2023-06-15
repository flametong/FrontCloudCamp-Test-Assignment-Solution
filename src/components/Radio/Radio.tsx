import { useDispatch } from "react-redux"
import styles from "./Radio.module.scss"

import { 
    ChangeEvent, 
    DetailedHTMLProps, 
    InputHTMLAttributes,
    Ref,
    forwardRef
} from "react"
import { changeRadio } from "../../features/slices/formSlice"

type DefaultInputPropsType = 
        DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type RadioPropsType = DefaultInputPropsType & {
    id?: string
    onChangeOption?: (option: any) => void
}

export const Radio = forwardRef((props: RadioPropsType, ref: Ref<HTMLInputElement>) => {
    const { 
        id, name, value, onChange, onChangeOption, children, ...restProps 
    } = props

    const dispatch = useDispatch()

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(value)
        dispatch(changeRadio(`${children}`))
    }

    return (
        <div className={styles.container}>
            <input
                id={id}
                name={name}
                type="radio"
                onChange={onChangeCallback}
                className={styles.checkbox}
                {...restProps}
            />
            <label htmlFor={id} className={styles.label}>
                {children}
            </label>
        </div>
    )
})