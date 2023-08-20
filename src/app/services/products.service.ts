import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../products';
import { Observable } from 'rxjs';

const productsUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  listProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(productsUrl);
  }

  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${productsUrl}/${productId}`);
  }
}
