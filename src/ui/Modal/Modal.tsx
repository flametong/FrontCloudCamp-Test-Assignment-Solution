import styles from "./Modal.module.scss"

import { ReactPortal } from "../ReactPortal/ReactPortal"
import {
    HTMLAttributes,
    type ReactNode
} from 'react'
import clsx from "clsx"

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode
    show: boolean
    onClose?: () => void
}

export const Modal = (props: ModalProps) => {
    const {
        children,
        show,
        onClose,
        ...restProps
    } = props

    if (!show) return null

    return (
        <ReactPortal>
            <div className={clsx(styles.modal, styles.opened)} {...restProps}>
                <div className={styles.pageWindow} onClick={onClose}>
                    <div className={styles.content}>
                        {children}
                    </div>
                </div>
            </div>
        </ReactPortal>
    )
}