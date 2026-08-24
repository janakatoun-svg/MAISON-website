import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  image: string;
  category: string;
  description: string;
}

@Component({
  selector: 'app-product-details',
  imports: [RouterLink],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss'
})
export class ProductDetails implements OnInit {

  product: Product | undefined;

  products: Product[] = [

    {
      id: 1,
      name: 'ELIE SAAB',
      brand: 'DRESSES',
      price: '€1,250',
      image: '/assets/brands/elie.webp',
      category: 'WOMEN',
      description:
        'An elegant Elie Saab piece combining refined design with contemporary luxury.'
    },

    {
      id: 2,
      name: 'BOSS',
      brand: 'CAPS',
      price: '€890',
      image: '/assets/brands/boss.webp',
      category: 'MEN',
      description:
        'A sophisticated BOSS accessory designed to complement a modern wardrobe.'
    },

    {
      id: 3,
      name: 'SAINT BARTH',
      brand: 'SWIMSUITS',
      price: '€1,650',
      image: '/assets/brands/saint barth.webp',
      category: 'WOMEN',
      description:
        'A refined Saint Barth scarf inspired by effortless resort style.'
    },

    {
      id: 4,
      name: 'TOMMY HILFIGER',
      brand: 'CLOTHES',
      price: '€1,450',
      image: '/assets/brands/tom.webp',
      category: 'MEN',
      description:
        'A timeless Tommy Hilfiger piece combining classic style with contemporary details.'
    },

    {
      id: 5,
      name: 'DOLCE & GABBANA',
      brand: 'ACCESSORIES',
      price: '€1,999',
      image: '/assets/brands/Ear.webp',
      category: 'ACCESSORIES',
      description:
        'A statement Dolce & Gabbana accessory created to add a distinctive touch to any look.'
    },

    {
      id: 6,
      name: 'BOTTEGA',
      brand: 'ACCESSORIES',
      price: '€3,000',
      image: '/assets/brands/sun.jpeg',
      category: 'ACCESSORIES',
      description:
        'A sophisticated Bottega accessory reflecting understated Italian luxury.'
    }

  ];

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.product = this.products.find(
      product => product.id === id
    );

  }

}