import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-nono-componente',
  imports: [FormsModule, CommonModule, FormGroup, ReactiveFormsModule,FormControl],
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
}
