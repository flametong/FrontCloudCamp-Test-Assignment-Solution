import { checkboxes } from "../../../data/arrays"
import { ControllerCheckbox } from "../../ControllerItems/ControllerCheckbox"
import styles from "./CheckboxGroup.module.scss"

interface CheckboxGroupExcerptProps {
    id: string
    name: string
    label: string
    control: any
}

interface CheckboxGroupProps {
    control: any
}

const CheckboxGroupExcerpt = (props: CheckboxGroupExcerptProps) => {
    const {
        id, name, label, control
    } = props

    return (
        <ControllerCheckbox
            id={id}
            name={name}
            label={label}
            control={control}
        />
    )
}

export const CheckboxGroup = (props: CheckboxGroupProps) => {
    const {
        control
    } = props

    return (
        <div className={styles.checkboxGroup}>
                <p className={styles.title}>Checkbox group</p>
                {checkboxes.map((item) => (
                    <CheckboxGroupExcerpt
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        label={item.label}
                        control={control} 
                    />
                ))}
        </div>
    )
}