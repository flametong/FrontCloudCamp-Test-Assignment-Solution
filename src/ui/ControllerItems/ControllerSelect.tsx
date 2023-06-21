import { Controller } from "react-hook-form"
import { Select } from "../Select/Select"

interface ControllerSelectProps {
    id?: string,
    name: string,
    options: any[],
    optionPlaceholder?: string,
    error?: any
    labelTitle?: string,
    control: any,
}

export const ControllerSelect = (props: ControllerSelectProps) => {
    const { id, name, options, labelTitle, optionPlaceholder, control, error } = props
    
    return (
        <Controller
            name={name}
            control={control}
            render={({field}: any) => (
                <Select
                    {...field}
                    id={id}
                    name={name}
                    labelTitle={labelTitle}
                    options={options}
                    optionPlaceholder={optionPlaceholder}
                    value={field.value}
                    onChange={(value) => {
                        field.onChange(value)
                    }}
                    error={error}
                />
            )}
        />
    )
}