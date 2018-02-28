import { Component, OnInit } from '@angular/core';
import { ControleDeEstoqueService } from '../controle-de-estoque.service';
import { Brand } from './brand';

 declare var AdminLTE: any;
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  loading: boolean;

  public brands: Brand[];

    cols: any[];
  constructor(private controleEstoque: ControleDeEstoqueService) { }

  ngOnInit() {
     AdminLTE.init();
     this.controleEstoque.pathUrl = 'brands'
     this.controleEstoque.getList().subscribe(res => this.brands = <Brand[]> res.result.you_response)
  }

}
