import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  public precio : string = '';
  public descripcion : string = '';
  public id : number = 0;

  constructor( private route : ActivatedRoute) {
   }

  ngOnInit() {
  }
  ionViewWildEnter(){
  }


}
