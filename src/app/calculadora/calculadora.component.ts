import { Component, OnInit, Output, Input,EventEmitter  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup , FormControl } from '@angular/forms';
import { first } from 'rxjs';





@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})

export class CalculadoraComponent implements OnInit {

  @Output() pulsado = new EventEmitter<string>();
  
   peso: number;
   altura: number;
   resultado: number;
   name: string;
   texto:string;
  
  
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
    this.name="";
    this.texto="";
    
    
    
    
  }
  
  ngOnInit(): void {
    
  }
  ejecutar(){
    this.pulsado.emit(this.name);
  }

  onSubmit() {
   console.log(this.calculadora.value); 
   //window.alert('Guardado');

   this.resultado = this.peso / (this.altura/100);
   //this.router.navigate(['/dashboard', this.resultado.toFixed(2)]);
   
  
    this.altura
    this.peso 
    this.resultado
    this.name

    console.log();
    console.log(this.altura);
    console.log(this.resultado);

  }
  ejecutarhola(){
    this.pulsado.emit("Peso"+this.peso +"altura"+this.altura);
  }
  masPeso(){
  this.peso=this.peso+1
  
} 
  menosPeso(){
  this.peso=this.peso-1
} 
masAltura(){
  this.altura=this.altura+1
} 

menosAltura(){
  this.altura=this.altura-1
} 

}





