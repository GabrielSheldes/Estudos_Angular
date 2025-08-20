import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sexto-componente',
  imports: [CommonModule],
  templateUrl: './sexto-componente.html',
  styleUrl: './sexto-componente.css'
})
export class SextoComponente {
  //Variavel Contendo uma liguagem de programação
  linguagem: string= 'HTML';


}
