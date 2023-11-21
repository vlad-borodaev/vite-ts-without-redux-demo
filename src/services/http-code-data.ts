import { HttpCodeListItem, HttpCodeType } from "./declarations";

export const HTTP_CODE_LIST: Array<HttpCodeListItem> = [
    {
        code: "100",
        meaning: "Continue",
        type: HttpCodeType.Informational,
    },
    {
        code: "101",
        meaning: "Switching protocols",
        type: HttpCodeType.Informational,
    },
    {
        code: "102",
        meaning: "Processing",
        type: HttpCodeType.Informational,
    },
    {
        code: "103",
        meaning: "Early Hints",
        type: HttpCodeType.Informational,
    },
    {
        code: "200",
        meaning: "OK",
        type: HttpCodeType.Successfull,
    },
    {
        code: "201",
        meaning: "Created",
        type: HttpCodeType.Successfull,
    },
    {
        code: "202",
        meaning: "Accepted",
        type: HttpCodeType.Successfull,
    },
    {
        code: "203",
        meaning: "Non-Authoritative Information",
        type: HttpCodeType.Successfull,
    },
    {
        code: "204",
        meaning: "No Content",
        type: HttpCodeType.Successfull,
    },
    {
        code: "205",
        meaning: "Reset Content",
        type: HttpCodeType.Successfull,
    },
    {
        code: "206",
        meaning: "Partial Content",
        type: HttpCodeType.Successfull,
    },
    {
        code: "207",
        meaning: "Multi-Status",
        type: HttpCodeType.Successfull,
    },
    {
        code: "208",
        meaning: "Already Reported",
        type: HttpCodeType.Successfull,
    },
    {
        code: "226",
        meaning: "IM Used",
        type: HttpCodeType.Successfull,
    },
    {
        code: "300",
        meaning: "Multiple Choices",
        type: HttpCodeType.Redirection,
    },
    {
        code: "301",
        meaning: "Moved Permanently",
        type: HttpCodeType.Redirection,
    },
    {
        code: "302",
        meaning: "Found (Previously 'Moved Temporarily')",
        type: HttpCodeType.Redirection,
    },
    {
        code: "303",
        meaning: "See Other",
        type: HttpCodeType.Redirection,
    },
    {
        code: "304",
        meaning: "Not Modified",
        type: HttpCodeType.Redirection,
    },
    {
        code: "305",
        meaning: "Use Proxy",
        type: HttpCodeType.Redirection,
    },
    {
        code: "306",
        meaning: "Switch Proxy",
        type: HttpCodeType.Redirection,
    },
    {
        code: "307",
        meaning: "Temporary Redirect",
        type: HttpCodeType.Redirection,
    },
    {
        code: "308",
        meaning: "Permanent Redirect",
        type: HttpCodeType.Redirection,
    },
    {
        code: "400",
        meaning: "Bad Request",
        type: HttpCodeType.ClientError,
    },
    {
        code: "401",
        meaning: "Unauthorized",
        type: HttpCodeType.ClientError,
    },
    {
        code: "402",
        meaning: "Payment Required",
        type: HttpCodeType.ClientError,
    },
    {
        code: "403",
        meaning: "Forbidden",
        type: HttpCodeType.ClientError,
    },
    {
        code: "404",
        meaning: "Not Found",
        type: HttpCodeType.ClientError,
    },
    {
        code: "405",
        meaning: "Method Not Allowed",
        type: HttpCodeType.ClientError,
    },
    {
        code: "406",
        meaning: "Not Acceptable",
        type: HttpCodeType.ClientError,
    },
    {
        code: "407",
        meaning: "Proxy Authentication Required",
        type: HttpCodeType.ClientError,
    },
    {
        code: "408",
        meaning: "Request Timeout",
        type: HttpCodeType.ClientError,
    },
    {
        code: "409",
        meaning: "Conflict",
        type: HttpCodeType.ClientError,
    },
    {
        code: "410",
        meaning: "Gone",
        type: HttpCodeType.ClientError,
    },
    {
        code: "411",
        meaning: "Length Required",
        type: HttpCodeType.ClientError,
    },
    {
        code: "412",
        meaning: "Precondition Failed",
        type: HttpCodeType.ClientError,
    },
    {
        code: "413",
        meaning: "Payload Too Large",
        type: HttpCodeType.ClientError,
    },
    {
        code: "414",
        meaning: "URI Too Long",
        type: HttpCodeType.ClientError,
    },
    {
        code: "415",
        meaning: "Unsupported Media Type",
        type: HttpCodeType.ClientError,
    },
    {
        code: "416",
        meaning: "Range Not Satisfiable",
        type: HttpCodeType.ClientError,
    },
    {
        code: "417",
        meaning: "Expectation Failed",
        type: HttpCodeType.ClientError,
    },
    {
        code: "418",
        meaning: "I'm a Teapot",
        type: HttpCodeType.ClientError,
    },
    {
        code: "421",
        meaning: "Misdirected Request",
        type: HttpCodeType.ClientError,
    },
    {
        code: "422",
        meaning: "Unprocessable Entity",
        type: HttpCodeType.ClientError,
    },
    {
        code: "423",
        meaning: "Locked",
        type: HttpCodeType.ClientError,
    },
    {
        code: "424",
        meaning: "Failed Dependency",
        type: HttpCodeType.ClientError,
    },
    {
        code: "425",
        meaning: "Too Early",
        type: HttpCodeType.ClientError,
    },
    {
        code: "426",
        meaning: "Upgrade Required",
        type: HttpCodeType.ClientError,
    },
    {
        code: "428",
        meaning: "Precondition Required",
        type: HttpCodeType.ClientError,
    },
    {
        code: "429",
        meaning: "Too Many Requests",
        type: HttpCodeType.ClientError,
    },
    {
        code: "431",
        meaning: "Request Header Fields Too Large",
        type: HttpCodeType.ClientError,
    },
    {
        code: "451",
        meaning: "Unavailable For Legal Reasons",
        type: HttpCodeType.ClientError,
    },
    {
        code: "500",
        meaning: "Internal Server Error",
        type: HttpCodeType.ClientError,
    },
    {
        code: "501",
        meaning: "Not Implemented",
        type: HttpCodeType.ClientError,
    },
    {
        code: "502",
        meaning: "Bad Gateway",
        type: HttpCodeType.ClientError,
    },
    {
        code: "503",
        meaning: "Service Unavailable",
        type: HttpCodeType.ClientError,
    },
    {
        code: "504",
        meaning: "Gateway Timeout",
        type: HttpCodeType.ClientError,
    },
    {
        code: "505",
        meaning: "HTTP Version Not Supported",
        type: HttpCodeType.ClientError,
    },
    {
        code: "506",
        meaning: "Variant Also Negotiates",
        type: HttpCodeType.ClientError,
    },
    {
        code: "507",
        meaning: "Insufficient Storage",
        type: HttpCodeType.ClientError,
    },
    {
        code: "508",
        meaning: "Loop Detected",
        type: HttpCodeType.ClientError,
    },
    {
        code: "510",
        meaning: "Not Extended",
        type: HttpCodeType.ClientError,
    },
    {
        code: "511",
        meaning: "Network Authentication Required",
        type: HttpCodeType.ClientError,
    },
];

export const ALLOWED_HTTP_CODES = HTTP_CODE_LIST.map(x => x.code);
