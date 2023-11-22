import type { FC } from "react";
import { useHttpCat } from "../../hooks";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/atoms";
import { Container } from "../../components/templates";

export const HttpCodeDetails: FC = () => {
    const { code } = useParams();

    const { data, loading, error } = useHttpCat(code);

    return (
        <Container>
            { loading && (
                <Loader />
            ) }

            { !loading && data && (
                <img src={data} />
            ) }

            { !loading && error && (
                <>{error}</>
            ) }
        </Container>
    );
};