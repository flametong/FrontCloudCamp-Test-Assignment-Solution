import styles from "./FormStepTwo.module.scss"

import { Button } from "../../Button/Button"
import { ButtonThemes, FormInputs, Steps } from "../../../data/enums"
import { useDispatch, useSelector } from "react-redux"
import { 
    addAdvantage, 
    changeStep, 
    selectAdvantages, 
    selectRadio,
    setAllCheckboxesFalse 
} from "../../../features/slices/formSlice"
import { useForm } from "react-hook-form"
import { AdvantageItem } from "../../AdvantageItem/AdvantageItem"
import clsx from "clsx"
import { v4 } from "uuid"
import { Advantage } from "../../../data/interfaces"
import { CheckboxGroup } from "../../Groups/CheckboxGroup/CheckboxGroup"
import { RadioGroup } from "../../Groups/RadioGroup/RadioGroup"
import { ButtonContainer } from "../../ButtonContainer/ButtonContainer"

export const FormStepTwo = () => {
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm <any>()

    const dispatch = useDispatch()
    const advantages = useSelector(selectAdvantages)
    const radio = useSelector(selectRadio)

    const onSubmit = () => {
        localStorage.setItem(FormInputs.RadioGroup, radio)
        dispatch(setAllCheckboxesFalse())
        dispatch(changeStep(Steps.Three))
    }

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.advantages}>
                <label className={styles.advantagesTitle}>Преимущества</label>
                { advantages && advantages.map((item: Advantage) => (
                    <AdvantageItem key={item.id} advantage={item} />
                )) }
                <Button
                    id="button-add"
                    // Библиотека clsx была использована
                    // для написания последовательности className'ов
                    className={clsx(styles.button, styles.buttonAdding)}
                    type="button"
                    theme={ButtonThemes.Adding}
                    // Библиотека uuid была использована
                    // для простой генерации id
                    onClick={() => dispatch(addAdvantage({ id: v4(), text: "" }))}
                >
                    +
                </Button>
            </div>
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