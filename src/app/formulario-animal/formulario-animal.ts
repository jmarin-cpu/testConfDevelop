import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Animal } from '../Animales';

@Component({
  imports: [FormsModule],
  selector: 'app-formulario-animal',
  styleUrl: './formulario-animal.css',
  templateUrl: './formulario-animal.html',
})
export class FormularioAnimal {

nuevoAnimal = new Animal('', '', '', false, '');

guardarAnimal() {
  const animal = new Animal(
    this.nuevoAnimal._nombre,
    this.nuevoAnimal.tipo,
    this.nuevoAnimal.habitat,
    this.nuevoAnimal.hervivoro,
    this.nuevoAnimal.imagen
  );

  console.log('Animal creado:', animal);
  this.nuevoAnimal = new Animal('', '', '', false, '');
}
    

}
