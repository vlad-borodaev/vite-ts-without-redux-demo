import { FC, PropsWithChildren } from "react";
import styles from "./Container.module.css";
import clsx from "clsx";

export const Container: FC<PropsWithChildren> = (props) => {
    const { children } = props;

    return (
        <section className={clsx(
            styles.container,
            styles.gradientBackground
        )}>
            <div className={styles.contentWrapper}>
                {children}
            </div>
        </section>
    );
}