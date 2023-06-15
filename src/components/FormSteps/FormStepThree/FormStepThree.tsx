import styles from "./FormStepThree.module.scss"

import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { FormStepThreeInputs } from "../../../data/interfaces"
import { Button } from "../../Button/Button"
import { ButtonThemes, FormInputs, Steps } from "../../../data/enums"
import { useDispatch, useSelector } from "react-redux"
import { changeStep, selectAdvantagesTexts, selectCheckboxNumbers } from "../../../features/slices/formSlice"
import { ControllerTextarea } from "../../ControllerItems/ControllerTextarea"
import { useEffect, useState } from "react"
import { formStepThreeSchema } from "../../../data/shemas"
import { FormStepThreeType } from "../../../data/types"
import { usePostFormDataMutation } from "../../../features/api/formApi"
import { ModalNotification } from "../../ModalNotification/ModalNotification"
import { makePhoneNumber } from "../../../features/appLogic"

export const FormStepThree = () => {
    const [
        postFormData,
        { data, isError, isSuccess }
    ] = usePostFormDataMutation()

    const {
        control,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm<FormStepThreeType>({
        defaultValues: {
            about: ""
        },
        resolver: yupResolver(formStepThreeSchema) 
    })

    const dispatch = useDispatch()
    const advantagesTexts = useSelector(selectAdvantagesTexts)
    const checkboxNumbers = useSelector(selectCheckboxNumbers)
    
    const [showNotificationModal, setShowNotificationModal] = useState(false)

    const onSubmit: SubmitHandler<FormStepThreeInputs> = async () => {
        localStorage.setItem(FormInputs.About, control._getWatch(FormInputs.About))
        
        try {
            await postFormData({
                phone: makePhoneNumber(localStorage.getItem(FormInputs.Phone)),
                email: localStorage.getItem(FormInputs.Email),
                nickname: localStorage.getItem(FormInputs.Nickname),
                name: localStorage.getItem(FormInputs.Name),
                sername: localStorage.getItem(FormInputs.Sername),
                sex: localStorage.getItem(FormInputs.Sex),
                advantages: advantagesTexts,
                checkboxGroup: checkboxNumbers,
                radioGroup: localStorage.getItem(FormInputs.RadioGroup),
                about: localStorage.getItem(FormInputs.About)
            })
        } catch (e) {
            if (typeof e === "string") {
                console.log(e)
            } else if (e instanceof Error) {
                console.log(e.message)
            }
        }

        setShowNotificationModal(true)
    }

    useEffect(() => {
        const about = localStorage.getItem(FormInputs.About)
        if (about) setValue(FormInputs.About, about)
    }, [])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ControllerTextarea
                id="field-about"
                name="about"
                placeholder="Введите информацию о себе..."
                labelTitle="О себе"
                control={control}
                error={errors.about?.message}
                textMaxLength="200"
            />
            <div className={styles.buttonContainer}>
                <Button
                    id="button-back-1"
                    className={styles.button}
                    type="button"
                    theme={ButtonThemes.Outline}
                    onClick={() => dispatch(changeStep(Steps.Two))}
                >
                    Назад
                </Button>
                <Button
                    id="button-next-1"
                    className={styles.button}
                    type="submit"
                    theme={ButtonThemes.Primary}
                >
                    Отправить
                </Button>
            </div>
            <ModalNotification 
                show={showNotificationModal}  
                setShow={setShowNotificationModal}
                response={data}         
                isSuccess={isSuccess}
                isError={isError}
            />
        </form>
    )
}