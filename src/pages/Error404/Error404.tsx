import { Link } from "react-router-dom"
import { RouteEndpoints } from "../../data/enums"
import styles from "./Error404.module.scss"

export const Error404 = () => {
    return (
        <div className={styles.error404}>
            <h1 className={styles.title}>Страница не найдена</h1>
            <Link to={RouteEndpoints.Home} className={styles.link}>Вернуться на главную</Link>
        </div>
    )
}