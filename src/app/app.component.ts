import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculadoraAngular';
    valor1=0;
    valor2=0;
    resultado=0;
  
    sumar() {
      this.resultado = this.valor1 + this.valor2;
    }
}



