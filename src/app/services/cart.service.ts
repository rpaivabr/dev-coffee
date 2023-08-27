import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../models/products';
import { Address, Order } from '../models/order';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const URL = `${environment.apiUrl}/orders`;

export interface AddressForm {
  zipcode: FormControl<string>;
  street: FormControl<string>;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private http = inject(HttpClient);
  private items = signal<Product[]>([]);
  cartItems = this.items.asReadonly();
  cartTotalItems = computed(() => this.items().length);

  getItems(): Product[] {
    return this.items();
  }

  addToCart(product: Product): void {
    this.items.mutate((items) => items.push(product));
  }

  createOrder(address: Address): void {
    const order: Order = {
      items: this.items(),
      address,
    };
    this.http.post(URL, order).subscribe(() => {
      window.alert('Pedido finalizado com sucesso!');
      this.clearItems();
    });
  }

  createAddressForm(): FormGroup<AddressForm> {
    return new FormGroup<AddressForm>({
      zipcode: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(8)],
      }),
      street: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
  }

  private clearItems() {
    this.items.update(() => []);
  }
}
