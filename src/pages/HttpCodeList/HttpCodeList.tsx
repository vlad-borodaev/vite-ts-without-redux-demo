import type { FC, PropsWithChildren } from "react";
import { useHttpCatList } from "../../hooks";
import { Loader } from "../../components/atoms";

export const HttpCodeList: FC<PropsWithChildren> = (props) => {
    const { children } = props;

    const { data, loading, error } = useHttpCatList();

    console.log("data", data);

    if (loading) {
        return (
            <Loader />
        );
    }

    return (
        <>
            { children }
        </>
    );
};
