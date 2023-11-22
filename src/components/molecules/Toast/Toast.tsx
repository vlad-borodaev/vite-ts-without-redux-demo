import { FC } from "react";
import styles from "./Toast.module.css";
import clsx from "clsx";

interface ToastProps {
    type: "success" | "failure" | "warning";
    message: string;
    onClose?: () => void;
}

export const Toast: FC<ToastProps> = (props) => {
    const {
        type = "error",
        message,
        onClose,
    } = props;

    return (
        <div className={clsx(styles.toast, styles[type])} role="alert">
            <div className={styles.toastMessage}>
                <p>{message}</p>
            </div>
            <button
                className={styles.toastCloseButton}
                onClick={onClose}
            >
                <span className={styles.closeIcon}>x</span>
            </button>
        </div>
    );
};
