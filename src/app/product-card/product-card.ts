import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ProductCardData {
  id: number;
  name: string;
  brand: string;
  price: string;
  image: string;
  category: string;
}

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {

  @Input() product!: ProductCardData;

  @Output() productSelected =
    new EventEmitter<ProductCardData>();

  selectProduct(): void {
    this.productSelected.emit(this.product);
  }

}