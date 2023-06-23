import styles from "./FormStepTwo.module.scss"

import { FormInputs, Steps } from "../../../data/enums"
import { 
    changeStep, 
    selectRadio,
    setAllCheckboxesFalse 
} from "../../../features/slices/formSlice"
import { useForm } from "react-hook-form"
import { CheckboxGroup } from "../../../ui/Groups/CheckboxGroup/CheckboxGroup"
import { RadioGroup } from "../../../ui/Groups/RadioGroup/RadioGroup"
import { ButtonContainer } from "../../../components/ButtonContainer/ButtonContainer"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { AdvantageItems } from "../../AdvantageItems/AdvantageItems"

export const FormStepTwo = () => {
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm <any>()

    const dispatch = useAppDispatch()
    const radio = useAppSelector(selectRadio)

    const onSubmit = () => {
        localStorage.setItem(FormInputs.RadioGroup, radio)
        dispatch(setAllCheckboxesFalse())
        dispatch(changeStep(Steps.Three))
    }

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
            <AdvantageItems />
            <CheckboxGroup control={control} />
            <RadioGroup control={control} />
            <ButtonContainer 
                id="2"
                buttonPrevTitle="Назад"
                buttonNextTitle="Далее"
            />
        </form>
    )
}