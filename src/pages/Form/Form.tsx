import styles from "./Form.module.scss"

import { useSelector } from "react-redux"
import { selectStep } from "../../features/slices/formSlice"
import { Steps } from "../../data/enums"
import { FormStepOne } from "../../components/FormSteps/FormStepOne/FormStepOne"
import { FormStepTwo } from "../../components/FormSteps/FormStepTwo/FormStepTwo"
import { FormStepThree } from "../../components/FormSteps/FormStepThree/FormStepThree"
import { StepProgressBar } from "../../components/StepProgressbar/StepProgressbar"

export const Form = () => {

    const step = useSelector(selectStep)

    return (
        <div className={styles.formPageContainer}>
            <StepProgressBar />
            { step === Steps.One && <FormStepOne /> }
            { step === Steps.Two && <FormStepTwo /> }
            { step === Steps.Three && <FormStepThree /> }
        </div>
    )
}