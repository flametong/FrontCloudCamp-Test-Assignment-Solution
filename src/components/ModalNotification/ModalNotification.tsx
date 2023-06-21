import styles from './ModalNotification.module.scss'

import { useNavigate } from 'react-router-dom'
import { ReactComponent as SuccessIcon } from "../../images/success.svg"
import { ReactComponent as ErrorIcon } from "../../images/error.svg"
import { ReactComponent as CancelIcon } from "../../images/cancel.svg"
import { RouteEndpoints } from '../../data/enums'
import { Modal } from '../../ui/Modal/Modal'
import { Button } from '../../ui/Button/Button'
import { Response } from '../../data/interfaces'
import clsx from 'clsx'

interface ModalNotificationProps {
    show: boolean
    setShow: (value: boolean) => void
    response?: Response
    isSuccess?: boolean
    isError?: boolean
}

export const ModalNotification = (props: ModalNotificationProps) => {
    const {
        show, setShow, isSuccess, isError, response
    } = props

    const navigate = useNavigate()

    return (
        <Modal
            show={show}
            onClose={() => { isSuccess && setShow(false) }}
        >
            <div className={styles.notificationModalContainer}>
                {
                    isSuccess &&
                        <div className={styles.success}>
                            <p className={styles.successHeader}>
                                { response?.message }
                            </p>
                            <div className={clsx(styles.notificationModalImage, styles.successImage)}>
                                <SuccessIcon className={styles.icon} />
                            </div>
                            <Button
                                id="button-to-main"
                                onClick={() => { navigate(RouteEndpoints.Home) }}
                            >
                                На главную
                            </Button>
                        </div>
                }

                {
                    isError &&
                        <div className={styles.error}>
                            <div className={styles.errorHeader}>
                                <p className={styles.errorTitle}>Ошибка</p>
                                <div className={styles.headerCancel} onClick={() => {setShow(false)}}>
                                    <CancelIcon className={styles.icon} />
                                </div>
                            </div>
                            <div className={clsx(styles.notificationModalImage, styles.errorImage)}>
                                <ErrorIcon className={styles.icon} />
                            </div>
                            <div className={styles.errorFooter}>
                                <Button
                                    id="button-close"
                                    onClick={() => { setShow(false) }}
                                >
                                    Закрыть
                                </Button>
                            </div>
                        </div>
                }
            </div>
        </Modal>
    )
}