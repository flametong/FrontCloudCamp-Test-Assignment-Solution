import { Checkbox, Contact, Radio } from "./interfaces";

export const contacts: Contact[] = [
    {
        id: 1,
        title: "Telegram",
        link: "https://t.me/flametong"
    },
    {
        id: 2,
        title: "GitHub",
        link: "https://github.com/flametong"
    },
    {
        id: 3,
        title: "Резюме",
        link: ""
    }
]

export const checkboxes: Checkbox[] = [
    {
        id: "field-checkbox-group-option-1",
        name: "checkbox1",
        label: "1",
        checked: false
    },
    {
        id: "field-checkbox-group-option-2",
        name: "checkbox2",
        label: "2",
        checked: false
    },
    {
        id: "field-checkbox-group-option-3",
        name: "checkbox3",
        label: "3",
        checked: false
    }
]

export const radioButtons: Radio[] = [
    {
        id: "field-radio-group-option-1",
        name: "radio-group",
        label: "1",
        value: "1",
    },
    {
        id: "field-radio-group-option-2",
        name: "radio-group",
        label: "2",
        value: "2",
    },
    {
        id: "field-radio-group-option-3",
        name: "radio-group",
        label: "3",
        value: "3",
    }
]