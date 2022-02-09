import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup , FormControl } from '@angular/forms';
import { first } from 'rxjs';
import { Input } from '@angular/core';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})

export class CalculadoraComponent implements OnInit {

  
   peso:number;
   altura:number;
   resultado:number;

  //@Input() peso?: CalculadoraComponent;
  //@Input() altura?: CalculadoraComponent;
  //@Input() resultado?: CalculadoraComponent;


  
  calculadora = new FormGroup({
    Name: new FormControl(''),
    peso: new FormControl(''),
    altura: new FormControl(''),
    hombre: new FormControl(''),
    mujer: new FormControl(''),
    resultado: new FormControl('')
    
  });
  router: any;
  
  constructor(private route:ActivatedRoute) { 
    this.peso =0;
    this.altura = 0;
    this.resultado=0;
  }

  ngOnInit(): void {
  }

  onSubmit() {
   console.log(this.calculadora.value); 
   window.alert('Guardado');

   this.resultado = this.peso / (this.altura/100);
   this.router.navigate(['/dashboard', this.resultado.toFixed(2)]);
  
    this.altura
    this.peso 

    console.log(this.peso);
    console.log(this.altura);
    console.log(this.resultado);

  }

}


