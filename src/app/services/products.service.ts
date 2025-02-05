import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { UrlCodec } from '@angular/common/upgrade';
import { Observable } from 'rxjs';
import { PaginationParams, Products } from '../type';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apiService: ApiService) { }

// criar dois novos tipos, para o `params` e o `Observable`
  getProducts = (url: string, params: PaginationParams): Observable<Products> => { 
    return this.apiService.get(url, { 
      params, 
      responseType: 'json', 
    });
  }
}
