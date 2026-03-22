let books = [
  { title: "Atomic Habits", author: "James Clear", year: 2018, rating: 4.8 },
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988, rating: 4.2 },
  { title: "Clean Code", author: "Robert C. Martin", year: 2008, rating: 4.7 },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    year: 1997,
    rating: 4.6,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    year: 1999,
    rating: 4.4,
  },
];
let bookTitles = books.map((book) => book.title);

console.log("Book Titles:");
console.log(bookTitles);

let highRatedBooks = books.filter((book) => book.rating >= 4.5);

console.log("Books with rating >= 4.5:");
console.log(highRatedBooks);
