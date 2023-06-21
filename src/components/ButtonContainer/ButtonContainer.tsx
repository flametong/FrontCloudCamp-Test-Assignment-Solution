import styles from "./ButtonContainer.module.scss"

import { Button } from "../../ui/Button/Button"
import { ButtonThemes, RouteEndpoints, Steps } from "../../data/enums"
import { useNavigate } from "react-router-dom"
import { changeStep, selectStep } from "../../features/slices/formSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"

interface ButtonContainerProps {
    id: string
    buttonPrevTitle: string
    buttonNextTitle: string
}

export const ButtonContainer = (props: ButtonContainerProps) => {
    const {
        buttonPrevTitle, buttonNextTitle, id
    } = props

    const dispatch = useAppDispatch()
    const step = useAppSelector(selectStep)
    const navigate = useNavigate()

    const callback = (step === Steps.One) 
                        ? () => navigate(RouteEndpoints.Home)
                        : (step === Steps.Two)
                            ? () => dispatch(changeStep(Steps.One))
                            : () => dispatch(changeStep(Steps.Two))
    
    const btnNextId = (step === Steps.Three)
                        ? "button-send"
                        : `button-next-${id}`
    
    return (
        <div className={styles.buttonContainer}>
            <Button
                id={`button-back-${id}`}
                className={styles.button}
                type="button"
                theme={ButtonThemes.Outline}
                onClick={callback}
            >
                { buttonPrevTitle }
            </Button>
            <Button
                id={btnNextId}
                className={styles.button}
                type="submit"
                theme={ButtonThemes.Primary}
            >
                { buttonNextTitle }
            </Button>
        </div>
    )
}