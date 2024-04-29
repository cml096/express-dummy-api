export interface JsonApiResourceObject<T> {
    id: string;
    type: string;
    attributes: T;
    relationships?: {
        [key: string]: {
            data: JsonApiResourceObject<T> | Array<JsonApiResourceObject<T>>;
        };
    };
}

export interface JsonApiResourceIdentifier {
    id: string;
    type: string;
}

// I've to check this type
export interface PaginationMeta {
    totalCount: number;
    pageSize: number;
    currentPage: number;
    totalPages: number;
}

export interface JsonApiError {
    id?: string;
    status: string;
    title: string;
    detail: string;
    source?: {
        pointer?: string;
        parameter?: string;
    };
    links?: JsonApiLinks;
    meta?: PaginationMeta;
}

export interface JsonApiLinks {
    self?: string;
    related?: string;
}

export interface JsonApiResponse<T> {
    data?: JsonApiResourceObject<T> | Array<JsonApiResourceObject<T>>;
    errors?: JsonApiError[];
    meta?: PaginationMeta;
    links?: JsonApiLinks;
}

