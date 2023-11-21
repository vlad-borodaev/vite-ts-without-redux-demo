import { useEffect, useMemo, useRef, useState } from "react";
import { HttpCodeListItem } from "../../services/declarations";
import { HttpCodeService } from "../../services";

export const useHttpCatList = () => {
    const [httpCodeList, setHttpCodeList] = useState<Array<HttpCodeListItem>>([]);
    const [error, setError] = useState<string>('');
    const [loading, setIsLoading] = useState<boolean>(false);

    const httpServiceRef = useRef<HttpCodeService>(new HttpCodeService());

    useEffect(() => {
        const apiService = httpServiceRef.current;

        const retrieveList = async () => {
            setIsLoading(true);

            try {
                const data = await apiService.getHttpCodesList();
                setHttpCodeList(data);

                // @FIXME: to simulate a delay when requesting data
                setTimeout(() => {
                    setIsLoading(false);
                }, 1500);
            } catch (err: unknown) {
                setError((err as any).message || "");
            }
        };

        retrieveList();
    }, []);

    return useMemo(() => {
        return {
            data: httpCodeList,
            error,
            loading,
        };
    }, [Boolean(httpCodeList), Boolean(error), loading]);
};
