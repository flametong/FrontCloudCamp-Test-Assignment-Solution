import { Controller } from "react-hook-form"
import { Textarea } from "../Textarea/Textarea"
import { FormInputs } from "../../data/enums"

interface ControllerTextareaProps {
    id?: string,
    name: string,
    placeholder?: string,
    labelTitle?: string,
    textLength?: any,
    textMaxLength?: any,
    control: any,
    error?: any,
}

export const ControllerTextarea = (props: ControllerTextareaProps) => {
    const { 
        name, placeholder, labelTitle, control, id, error,
        textLength, textMaxLength
    } = props
    
    return (
        <Controller
            name={name}
            control={control}
            render={({field}: any) => (
                <Textarea
                    {...field}
                    id={id}
                    placeholder={placeholder}
                    labelTitle={labelTitle}
                    textLength={control._getWatch(FormInputs.About).length}
                    textMaxLength={textMaxLength}
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