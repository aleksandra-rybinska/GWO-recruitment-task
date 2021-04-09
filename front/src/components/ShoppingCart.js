import { useBooks } from "../AppContext";
import { Link } from "react-router-dom";
import CartBook from "./CartBook";
import CartTotal from "./CartTotal";
import styles from "./ShoppingCart.module.css";
import buttons from "./Buttons.module.css";

const ShoppingCart = () => {
  const { books, cart } = useBooks();

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h1>Koszyk</h1>
        <Link className={buttons.navBtn} to="/">
          Wróć do strony głównej
        </Link>
      </div>
      {cart.length === 0 && <p className={styles.empty}>Koszyk jest pusty</p>}
      <div className={styles.container}>
        <div>
          {cart.map((book) => (
            <CartBook key={book.id} book={book} />
          ))}
        </div>
        <div>{cart.length !== 0 && <CartTotal />}</div>
      </div>
    </div>
  );
};

export default ShoppingCart;
