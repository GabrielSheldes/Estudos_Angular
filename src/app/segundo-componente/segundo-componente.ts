import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  imports: [],
  templateUrl: './segundo-componente.html',
  styleUrl: './segundo-componente.css'
})
export class SegundoComponente {
  
//Função mensagem
mensagem(){
  alert('Olá Mundo');
}

mensagem2(){
  alert('Bizarro')
}



}
