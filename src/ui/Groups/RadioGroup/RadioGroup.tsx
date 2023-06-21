import { radioButtons } from "../../../data/arrays"
import { ControllerRadio } from "../../ControllerItems/ControllerRadio"
import styles from "./RadioGroup.module.scss"

interface RadioGroupExcerptProps {
    id: string
    name: string
    label: string
    value: string
    control: any
}

interface RadioGroupProps {
    control: any
}

const RadioGroupExcerpt = (props: RadioGroupExcerptProps) => {
    const {
        id, name, label, value, control
    } = props

    return (
        <ControllerRadio
            id={id}
            name={name}
            label={label}
            value={value}
            control={control}
        />
    )
}

export const RadioGroup = (props: RadioGroupProps) => {
    const { control } = props

    return (
        <div className={styles.radioGroup}>
            <p className={styles.title}>Radio group</p>
            {radioButtons.map((item) => (
                <RadioGroupExcerpt 
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    label={item.label}
                    value={item.value}
                    control={control}
                />
            ))}
        </div>
    )
}