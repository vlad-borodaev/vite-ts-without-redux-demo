import type { FC } from "react";
import { useHttpCat } from "../../hooks";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/atoms";
import { Container } from "../../components/templates";
import { HttpCodeImage } from "../../components/molecules";
import { ToastList } from "../../components/organisms";

export const HttpCodeDetails: FC = () => {
    const { code } = useParams();

    const { data, loading, error } = useHttpCat(code);

    return (
        <Container showNavigationBack={Boolean(!loading && data)}>
            { loading && (
                <Loader />
            ) }

            { !loading && data && (
                <>
                    <HttpCodeImage src={data} />
                    <ToastList />
                </>
            ) }

            { !loading && error && (
                <>{error}</>
            ) }
        </Container>
    );
};