import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../products';
import { FormBuilder, Validators } from '@angular/forms';
import { Address } from '../order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  addressForm = this.fb.group({
    zipcode: ['', [Validators.required, Validators.minLength(8)]],
    street: ['', Validators.required],
  });

  get total(): number {
    let total = 0;
    this.cartItems.forEach((item) => {
      total = total + item.price;
    });
    return total;
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
  }

  submitForm() {
    const address = this.addressForm.value as Address;
    if (!address.zipcode) return;
    if (!address.street) return;

    this.cartService.createOrder(address);
    this.addressForm.reset();
    this.router.navigate(['']);
  }
}
