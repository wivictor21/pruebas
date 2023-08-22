import { Component } from '@angular/core';
import {Heroe} from '../heroe'

@Component({
  selector: 'heroe',
  templateUrl: './heroe-component.component.html',
  styleUrls: ['./heroe-component.component.css']
})
export class HeroeComponentComponent {
  myHeroe1:Heroe={
    id:1,
    name:'Superman'
  }
  myHeroe2:Heroe={
    id:2,
    name:'Superman'
  }
  myHeroe3:Heroe={
    id:3,
    name:'Supergirl'
  }

  myHeroes:Heroe[]=[];
  constructor(){
    this.myHeroes.push(this.myHeroe1)
    this.myHeroes.push(this.myHeroe2)
    this.myHeroes.push(this.myHeroe3)
  }
}
