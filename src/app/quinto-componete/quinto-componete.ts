import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quinto-componete',
  imports: [CommonModule],
  templateUrl: './quinto-componete.html',
  styleUrl: './quinto-componete.css'
})
export class QuintoComponete {

  //vetor de nomes
  nome: string[] = ['ariane', 'Bruna', 'Caio','Denis'];

}
