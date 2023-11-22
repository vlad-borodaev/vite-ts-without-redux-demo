import type { FC } from "react";
import { useHttpCatList } from "../../hooks";
import { Loader } from "../../components/atoms";
import { Container } from "../../components/templates";
import { HttpCodeCardList } from "../../components/organisms";

export const HttpCodeList: FC = () => {
    const { data, loading, error } = useHttpCatList();

    return (
        <Container>
            { loading && (
                <Loader />
            ) }

            { !loading && data && (
                <HttpCodeCardList list={data} />
            ) }

            { !loading && error && (
                <>{error}</>
            ) }
        </Container>
    );
};
