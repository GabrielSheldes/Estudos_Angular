import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-oitavo-compomente',
  imports: [CommonModule],
  templateUrl: './oitavo-compomente.html',
  styleUrl: './oitavo-compomente.css'
})
export class OitavoCompomente {
//lista
  lista: string[]=['aprovado', 'reprovado', 'aprovado'];
//média
  media: number = 8;
//laços de repetição
nomes: string[]=['weverton', 'Rafael Veiga', 'Flaco Lopez', 'Leila Pereira']

//linguagem 
linguagen: string ='JS'

}
