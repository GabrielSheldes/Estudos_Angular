import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nono-componente',
  imports: [FormsModule, CommonModule],
  templateUrl: './nono-componente.html',
  styleUrl: './nono-componente.css'
})
export class NonoComponente {
//Inclusão de duas variaves 
  nome: string;
  cidade: string;
  idade: number= null;

}
