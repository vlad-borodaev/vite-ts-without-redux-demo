import { FC } from "react";
import styles from "./HttpCodeImage.module.css";

interface HttpCodeImageProps {
    src: string;
}

export const HttpCodeImage: FC<HttpCodeImageProps> = (props) => {
    const { src } = props;

    return (
        <img className={styles.httpCodeImage} src={src} />
    );
};
