export enum HttpCodeType {
    Informational = "Informational",
    Successfull = "Successfull",
    Redirection = "Redirection",
    ClientError = "ClientError",
    ServerError = "ServerError",
};

export interface HttpCodeListItem {
    code: string;
    meaning: string;
    type: HttpCodeType;
}