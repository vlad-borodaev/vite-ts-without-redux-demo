import { FC, PropsWithChildren } from "react";
import styles from "./Container.module.css";
import clsx from "clsx";
import { Header } from "../../molecules";

interface ContainerProps extends PropsWithChildren {
    showNavigationBack?: boolean;
}

export const Container: FC<ContainerProps> = (props) => {
    const { children, showNavigationBack } = props;

    return (
        <section className={clsx(
            styles.container,
            styles.gradientBackground
        )}>
            <div className={styles.contentWrapper}>
                <Header showNavigationBack={showNavigationBack} />
                {children}
            </div>
        </section>
    );
}