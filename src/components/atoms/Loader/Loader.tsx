import type { FC } from "react";
import styles from "./Loader.module.css";

interface LoaderProps {}

export const Loader: FC<LoaderProps> = (props) => {
    return (
        <div className={styles.loaderDualRing}></div>
    );
};
