import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClProducto } from '../model/ClProducto';
import { CartService } from '../cart.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  product: ClProducto;

  constructor(private dataService: DataService, private cartService: CartService , private route: ActivatedRoute, private router: Router) {
    this.product = {} as ClProducto;
  }
  
  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      const state = navigation.extras.state;
      if (state && 'product' in state) {
        this.product = state['product'];
      }
    }

    
  }
  addToCart(product: any) {
    this.cartService.addToCart(product);}
    get productss() {
      return this.dataService.products;
    }
}
