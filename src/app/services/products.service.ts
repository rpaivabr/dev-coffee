import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/products';
import { environment } from 'src/environments/environment';

const URL = `${environment.apiUrl}/products`;

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  listProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(URL);
  }

  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${URL}/${productId}`);
  }
}
