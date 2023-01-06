import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  public descripcion : string = '';
  public precio : number = 0;
  public id : number = 0;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  public buscaProducto(){this.router.navigate(['/detalle'])

  }


}
