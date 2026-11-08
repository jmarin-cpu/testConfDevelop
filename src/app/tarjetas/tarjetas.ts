import { Component } from '@angular/core';
import { Animal } from '../Animales';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-tarjetas',
  styleUrl: './tarjetas.css',
  templateUrl: './tarjetas.html',
})
export class Tarjetas {

 animales: Animal[] = [
    new Animal(
      'Perro',
      'Mamífero',
      'Doméstico',
      false,
      'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400'
    ),
    new Animal(
      'Gato',
      'Mamífero',
      'Doméstico',
      false,
      'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400'
    ),
    new Animal(
      'Tortuga',
      'Reptil',
      'Acuático/Terrestre',
      true,
      'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=400'
    )
  ];

  nuevoAnimal = new Animal('', '', '', false, '');

  agregarAnimal() {
    

    this.animales.push(
      new Animal(
        this.nuevoAnimal._nombre,
        this.nuevoAnimal.tipo,
        this.nuevoAnimal.habitat,
        this.nuevoAnimal.hervivoro,
        this.nuevoAnimal.imagen
      )
    );

    this.nuevoAnimal = new Animal('', '', '', false, '');
  }

}
