import { Component, Signal, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { NgIf, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  standalone: true,
  imports: [RouterLink, NgIf, AsyncPipe],
})
export class TopBarComponent {
  private cartService = inject(CartService);
  cartTotalItems = this.cartService.cartTotalItems;
}
