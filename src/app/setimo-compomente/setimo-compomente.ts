import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-setimo-compomente',
  imports: [CommonModule],
  templateUrl: './setimo-compomente.html',
  styleUrl: './setimo-compomente.css'
})
export class SetimoCompomente {

  condicao: boolean = true;

  lista: string[]=['Aprovado', 'Aprovado', 'Reprovado']



}
