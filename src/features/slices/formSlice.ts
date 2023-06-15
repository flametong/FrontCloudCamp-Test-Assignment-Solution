import {
    PayloadAction,
    createSlice
} from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Steps } from "../../data/enums";
import { checkboxes } from "../../data/arrays";
import { Advantage, FormState } from "../../data/interfaces";
import { findById } from "../appLogic";

const initialState: FormState = {
    step: Steps.One,
    advantages: [],
    checkbox: {
        checkboxItems: [...checkboxes],
        checkboxNumbers: []
    },
    radio: ""
}

export const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        changeStep: (state, action: PayloadAction<string>) => {
            state.step = action.payload
        },
        addAdvantage: (state, action: PayloadAction<Advantage>) => {
            state.advantages.push(action.payload)
        },
        updateAdvantageText(state, action: PayloadAction<Advantage>) {
            const index = findById(state.advantages, action.payload.id)
            state.advantages[index].text = action.payload.text
        },
        removeAdvantage: (state, action: PayloadAction<{id: string}>) => {
            const index = state.advantages.findIndex(item => item.id === action.payload.id)
            if (index !== -1) state.advantages.splice(index, 1)
        },
        changeCheckbox: (state, action: PayloadAction<{id: string}>) => {
            const index = findById(state.checkbox.checkboxItems, action.payload.id)
            state.checkbox.checkboxItems[index].checked = !state.checkbox.checkboxItems[index].checked
        },
        setAllCheckboxesFalse: (state) => {
            // Перед тем, как очистить чекбоксы,
            // заполняется массив чисел
            state.checkbox.checkboxNumbers = []
            
            for (let item of state.checkbox.checkboxItems)
                state.checkbox.checkboxNumbers.push(Number(item.checked))
            
            for (let item of state.checkbox.checkboxItems) 
                item.checked = false
        },
        changeRadio: (state, action: PayloadAction<string>) => {
            state.radio = action.payload
        }
    }
})

export const {
    changeStep,
    addAdvantage,
    removeAdvantage,
    updateAdvantageText,
    changeCheckbox,
    setAllCheckboxesFalse,
    changeRadio
} = formSlice.actions

export default formSlice.reducer

export const selectStep = (state: RootState) => state.form.step

export const selectAdvantages = (state: RootState) => state.form.advantages
export const selectAdvantagesTexts = (state: RootState) => state.form.advantages
                                                                .reduce((acc, item: Advantage) => [
                                                                    ...acc,
                                                                    item.text
                                                                ], [] as string[])

export const selectCheckboxes = (state: RootState) => state.form.checkbox.checkboxItems
export const selectCheckboxNumbers = (state: RootState) => state.form.checkbox.checkboxNumbers

export const selectRadio = (state: RootState) => state.form.radio