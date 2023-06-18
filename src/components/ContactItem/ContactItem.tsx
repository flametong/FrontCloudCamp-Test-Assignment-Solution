import { ReactComponent as FolderIcon } from "../../images/folder.svg"
import { Contact } from "../../data/interfaces"
import styles from "./ContactItem.module.scss"

type ContactItemProps = {
    contact: Contact
}

export const ContactItem = ({ contact }: ContactItemProps) => {
    return (
        <li className={styles.contact}>
            <FolderIcon className={styles.folderIcon} />
            <a className={styles.link} href={contact.link}>{contact.title}</a>
        </li>
    )
}