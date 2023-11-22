import { FC } from "react";
import styles from "./HttpCodeCardSection.module.css";
import { HttpCodeListItem } from "../../../services/declarations";
import { HttpCodeCard } from "../HttpCodeCard";
import { Link } from "react-router-dom";

interface HttpCodeCardSectionProps {
    codeType: string;
    list: Array<HttpCodeListItem>;
}

export const HttpCodeCardSection: FC<HttpCodeCardSectionProps> = (props) => {
    const { codeType, list } = props;

    return (
        <section className={styles.cardsContainer}>
            <h3 className={styles.codeType}>{ codeType }</h3>
            <div className={styles.codeList}>
                { list.map((item) => (
                    <Link key={item.code} to={`/${item.code}`}>
                        <HttpCodeCard {...item} />
                    </Link>
                )) }
            </div>
        </section>
    );
}