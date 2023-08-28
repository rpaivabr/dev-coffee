import {
  Component,
  Injector,
  Input,
  OnInit,
  Signal,
  inject,
  runInInjectionContext,
} from '@angular/core';
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
export class ProductDetailComponent implements OnInit {
  @Input() productId?: string;
  private injector = inject(Injector);
  private productsService = inject(ProductsService);
  private cartService = inject(CartService);
  product!: Signal<Product | undefined>;

  ngOnInit(): void {
    runInInjectionContext(this.injector, () => {
      this.product = toSignal(
        this.productsService.getProductById(this.productId!)
      );
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    window.alert(`${product.name} adicionado ao carrinho`);
  }
}
