import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  peso:string;
   resultado:number;
   texto:string;


  constructor(private route:ActivatedRoute) { 
    this.peso ='';
    this.texto = '';
    this.resultado = +route.snapshot.paramMap.get('peso')!;
  }

  ngOnInit(): void {
    this.getResultado();
  }
  getResultado(){
    if (this.resultado <= 18) {
      this.texto = 'Bajo de peso';
      this.texto = 'Tienes un peso corporal inferior al normal.';
      console.log(this.texto)
    } else if (this.resultado >= 18.01 && this.resultado <= 24.99) {
      this.texto = 'Peso normal';
      this.texto = 'Tienes un peso corporal normal.';
    } else if (this.resultado >= 25 && this.resultado <= 29.99) {
      this.texto = 'Sobre peso';
      this.texto = 'Tienes un peso corporal levemente superior al normal.';
    } else if (this.resultado>= 30 && this.resultado <= 34.99) {
      this.texto = 'Obesidad';
      this.texto = 'Tienes un peso corporal superior al normal.';
    } else if (this.resultado >= 35) {
      this.texto = 'Obesidad extrema';
      this.texto = 'Tienes un peso corporal extremadamente superior al normal.';
    }
}
}
