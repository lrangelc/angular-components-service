import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

const serviceUrl = 'https://fakestoreapi.com/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts() {
    return this.httpClient.get<Product[]>(`${serviceUrl}`);
  }
}
