import { Injectable } from '@angular/core';
import { ClProducto } from './model/ClProducto';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: any[] = [];

  constructor() {}

  addToCart(product: any) {
    this.cart.push(product);
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
  }

  removeFromCart(product: any) {
    const index = this.cart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }
  getTotal(): number {
    
    return this.cart.reduce((total, product) => total + product.precio , 0 ) ;
    
  }}
