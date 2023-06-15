import styles from "./AdvantageItem.module.scss"
import BinIcon from "../../images/bin.svg"

import { useDispatch, useSelector } from "react-redux"
import { removeAdvantage, selectAdvantages, updateAdvantageText } from "../../features/slices/formSlice"
import { findById } from "../../features/appLogic"
import { Advantage } from "../../data/interfaces"
import { SyntheticEvent, useCallback } from "react"

type AdvantageItemProps = {
    advantage: Advantage
}

export const AdvantageItem = ({advantage}: AdvantageItemProps) => {

    const dispatch = useDispatch()
    const advantages = useSelector(selectAdvantages)

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
                    <img 
                        src={BinIcon} 
                        alt="bin icon"
                        className={styles.icon}
                    />
                </button>
            </div>
        </div>
    )
}