import { FC, useEffect, useRef, useState } from "react";
import styles from "./ToastList.module.css";
import { Toast } from "../../molecules";

interface ToastData {
    id: number;
    type: "success" | "failure" | "warning";
    message: string;
}

interface ToastListProps { }

export const ToastList: FC<ToastListProps> = (props) => {
    const listRef = useRef<any>(null);

    const [toasts, setToasts] = useState<Array<ToastData>>([]);

    const handleScrolling = (el: HTMLElement) => {
        el?.scrollTo(0, 0);
    };

    useEffect(() => {
        handleScrolling(listRef.current);
    }, []);

    const removeToast = (toastId: number) => {
        setToasts((prevToasts) => {
            return prevToasts.filter((toast) => toast.id !== toastId);
        });
    };

    const showToast = (message: string, type: ToastData["type"]) => {
        const toast = {
            id: Date.now(),
            message,
            type,
        };

        setToasts((prevToasts) => [...prevToasts, toast]);

        setTimeout(() => {
            removeToast(toast.id);
        }, 3000);
    };

    return (
        <section>
            <div className={styles.toastButtons}>
                <button onClick={() => showToast("A success message", "success")}>
                    Show Success Toast
                </button>
                <button onClick={() => showToast("A failure message", "failure")}>
                    Show Error Toast
                </button>
                <button onClick={() => showToast("A warning message", "warning")}>
                    Show Warning Toast
                </button>
            </div>

            <div
                className={styles.toastList}
                aria-live="assertive"
                ref={listRef}
            >
                {toasts.map(toast => (
                    <Toast
                        key={toast.id}
                        message={toast.message}
                        type={toast.type}
                        onClose={() => removeToast(toast.id)}
                    />
                ))}
            </div>
        </section>
    );
}
