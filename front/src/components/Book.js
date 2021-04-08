const Book = ({ book }) => {
  return (
    <div>
      <img src={book.cover_url} alt={book.title} />

      <h3>{book.title}</h3>
      <p>Autor: {book.author}</p>
      <p>Liczba stron: {book.pages}</p>
      <p>
        Cena: {(book.price / 100).toFixed(2)} {book.currency}
      </p>
      <button>Dodaj do koszyka</button>
    </div>
  );
};

export default Book;
