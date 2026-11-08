export class Animal {
  _nombre: string;
  private _tipo: string;
  _habitat: string;
  _hervivoro: boolean;
  _imagen: string;

  constructor(
    nombre: string,
    tipo: string,
    habitat: string,
    hervivoro: boolean,
    imagen: string
  ) {
    this._nombre = nombre;
    this._tipo = tipo;
    this._habitat = habitat;
    this._hervivoro = hervivoro;
    this._imagen = imagen;
  }

 // Getter y Setter de tipo
  get tipo(): string {
    return this._tipo;
  }

  set tipo(tipo: string) {
    this._tipo = tipo;
  }

  // Getter y Setter de habitat
  get habitat(): string {
    return this._habitat;
  }

  set habitat(habitat: string) {
    this._habitat = habitat;
  }

  // Getter y Setter de hervivoro
  get hervivoro(): boolean {
    return this._hervivoro;
  }

  set hervivoro(hervivoro: boolean) {
    this._hervivoro = hervivoro;
  }

  // Getter y Setter de imagen
  get imagen(): string {
    return this._imagen;
  }

  set imagen(imagen: string) {
    this._imagen = imagen;
  }



}