import { Controller } from "react-hook-form"
import { Radio } from "../Radio/Radio"

interface ControllerRadioProps {
    id: string
    name: string
    label: string
    value: string
    control: any
}

export const ControllerRadio = (props: ControllerRadioProps) => {
    const {
        id, name, label, control
    } = props
  
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, ...props } }) => (
                <Radio
                    id={id}
                    onChange={e => { onChange(e.target.value) }}
                    {...props}
                >
                    {label}
                </Radio>
            )}
        />
    )
}