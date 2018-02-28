import { Component, OnInit } from '@angular/core';
import { ControleDeEstoqueService } from '../controle-de-estoque.service';

declare var AdminLTE: any;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products;
  constructor(private controleEstoque: ControleDeEstoqueService) { }

  ngOnInit() {
    AdminLTE.init();
    this.controleEstoque.getList().subscribe((response)=> this.products = response)
  }

}
