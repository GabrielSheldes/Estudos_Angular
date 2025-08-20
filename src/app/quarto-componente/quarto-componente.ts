import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quarto-componente',
  imports: [CommonModule],
  templateUrl: './quarto-componente.html',
  styleUrl: './quarto-componente.css'
})
export class QuartoComponente {
//variavel exibir
  exibir: boolean=false;

//função para exibir ou ocultar o nosso quadrado
  acao(){
    if(this.exibir === true){
      this.exibir = false;
    }else{ 
      this.exibir = true;
    }
  }


}
