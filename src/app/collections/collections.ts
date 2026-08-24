import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ProductService,
  ApiProduct
} from '../services/product.service';
import {
  ProductCard,
  ProductCardData
} from '../product-card/product-card';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  image: string;
  category: string;
}

@Component({
  selector: 'app-collections',
  imports: [RouterLink, ProductCard],
  templateUrl: './collections.html',
  styleUrl: './collections.scss'
})
export class Collections implements OnInit {

  apiProducts: ApiProduct[] = [];

  loading = false;

  apiError = false;

  selectedCategory = 'ALL';

  selectedProduct: ProductCardData | null = null;

  products: Product[] = [

    {
      id: 1,
      name: 'ELIE SAAB',
      brand: 'DRESSES',
      price: '€1,250',
      image: '/assets/brands/elie.webp',
      category: 'WOMEN'
    },

    {
      id: 2,
      name: 'BOSS',
      brand: 'CAPS',
      price: '€890',
      image: '/assets/brands/boss.webp',
      category: 'MEN'
    },

    {
      id: 3,
      name: 'SAINT BARTH',
      brand: 'SWIMSUITS',
      price: '€1,650',
      image: '/assets/brands/saint barth.webp',
      category: 'WOMEN'
    },

    {
      id: 4,
      name: 'TOMMY HILFIGER',
      brand: 'CLOTHES',
      price: '€1,450',
      image: '/assets/brands/tom.webp',
      category: 'MEN'
    },

    {
      id: 5,
      name: 'DOLCE & GABBANA',
      brand: 'ACCESSORIES',
      price: '€1,999',
      image: '/assets/brands/Ear.webp',
      category: 'ACCESSORIES'
    },

    {
      id: 6,
      name: 'BOTTEGA',
      brand: 'ACCESSORIES',
      price: '€3,000',
      image: '/assets/brands/sun.jpeg',
      category: 'ACCESSORIES'
    }

  ];

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit(): void {

    this.loading = true;

    this.productService.getProducts().subscribe({

      next: (products) => {
        this.apiProducts = products;
        this.loading = false;
      },

      error: () => {
        this.apiError = true;
        this.loading = false;
      }

    });

  }

  get filteredProducts(): Product[] {

    if (this.selectedCategory === 'ALL') {
      return this.products;
    }

    return this.products.filter(
      product =>
        product.category === this.selectedCategory
    );

  }

  filterProducts(category: string): void {
    this.selectedCategory = category;
  }

  onProductSelected(product: ProductCardData): void {
    this.selectedProduct = product;
  }

}