import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options } from '../type';

// Facilita a comunicação entre o "backend" e o que será tratado na home.component.ts

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    // httpClient service é utilizado para realizar chamadas de api com URL's
    private httpClient: HttpClient 
  ) { }

  get<T>(url : string, options : Options): Observable<T> { 
    // A URL retorna uma séria de Options já tratadas no type.ts 
    // O que é type.ts? 
    return this.httpClient.get<T>(url, options) as Observable<T>;
    // 
  }
}
