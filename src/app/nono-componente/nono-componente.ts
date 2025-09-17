import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';

@Component({
  selector: 'app-nono-componente',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule,],
  templateUrl: './nono-componente.html',
  styleUrl: './nono-componente.css'
})
export class NonoComponente {
//Objeto de formulario 
  formulario = new FormGroup({
  nome: new FormControl ('',[Validators.required, Validators.minLength(3)]),
  cidade: new FormControl('',[Validators.required, Validators.minLength(3)]),
  idade: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)])
});

btnCadastrar: boolean = true;

vetor: Pessoa[] = [];

cadastrar(){
  this.vetor.push(this.formulario.value as Pessoa);

  this.formulario.reset();

  console.table(this.vetor);
}
// armazenar o indice da pessoa selecionada
indice: number = -1;

selecionar(indice: number){ 
    //atribuir o indice da pessao
    this.indice = indice;

    //atribuir os dados da pessoa ao formulario
    this.formulario.setValue({
      nome: this.vetor[indice].nome,
      idade: this.vetor[indice].idade,
      cidade: this.vetor[indice].cidade
    });
    // alterar o estado do botao
    this.btnCadastrar = false;

  } 
}
