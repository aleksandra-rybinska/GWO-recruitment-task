import { useBooks } from "../AppContext";
import Book from "./Book";
import styles from "./Books.module.css";

const Books = () => {
  const { books, status } = useBooks();

  return (
    <div>
      {status === "loading" && <div>Ładowanie danych...</div>}
      {status === "error" && <div>Błąd pobierania danych</div>}
      {status === "success" && (
        <div className={styles.container}>
          {books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Books;
