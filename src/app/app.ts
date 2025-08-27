import { Component, signal } from '@angular/core';
import { QuartoComponente } from "./quarto-componente/quarto-componente";
import { QuintoComponete } from "./quinto-componete/quinto-componete";
import { SextoComponente } from "./sexto-componente/sexto-componente";
import { SetimoCompomente } from "./setimo-compomente/setimo-compomente";
import { OitavoCompomente } from "./oitavo-compomente/oitavo-compomente";

@Component({
  selector: 'app-root',
  imports: [QuartoComponente, QuintoComponete, SextoComponente, SetimoCompomente, OitavoCompomente],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('segundo-componente');
}
