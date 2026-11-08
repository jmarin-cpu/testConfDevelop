import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tarjetas } from './tarjetas/tarjetas';
import { FormularioAnimal } from './formulario-animal/formulario-animal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Tarjetas,FormularioAnimal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prueba');
}
