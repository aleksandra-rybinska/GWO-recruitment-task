import { Link } from "react-router-dom";
import { useBooks } from "../AppContext";
import styles from "./CartTotal.module.css";
import buttons from "./Buttons.module.css";

const CartTotal = () => {
  const { cart } = useBooks();

  return (
    <div className={styles.container}>
      <h3>Suma produktów:</h3>
      <h2>
        {cart
          .reduce((acc, book) => acc + (book.price * book.quantity) / 100, 0)
          .toFixed(2)}{" "}
        PLN
      </h2>
      <Link className={buttons.navBtn} to="/orderForm">
        Dalej
      </Link>
    </div>
  );
};

export default CartTotal;
