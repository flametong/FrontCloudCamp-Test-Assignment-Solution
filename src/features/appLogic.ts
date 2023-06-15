export function getArrayFromEnum<E>(e: any): E {
    const arr: any = [];
    (Object.values(e) as Array<keyof typeof e>)
        .map((value) => {arr.push(value)});
    return arr;
}

export const findById = (arr: any[], id: string) => {
    return arr.findIndex(item => item.id === id)
}

export const makePhoneNumber = (tenDigitNumber: string | null) => {
    return "+7" + tenDigitNumber
}