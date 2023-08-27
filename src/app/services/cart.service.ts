import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/products';
import { Address, Order } from '../models/order';

const URL = `${environment.apiUrl}/orders`;

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: Product[] = [];
  private cartTotalItems = new BehaviorSubject(0);
  cartTotalItems$ = this.cartTotalItems.asObservable();

  constructor(private http: HttpClient) {}

  getItems(): Product[] {
    return this.items;
  }

  addToCart(product: Product): void {
    this.items.push(product);
    this.cartTotalItems.next(this.items.length);
  }

  createOrder(address: Address): void {
    const order: Order = {
      items: this.items,
      address,
    };
    this.http.post(URL, order).subscribe(() => {
      window.alert('Pedido finalizado com sucesso!');
      this.clearItems();
    });
  }

  private clearItems() {
    this.items = [];
    this.cartTotalItems.next(this.items.length);
  }
}
