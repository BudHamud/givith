class Usuario {
  constructor(nombre, apellido, libro, autor, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [
      {
        nombreLibro: libro,
        autorLibro: autor,
      },
    ];
    this.mascotas = [mascotas];
  }
  getFullName() {
    console.log(this.nombre, this.apellido);
  }
  addMascota(a) {
    this.mascotas.push(a);
    console.log(this.mascotas);
  }
  countMascota() {
    console.log(this.mascotas.length);
  }
  addBook(a, b) {
    let object = { nombreLibro: a, autorLibro: b };
    this.libros.push(object);
  }
  getBookNames() {
    let arr = [];
    for (let i = 0; i < this.libros.length; i++) {
      arr.push(this.libros[i].nombreLibro);
    }
    console.log(arr);
  }
}

const carlos = new Usuario("Carlos", "Gardel", "Gioconda", "Da Vinci", "Lola");

carlos.getFullName();
carlos.addMascota("Pepo");
carlos.countMascota();
carlos.addBook("Cien años de soledad", "Gabriel Garcia Marquez");
carlos.getBookNames();