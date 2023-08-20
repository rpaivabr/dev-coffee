import { Injectable } from '@angular/core';
import { Product } from '../products';
import { Address, Order } from '../order';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const ordersUrl = 'http://localhost:3000/orders';

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
    this.http.post(ordersUrl, order).subscribe(() => {
      window.alert('Pedido finalizado com sucesso!');
      this.clearItems();
    });
  }

  private clearItems() {
    this.items = [];
    this.cartTotalItems.next(this.items.length);
  }
}
