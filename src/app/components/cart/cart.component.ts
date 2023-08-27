import { Component, OnInit, inject } from '@angular/core';
import {
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/order';
import { Product } from 'src/app/models/products';
import { AddressForm, CartService } from 'src/app/services/cart.service';
import { NgIf, NgFor, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, CurrencyPipe],
})
export class CartComponent implements OnInit {
  private router = inject(Router);
  private cartService = inject(CartService);
  cartItems: Product[] = [];
  total: number = 0;
  addressForm = new FormGroup<AddressForm>({
    zipcode: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)],
    }),
    street: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.cartItems.forEach((item) => {
      this.total += item.price;
    });
  }

  submitForm() {
    const address = this.addressForm.value as Address;
    if (!address.zipcode || address.zipcode.length < 8) return;
    if (!address.street) return;

    this.cartService.createOrder(address);
    this.addressForm.reset();
    this.router.navigate(['']);
  }
}
