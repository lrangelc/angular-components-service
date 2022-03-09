import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

import { Product } from './../../models/product.model';
import { StoreService } from './../../services/store.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  total = 0;

  myShoppingCart: Product[] = [];
  products: Product[] = []
  // products: Product[] = [
  //   {
  //     id: '1',
  //     name: 'EL mejor juguete',
  //     price: 565,
  //     image: './assets/images/toy.jpg'
  //   },
  //   {
  //     id: '2',
  //     name: 'Bicicleta casi nueva',
  //     price: 356,
  //     image: './assets/images/bike.jpg'
  //   },
  //   {
  //     id: '3',
  //     name: 'Colleción de albumnes',
  //     price: 34,
  //     image: './assets/images/album.jpg'
  //   },
  //   {
  //     id: '4',
  //     name: 'Mis libros',
  //     price: 23,
  //     image: './assets/images/books.jpg'
  //   },
  //   {
  //     id: '5',
  //     name: 'Mis vasos',
  //     price: 10,
  //     image: './assets/images/glasses.jpg'
  //   },
  //   {
  //     id: '6',
  //     name: 'Mi casa',
  //     price: 2000,
  //     image: './assets/images/house.jpg'
  //   }
  // ];

  constructor(private storeService: StoreService,
    private productsService: ProductsService) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data: Product[]) => {
      this.products = data;
    })
  }

  onAddToShoppingCart(product: Product) {
    console.log(product);
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
}
