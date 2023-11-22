import { FC } from "react";
import styles from "./HttpCodeCard.module.css";
import { HttpCodeListItem } from "../../../services/declarations";

interface HttpCodeCardProps extends HttpCodeListItem {}

export const HttpCodeCard: FC<HttpCodeCardProps> = (props) => {
    const { code, type, meaning } = props;

    return (
        <div className={styles.cardWrapper}>
            <div className={styles.cardCode}>
                {code}
            </div>
            <div className={styles.cardType}>
                Type: {type}
            </div>
            <div className={styles.cardType}>
                Meaning: {meaning}
            </div>
        </div>
    )
}