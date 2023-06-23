import styles from "./AdvantageItems.module.scss"
import { ReactComponent as BinIcon } from "../../images/bin.svg"

import { SyntheticEvent, useCallback } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { findById } from "../../features/appLogic"
import { Button } from "../../ui/Button/Button"
import { addAdvantage, removeAdvantage, selectAdvantages, updateAdvantageText } from "../../features/slices/formSlice"
import { Advantage } from "../../data/interfaces"
import { ButtonThemes } from "../../data/enums"
import clsx from "clsx"
import { v4 } from "uuid"

type AdvantageItemProps = {
    advantage: Advantage
}

const AdvantageItemExcerpt = ({advantage}: AdvantageItemProps) => {

    const dispatch = useAppDispatch()
    const advantages = useAppSelector(selectAdvantages)

    const index = findById(advantages, advantage.id)

    const updateAdvantageTextCallback = useCallback((e: SyntheticEvent) => {
        dispatch(updateAdvantageText({ 
                id: advantage.id,
                text: (e.target as HTMLInputElement).value 
            }))
    }, [dispatch, advantage.id])

    const removeAdvantageCallback = useCallback(() => {
        dispatch(removeAdvantage({ id: advantage.id }))
    }, [dispatch, advantage.id])

    return (
        <div className={styles.inputContainer}>
            <input 
                className={styles.input}
                placeholder="Введите преимущество..."
                value={advantages[index].text}
                onChange={updateAdvantageTextCallback}
            />
            <div className={styles.removeIconContainer}>
                <button 
                    className={styles.removeButton}
                    type="button"
                    onClick={removeAdvantageCallback}
                >
                    <BinIcon className={styles.icon} />
                </button>
            </div>
        </div>
    )
}

export const AdvantageItems = () => {

    const dispatch = useAppDispatch()
    const advantages = useAppSelector(selectAdvantages)

    return (
        <div className={styles.advantages}>
            <label className={styles.advantagesTitle}>Преимущества</label>
                { advantages && advantages.map((item: Advantage) => (
                    <AdvantageItemExcerpt key={item.id} advantage={item} />
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
    )
}