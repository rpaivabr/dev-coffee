import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../products';
import { ProductsService } from '../services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products$ = this.productsService.listProducts();
  }

  navigateToDetail(productId: number): void {
    this.router.navigate(['products', productId]);
  }
}
