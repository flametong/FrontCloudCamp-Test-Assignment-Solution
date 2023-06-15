import styles from "./FormStepOne.module.scss"

import { useNavigate } from "react-router-dom"
import { ButtonThemes, FormInputs, RouteEndpoints, Sex, Steps } from "../../../data/enums"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { ControllerInput } from "../../ControllerItems/ControllerInput"
import { ControllerSelect } from "../../ControllerItems/ControllerSelect"
import { getArrayFromEnum } from "../../../features/appLogic"
import { Button } from "../../Button/Button"
import { useDispatch } from "react-redux"
import { changeStep } from "../../../features/slices/formSlice"
import { useEffect } from "react"
import { FormStepOneType } from "../../../data/types"
import { formStepOneSchema } from "../../../data/shemas"

export const FormStepOne = () => {
    const {
        control,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm<FormStepOneType>({
        defaultValues: {
            nickname: "",
            name: "",
            sername: ""
        },
        resolver: yupResolver(formStepOneSchema) 
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onSubmit = () => {
        localStorage.setItem(FormInputs.Nickname, control._getWatch(FormInputs.Nickname))
        localStorage.setItem(FormInputs.Name, control._getWatch(FormInputs.Name))
        localStorage.setItem(FormInputs.Sername, control._getWatch(FormInputs.Sername))
        localStorage.setItem(FormInputs.Sex, control._getWatch(FormInputs.Sex))
        dispatch(changeStep(Steps.Two))
    }

    useEffect(() => {
        const nickname = localStorage.getItem(FormInputs.Nickname)
        if (nickname) setValue(FormInputs.Nickname, nickname)

        const name = localStorage.getItem(FormInputs.Name)
        if (name) setValue(FormInputs.Name, name)

        const sername = localStorage.getItem(FormInputs.Sername)
        if (sername) setValue(FormInputs.Sername, sername)

        const sex = localStorage.getItem(FormInputs.Sex)
        if (sex) setValue(FormInputs.Sex, sex === Sex.Man ? Sex.Man : Sex.Woman)
    }, [])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ControllerInput
                id="field-nickname"
                name={FormInputs.Nickname}
                labelTitle="Никнейм"
                placeholder="Введите никнейм..."
                control={control}
                error={errors.nickname?.message}
            />
            <ControllerInput
                id="field-name"
                name={FormInputs.Name}
                labelTitle="Имя"
                placeholder="Введите имя..."
                control={control}
                error={errors.name?.message}
            />
            <ControllerInput
                id="field-sername"
                name={FormInputs.Sername}
                labelTitle="Фамилия"
                placeholder="Введите фамилию..."
                control={control}
                error={errors.sername?.message}
            />
            <ControllerSelect 
                id="field-sex"
                name="sex"
                labelTitle="Пол"
                optionPlaceholder="Не выбрано"
                options={getArrayFromEnum(Sex)}
                control={control}
                error={errors.sex?.message}
            />
            <div className={styles.buttonContainer}>
                <Button
                    id="button-back-1"
                    className={styles.button}
                    type="button"
                    theme={ButtonThemes.Outline}
                    onClick={() => navigate(RouteEndpoints.Home)}
                >
                    Назад
                </Button>
                <Button
                    id="button-next-1"
                    className={styles.button}
                    type="submit"
                    theme={ButtonThemes.Primary}
                >
                    Далее
                </Button>
            </div>
        </form>
    )
}