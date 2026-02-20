const mongoose = require("mongoose");

const Book = require("../models/book.model");

const libros = [
  { "title": "Don Quijote de la Mancha", "author": "Miguel de Cervantes" },
  { "title": "1984", "author": "George Orwell", "year": 1949, "publisher": "Secker & Warburg" },
  { "title": "Cien años de soledad", "author": "Gabriel García Márquez", "year": 1967, "isbn": "978-0307474728" },
  { "title": "El Señor de los Anillos", "author": "J.R.R. Tolkien", "publisher": "George Allen & Unwin", "isbn": "978-0261103252" },
  { "title": "Fahrenheit 451", "author": "Ray Bradbury", "year": 1953 },
  { "title": "Dune", "author": "Frank Herbert", "year": 1965, "publisher": "Chilton Books", "isbn": "978-0441172719" },
  { "title": "La sombra del viento", "author": "Carlos Ruiz Zafón", "year": 2001, "publisher": "Planeta" },
  { "title": "Orgullo y prejuicio", "author": "Jane Austen" },
  { "title": "Matar a un ruiseñor", "author": "Harper Lee", "year": 1960 },
  { "title": "El principito", "author": "Antoine de Saint-Exupéry", "publisher": "Reynal & Hitchcock", "year": 1943 },
  { "title": "Un mundo feliz", "author": "Aldous Huxley", "isbn": "978-0060850524" },
  { "title": "Crónica de una muerte anunciada", "author": "Gabriel García Márquez", "year": 1981 },
  { "title": "El nombre de la rosa", "author": "Umberto Eco", "year": 1980, "publisher": "Bompiani" },
  { "title": "Rayuela", "author": "Julio Cortázar", "year": 1963 },
  { "title": "Los pilares de la Tierra", "author": "Ken Follett", "year": 1989, "isbn": "978-0451166890" },
  { "title": "Crimen y castigo", "author": "Fiódor Dostoyevski" },
  { "title": "Fundación", "author": "Isaac Asimov", "publisher": "Gnome Press", "year": 1951 },
  { "title": "Neuromante", "author": "William Gibson", "year": 1984, "isbn": "978-0441569595" },
  { "title": "La metamorfosis", "author": "Franz Kafka" },
  { "title": "El retrato de Dorian Gray", "author": "Oscar Wilde", "year": 1890 },
  { "title": "Ensayo sobre la ceguera", "author": "José Saramago", "year": 1995, "publisher": "Caminho" },
  { "title": "La chica del tren", "author": "Paula Hawkins", "isbn": "978-0857522313" },
  { "title": "El código Da Vinci", "author": "Dan Brown", "year": 2003, "publisher": "Doubleday" },
  { "title": "Drácula", "author": "Bram Stoker", "year": 1897 },
  { "title": "Frankenstein", "author": "Mary Shelley" },
  { "title": "Guerra y paz", "author": "León Tolstói", "year": 1869 },
  { "title": "Pedro Páramo", "author": "Juan Rulfo", "year": 1955, "publisher": "Fondo de Cultura Económica" },
  { "title": "Ficciones", "author": "Jorge Luis Borges", "year": 1944 },
  { "title": "El alquimista", "author": "Paulo Coelho", "year": 1988, "isbn": "978-0061122415" },
  { "title": "Moby Dick", "author": "Herman Melville", "publisher": "Richard Bentley" },
  { "title": "Las aventuras de Alicia en el país de las maravillas", "author": "Lewis Carroll", "year": 1865 },
  { "title": "El hobbit", "author": "J.R.R. Tolkien", "year": 1937, "publisher": "George Allen & Unwin" },
  { "title": "La Odisea", "author": "Homero" },
  { "title": "Los miserables", "author": "Victor Hugo", "year": 1862 },
  { "title": "El conde de Montecristo", "author": "Alexandre Dumas", "year": 1844, "publisher": "Pétion" },
  { "title": "Lolita", "author": "Vladimir Nabokov", "year": 1955 },
  { "title": "El gran Gatsby", "author": "F. Scott Fitzgerald", "year": 1925, "isbn": "978-0743273565" },
  { "title": "El cuento de la criada", "author": "Margaret Atwood", "year": 1985, "publisher": "McClelland and Stewart" },
  { "title": "La insoportable levedad del ser", "author": "Milan Kundera", "year": 1984 },
  { "title": "El niño con el pijama de rayas", "author": "John Boyne", "year": 2006, "isbn": "978-0385751537" },
  { "title": "Harry Potter y la piedra filosofal", "author": "J.K. Rowling", "publisher": "Bloomsbury", "year": 1997 },
  { "title": "Rebelión en la granja", "author": "George Orwell" },
  { "title": "Jane Eyre", "author": "Charlotte Brontë", "year": 1847 },
  { "title": "Cumbres borrascosas", "author": "Emily Brontë", "publisher": "Thomas Cautley Newby" },
  { "title": "El Aleph", "author": "Jorge Luis Borges", "year": 1949 },
  { "title": "Sapiens: De animales a dioses", "author": "Yuval Noah Harari", "year": 2011, "isbn": "978-0062316097" },
  { "title": "Los juegos del hambre", "author": "Suzanne Collins", "year": 2008, "publisher": "Scholastic" },
  { "title": "A sangre fría", "author": "Truman Capote", "year": 1966 },
  { "title": "El perfume", "author": "Patrick Süskind", "year": 1985, "publisher": "Diogenes", "isbn": "978-0140120837" },
  { "title": "El resplandor", "author": "Stephen King", "year": 1977, "publisher": "Doubleday" }
];

const librosToBook = libros.map(libro => new Book(libro));

mongoose.connect("mongodb://localhost:27017/proyecto5-noSQL")
.then(async() => {
    const allBooks = await Book.find();
    if(allBooks.length) {
        await Book.collection.drop();
    };
})
.catch((error) => console.error("Error borrando los libros.", error))
.then(async() => {
    await Book.insertMany(librosToBook);
})
.catch((error) => console.error("Error insertando los libros.", error))
.finally(() => mongoose.disconnect());