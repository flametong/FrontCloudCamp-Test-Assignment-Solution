import { FC } from 'react'
import { createPortal } from "react-dom"

interface ReactPortalProps {
    children: any
    element?: HTMLElement
}

export const ReactPortal: FC<ReactPortalProps> = ({children, element = document.body}) => {
    return createPortal(children, element)
}