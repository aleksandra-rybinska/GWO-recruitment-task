import { useBooks } from "../AppContext";
import styles from "./CartBook.module.css";

const CartBook = ({ book }) => {
  const { addToCart } = useBooks();

  return (
    <div className={styles.content}>
      <img src={book.cover_url} alt={book.title} className={styles.img} />
      <div className={styles.description}>
        <h3>{book.title}</h3>
        <p>Autor: {book.author}</p>
        <p>Liczba stron: {book.pages}</p>
        <p>
          Cena za szt: {(book.price / 100).toFixed(2)} {book.currency}
        </p>
      </div>
      <div className={styles.amountBtnContainer}>
        <button className={styles.amountBtn} disabled={book.quantity <= 1}>
          -
        </button>
        <p>{book.quantity}</p>
        <button className={styles.amountBtn}>+</button>
      </div>
      <p className={styles.price}>
        Łącznie: {((book.quantity * book.price) / 100).toFixed(2)}{" "}
        {book.currency}
      </p>
      <button className={styles.removeBtn}>usuń produkt</button>
    </div>
  );
};

export default CartBook;
