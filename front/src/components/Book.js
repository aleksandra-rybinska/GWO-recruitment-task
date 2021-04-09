import "../../src/index.css";
import { useBooks } from "../AppContext";
import styles from "./Book.module.css";
import buttons from "./Buttons.module.css";

const Book = ({ book }) => {
  const { addToCart } = useBooks();
  return (
    <div className={styles.bookContainer}>
      <img className={styles.img} src={book.cover_url} alt={book.title} />

      <h3 className={styles.title}>{book.title}</h3>
      <p className={styles.author}>Autor: {book.author}</p>
      <p className={styles.pages}>Liczba stron: {book.pages}</p>
      <p className={styles.price}>
        Cena: {(book.price / 100).toFixed(2)} {book.currency}
      </p>
      <button
        onClick={() => addToCart(book)}
        className={(styles.btn, buttons.redBtn)}
      >
        Dodaj do koszyka
      </button>
    </div>
  );
};

export default Book;
