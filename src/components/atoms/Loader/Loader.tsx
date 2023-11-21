import type { FC } from "react";
import "./Loader.module.css";

interface LoaderProps {}

export const Loader: FC<LoaderProps> = (props) => {
    return (
        <div className="loader-dual-ring"></div>
    );
};
