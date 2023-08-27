import { Component, Signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { NgFor } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  imports: [NgFor, ProductCardComponent],
})
export class ProductListComponent {
  private productsService = inject(ProductsService);
  private router = inject(Router);
  products = toSignal(this.productsService.listProducts());

  navigateToDetail(productId: number): void {
    this.router.navigate(['products', productId]);
  }
}
