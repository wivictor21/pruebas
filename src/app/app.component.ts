import { Component } from '@angular/core';

@Component({
  selector: 'myApp', //tag <myApp></myApp>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour de Heroes';
  nombres = 'Juan';
  apellidos = 'Perez';
  /*
  edad = 37
  estatura = 180
  peso = 75
  */
}

/*
<div class="app-root">
</div>
*/