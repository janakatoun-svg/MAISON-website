import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ApiProduct {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl =
    'https://jsonplaceholder.typicode.com/photos?_limit=8';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ApiProduct[]> {
    return this.http.get<ApiProduct[]>(this.apiUrl);
  }

}