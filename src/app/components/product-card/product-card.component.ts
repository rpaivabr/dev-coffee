import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/products';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss'],
    standalone: true,
    imports: [NgIf],
})
export class ProductCardComponent {
  @Input() product?: Product;
  @Output() select = new EventEmitter();
}
