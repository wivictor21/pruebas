import { Component } from '@angular/core';
import { Heroe } from '../heroe';
@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  algo="prueba"
  myHeroes:Heroe[]=[
    {
      id:1,
      name:'Victor'
    },
    {
      id:2,
      name:'Julio'
    },
    {
      id:3,
      name:'Huertas'
    }
  ]
}
