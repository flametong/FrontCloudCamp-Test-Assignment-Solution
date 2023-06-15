import { object, string, ObjectSchema } from 'yup'
import { FormStepOneInputs, FormStepThreeInputs, FormStepTwoInputs, HomePageInputs } from './interfaces'
import { Sex, Validations } from './enums'
import { nameRegEx, nicknameRegEx } from './regExTemplates'

export const homeSchema: ObjectSchema<HomePageInputs> = object({
    phone: string()
            .required(Validations.required)
            .min(10, Validations.phoneMin),
    email: string()
            .required(Validations.required)
            .email(Validations.email)
})

export const formStepOneSchema: ObjectSchema<FormStepOneInputs> = object({
    nickname: string()
                .required(Validations.required)
                .max(30, Validations.nicknameMax)
                .matches(nicknameRegEx, Validations.notSpecialSymbols),
    name: string()
                .required(Validations.required)
                .max(50, Validations.nameMax)
                .matches(nameRegEx, Validations.onlyAlpabetic),
    sername: string()
                .required(Validations.required)
                .max(50, Validations.nameMax)
                .matches(nameRegEx, Validations.onlyAlpabetic),
    sex: string<Sex.Man | Sex.Woman>()
                .required(Validations.required)
})

export const formStepTwoSchema: ObjectSchema<FormStepTwoInputs> = object({
        advantage: string()
                        .required(Validations.required)
})

export const formStepThreeSchema: ObjectSchema<FormStepThreeInputs> = object({
    about: string()
            .required(Validations.required)
            .max(200, Validations.aboutMax)
})