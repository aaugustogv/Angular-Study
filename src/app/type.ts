import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export interface Options {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body'; 
    // precisamos declarar qual propriedade do `Observable` e resolvemos isso colocando o `?` no inicio

    context?: HttpContext;
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    transferCache?: {
        includeHeaders?: string[];
    } | boolean;
}

// parâmetros(valores) para o products.service `Observable` receber corretamente
export interface Products { 
    items: Product[];
    total: number;
    page: number;
    perPage: number;
    totalPage: number;
}

export interface Product { 
    price: string;
    name: string;
    image: string;
    rating: string;
}

// São os `params` parâmetros(valores) para o products.service receber corretamente.
// TODO - para o Observable? 
export interface PaginationParams { 
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    page: number;
    perPage: number;
}