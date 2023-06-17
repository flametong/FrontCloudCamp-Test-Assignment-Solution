import styles from "./Checkbox.module.scss"

import { 
    ChangeEvent, 
    DetailedHTMLProps, 
    InputHTMLAttributes, 
    Ref,
    forwardRef
} from "react"
import { changeCheckbox } from "../../features/slices/formSlice"
import { useAppDispatch } from "../../app/hooks"

type DefaultInputPropsType = 
        DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type CheckboxPropsType = DefaultInputPropsType & {
    id?: string
    onChangeChecked?: (checked: boolean) => void
}

export const Checkbox = forwardRef((props: CheckboxPropsType, ref: Ref<HTMLInputElement>) => {
    const { 
        id, onChange, onChangeChecked, children, ...restProps 
    } = props

    const dispatch = useAppDispatch()

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        dispatch(changeCheckbox({ id: `${id}` }))
    }

    return (
        <div className={styles.container}>
            <input
                id={id}
                type="checkbox"
                onChange={onChangeCallback}
                className={styles.checkbox}
                {...restProps}
            />
            <label htmlFor={id} className={styles.label}>{ children && children }</label>
        </div>
    )
})