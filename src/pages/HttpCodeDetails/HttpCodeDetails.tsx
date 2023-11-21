import type { FC, PropsWithChildren } from "react";
import { useHttpCat } from "../../hooks";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/atoms";

export const HttpCodeDetails: FC<PropsWithChildren> = (props) => {
    const { children } = props;
    const { code } = useParams();

    const { data, loading, error } = useHttpCat(code);

    if (loading) {
        return (
            <Loader />
        );
    }

    return (
        <>
            <img src={data} />
            { children }
        </>
    );
};