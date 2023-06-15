import { Controller } from "react-hook-form"
import { Checkbox } from "../Checkbox/Checkbox"

interface ControllerCheckboxProps {
    id?: string
    name: string
    label: string
    control: any
}

export const ControllerCheckbox = (props: ControllerCheckboxProps) => {
    const {
        id, name, label, control
    } = props
    
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <Checkbox
                    id={id}
                    checked={field.value}
                    onChangeChecked={(value: boolean) => {
                        field.onChange(value)
                    }}
                >
                    { label }
                </Checkbox>
            )}
        />
    )
}