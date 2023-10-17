import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.page.html',
  styleUrls: ['./admin-page.page.scss'],
})
export class AdminPagePage implements OnInit {
  tasks:any[]=[]
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  crearProducto(){
    this.navCtrl.navigateRoot('/admin');
  }

  crearCategoria(){
    this.navCtrl.navigateRoot('/admin-cat');
  }

  crearBodega(){
    this.navCtrl.navigateRoot('/admin-bod');
  }
  listarCategoria(){
    this.navCtrl.navigateRoot('/admin-cat-list');
  }

  listarBodega(){
    this.navCtrl.navigateRoot('/admin-bod-list');
  }
  
}
