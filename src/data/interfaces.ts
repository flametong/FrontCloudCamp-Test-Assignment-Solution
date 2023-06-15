import { Sex } from "./enums";

export interface HomePageInputs {
    phone: string,
    email: string
}

export interface FormStepOneInputs {
    nickname: string,
    name: string,
    sername: string,
    sex: Sex
}

export interface FormStepTwoInputs {
    advantage: string
}

export interface FormStepThreeInputs {
    about: string
}

export interface Contact {
    id: number | string,
    title: string,
    link: string
}

export interface Advantage {
    id: string,
    text: string
}

export interface Checkbox {
    id: string,
    name: string,
    label: string,
    checked?: boolean
}

export interface Radio {
    id: string,
    name: string,
    label: string,
    value: string
}

export interface FormRequestPayload {
    phone: string | null,
    email: string | null,
    nickname: string | null,
    name: string | null,
    sername: string | null,
    sex: string | null,
    advantages: string[],
    checkboxGroup: number[],
    radioGroup: string | null,
    about: string | null
}

export interface FormState {
    step: string,
    advantages: Advantage[],
    checkbox: any
    radio: string
}

export interface Response {
    status: string,
    message: string
}