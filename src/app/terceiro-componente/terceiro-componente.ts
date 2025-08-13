import { Component } from '@angular/core';

@Component({
  selector: 'app-terceiro-componente',
  imports: [],
  templateUrl: './terceiro-componente.html',
  styleUrl: './terceiro-componente.css'
})
export class TerceiroComponente {

imagem:string='Julio.png';

//função para alterar imagem 
AlterarImagem(){
    if(this.imagem === 'Julio.png'){
      this.imagem = 'Smiliguido.jpg';
    }else{this.imagem = 'Julio.png'}
  }


img:string='Vert.jpg'
  ImagemAlterar(){
    if(this.img === 'Vert.jpg'){
      this.img = 'Shirako.jpg';
    }else{this.img = 'vert.jpg'}
  }
}
