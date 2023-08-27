import { Component, inject } from '@angular/core';
import { switchMap, tap } from 'rxjs';
import { Product } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { MatButtonModule } from '@angular/material/button';
import { NgIf, AsyncPipe, CurrencyPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  standalone: true,
  imports: [NgIf, MatButtonModule, AsyncPipe, CurrencyPipe],
})
export class ProductDetailComponent {
  private route = inject(ActivatedRoute);
  private productsService = inject(ProductsService);
  private cartService = inject(CartService);
  product = toSignal(
    this.route.params.pipe(
      switchMap(({ productId }) =>
        this.productsService.getProductById(productId)
      )
    )
  );

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    window.alert(`${product.name} adicionado ao carrinho`);
  }
}
