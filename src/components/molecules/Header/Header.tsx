import { FC } from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
    showNavigationBack?: boolean;
}

export const Header: FC<HeaderProps> = (props) => {
    const { showNavigationBack } = props;

    const navigate = useNavigate();

    const goBack = () => {
        navigate("/");
    };

    return (
        <section className={styles.headerContainer}>
            <h2 className={styles.appTitle}>HTTP Cats</h2>
            { showNavigationBack && (
                <div
                    className={styles.goBack}
                    onClick={goBack}
                >
                    &#8592; Go back
                </div>
            ) }
        </section>
    );
};
