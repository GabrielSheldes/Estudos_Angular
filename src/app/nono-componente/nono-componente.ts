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
  idade: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
  sexo: new FormControl('',[Validators.required]),
  estado: new FormControl('',[Validators.required, Validators.minLength(2)]),
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
      cidade: this.vetor[indice].cidade,
      sexo: this.vetor[indice].sexo,
      estado: this.vetor[indice].estado
    });
    // alterar o estado do botao
    this.btnCadastrar = false;
  } 
//Função de alteração
alterar(){
  this.vetor[this.indice] = this.formulario.value as Pessoa;

  //limpar os imputs
  this.formulario.reset();

  //Visibilidades de botões
  this.btnCadastrar = true;
}
remover(){
  //removendo pessoa do vetor 
  this.vetor.splice(this.indice, 1);

  //limpeza dos imputs
  this.formulario.reset();

  //visibilidade dos botões
  this.btnCadastrar = true;

}

  //botão de cancelamento
cancelar(){

  //limpeza dos imputs
  this.formulario.reset();

  //visibilidade dos botões
  this.btnCadastrar = true;

  };
}
