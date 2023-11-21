import { useEffect, useMemo, useRef, useState } from "react";
import { HttpCodeService } from "../../services";

export const useHttpCat = (httpCode?: string) => {
    const [error, setError] = useState<string>('');
    const [loading, setIsLoading] = useState<boolean>(false);

    const [imageSourceUrl, setImageSourceUrl] = useState<string>("");

    const httpServiceRef = useRef<HttpCodeService>(new HttpCodeService());

    useEffect(() => {
        const apiService = httpServiceRef.current;

        const retrieveDetails = async (httpCode?: string) => {
            setIsLoading(true);

            try {
                if (!httpCode) {
                    setIsLoading(false);
                    throw new Error("HTTP code cannot be nullable");
                }
                const allowedHttpCodes = await apiService.getAllowedHttpCodes();
                if (!allowedHttpCodes.includes(httpCode)) {
                    setIsLoading(false);
                    throw new Error("Invalid HTTP code");
                }

                const blobImg = await apiService.getHttpCatMeme(httpCode);
                setImageSourceUrl(URL.createObjectURL(blobImg));

                // @FIXME: to simulate a delay when requesting data
                setTimeout(() => {
                    setIsLoading(false);
                }, 1500);
            } catch (err: unknown) {
                setError((err as any).message || "");
            }
        };

        retrieveDetails(httpCode);
    }, [httpCode]);

    return useMemo(() => {
        return {
            data: imageSourceUrl,
            error,
            loading,
        };
    }, [Boolean(imageSourceUrl), error, loading]);
};
