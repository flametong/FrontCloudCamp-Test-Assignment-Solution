import styles from "./Home.module.scss"
import UserAvatar from "../../images/avatar.jpg"

import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { contacts } from "../../data/arrays"
import { ContactItem } from "../../components/ContactItem/ContactItem"
import { 
    ButtonThemes, 
    FormInputs, 
    InputThemes, 
    RouteEndpoints, 
    Steps 
} from "../../data/enums"
import { useEffect } from "react"
import { Button } from "../../components/Button/Button"
import { ControllerInput } from "../../components/ControllerItems/ControllerInput"
import { useDispatch } from "react-redux"
import { changeStep } from "../../features/slices/formSlice"
import { homeSchema } from "../../data/shemas"
import { HomeType } from "../../data/types"
import { ControllerPhoneInput } from "../../components/ControllerItems/ControllerPhoneInput"

export const Home = () => {
    const {
        control,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm<HomeType>({
        defaultValues: {
            phone: "",
            email: ""
        },
        resolver: yupResolver(homeSchema) 
    })
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const onSubmit = () => {
        localStorage.setItem('phone', control._getWatch('phone'))
        localStorage.setItem('email', control._getWatch('email'))
        navigate(RouteEndpoints.Form)
    }

    useEffect(() => {
        const phone = localStorage.getItem(FormInputs.Phone)
        if (phone) setValue(FormInputs.Phone, phone)

        const email = localStorage.getItem(FormInputs.Email)
        if (email) setValue(FormInputs.Email, email)

        dispatch(changeStep(Steps.One))
    }, [])

    return (
        <div className={styles.home}>
            <div className={styles.profile}>
                <img 
                    src={UserAvatar}
                    alt="user profile picture" 
                    className={styles.picture}
                />
                <div>
                    <p className={styles.name}>Никита Пуляевский</p>
                    <ul className={styles.links}>
                        {contacts.map((item) => (
                            <ContactItem key={item.id} contact={item} />
                        ))}
                    </ul>
                </div>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <ControllerPhoneInput
                     id="phone"
                     name="phone"
                     labelTitle="Номер телефона"
                     placeholder="+7 (999) 999-99-99"
                     theme={InputThemes.BackgroundGray}
                     control={control}
                     error={errors.phone?.message}
                />

                <ControllerInput
                     id="email"
                     name="email"
                     labelTitle="Электронная почта"
                     placeholder="tim.jennings@example.com"
                     theme={InputThemes.BackgroundGray}
                     control={control}
                     error={errors.email?.message}
                />

                <Button
                    id="button-start"
                    className={styles.buttonStart}
                    type="submit"
                    theme={ButtonThemes.Primary}
                >
                    Начать
                </Button>
            </form>
        </div>
    )
}