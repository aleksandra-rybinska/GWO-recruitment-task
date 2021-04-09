import CartBook from "./CartBook";
import { useBooks } from "../AppContext";
import { Link } from "react-router-dom";

import styles from "./ShoppingCart.module.css";
import buttons from "./Buttons.module.css";

const ShoppingCart = () => {
  const { books, cart } = useBooks();
  console.log("shoppingCart books", books);

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h1>Koszyk</h1>
        <Link className={buttons.navBtn} to="/">
          Wróć do strony głównej
        </Link>
      </div>

      <div className={styles.container}>
        <div>
          {cart.map((book) => (
            <CartBook key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
