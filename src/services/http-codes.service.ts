import { HttpCodeListItem } from "./declarations";
import { ALLOWED_HTTP_CODES, HTTP_CODE_LIST } from "./http-code-data";

export class HttpCodeService {
    private apiUrl: string;

    constructor() {
        this.apiUrl = import.meta.env.DEV
            ? "/api"
            : import.meta.env.VITE_API_URL;
    }

    getHttpCodesList(): Promise<Array<HttpCodeListItem>> {
        return Promise.resolve(HTTP_CODE_LIST);
    }

    getAllowedHttpCodes(): Promise<Array<string>> {
        return Promise.resolve(ALLOWED_HTTP_CODES);
    }

    async getHttpCatMeme(httpCode: string): Promise<Blob> {
        const resp = await fetch(`${this.apiUrl}/${httpCode}`, {
            headers: {
                "Content-Type": "image/jpeg"
            }
        });
        return await resp.blob();
    }
}