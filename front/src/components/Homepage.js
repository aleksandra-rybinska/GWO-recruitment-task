import { Link } from "react-router-dom";
import { useBooks } from "../AppContext";
import Books from "./Books";
import Badge from "./Badge";
import buttons from "./Buttons.module.css";
import styles from "./Homepage.module.css";

const Homepage = () => {
  const { cart } = useBooks();
  return (
    <>
      <div className={styles.header}>
        <h1>Strona główna</h1>
        <Link className={buttons.navBtn} to="/shoppingCart">
          Koszyk
          {cart.length !== 0 && <Badge />}
        </Link>
      </div>
      <Books />
    </>
  );
};
export default Homepage;
