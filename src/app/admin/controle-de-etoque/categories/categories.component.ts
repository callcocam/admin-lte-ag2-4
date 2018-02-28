import { Component, OnInit } from '@angular/core';
import { ControleDeEstoqueService } from '../controle-de-estoque.service';

declare var AdminLTE: any;
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categories;
  
  constructor(private controleEstoque: ControleDeEstoqueService) { }
  
  ngOnInit() {
     this.controleEstoque.pathUrl = 'categories'
     this.controleEstoque.getList().subscribe((response)=> this.categories = response)
 // Update the AdminLTE layouts
 AdminLTE.init();
  }

}
