import { InferType } from "yup";
import { Steps } from "./enums";
import { formStepOneSchema, formStepThreeSchema, formStepTwoSchema, homeSchema } from "./shemas";

export type StepsType = Steps.One | Steps.Two | Steps.Three

export type HomeType = InferType<typeof homeSchema>
export type FormStepOneType = InferType<typeof formStepOneSchema>
export type FormStepTwoType = InferType<typeof formStepTwoSchema>
export type FormStepThreeType = InferType<typeof formStepThreeSchema>