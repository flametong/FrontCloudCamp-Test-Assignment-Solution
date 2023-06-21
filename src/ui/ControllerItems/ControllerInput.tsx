import { Controller } from "react-hook-form"
import { Input } from "../Input/Input"

interface ControllerInputProps {
    id?: string,
    name: string,
    placeholder?: string,
    labelTitle?: string,
    control: any,
    type?: string,
    theme?: string,
    error?: any,
    advantage?: boolean
}

export const ControllerInput = (props: ControllerInputProps) => {
    const { 
            name, placeholder, labelTitle, control, 
            id, type, theme, error, advantage
    } = props
    
    return (
        <Controller
            name={name}
            control={control}
            render={({field}: any) => (
                <Input
                    {...field}
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    labelTitle={labelTitle}
                    theme={theme}
                    value={field.value}
                    onChange={(value) => {
                        field.onChange(value)
                    }}
                    error={error}
                    advantage={advantage}
                />
            )}
        />
    )
}