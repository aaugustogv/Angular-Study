import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products } from '../type';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // ajuda a declara os serviços usados antes da inicialização do componente 
  constructor( 
    private productsService: ProductsService
  ){ }
  
  // quando vamos iniciar o componente usamos o ngOnInit
  ngOnInit() { 
    this.productsService
    .getProducts(`http://localhost:3000?clothes`, {page: 1, perPage: 5}) 
    // se inscreve(subscribe) no Observable e mostra a reposta
    .subscribe((products: Products) => {
      console.log(products.items);
    });
  }
  
}
