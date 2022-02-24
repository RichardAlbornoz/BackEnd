// Definicion de clase
class Usuario {
    constructor(nombre, apellido, libros = [], mascotas = []) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(mascota) {
       this.mascotas.push(mascota);
    }

    getMascotas() {
        return this.mascotas.length;
    }

    addBook(book, autor) {
      this.libros.push({nombre: book, autor: autor});
    }

    getBooks() {
        return this.libros.map(libro => libro.nombre);
    }
}

// Mi objeto
const primerUsuario = new Usuario("Richard", "Albornoz",
[{nombre: "El Psicoanalista",autor: "John Katzenbach"}, {nombre:"El Código Da Vinci",autor: "Dan Brown"}],
["Perro", "Gato"])

// Mostrar nombre
console.log("Nombre completo:", primerUsuario.getFullName());

// Mostrar mascotas
console.log("Cantidad de mascotas:", primerUsuario.getMascotas());

// Mostrar libros
console.log("Libros leídos", primerUsuario.getBooks());