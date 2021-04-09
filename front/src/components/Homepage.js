import { Link } from "react-router-dom";
import Books from "./Books";
import buttons from "./Buttons.module.css";
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <>
      <div className={styles.header}>
        <h1>Strona główna</h1>
        <Link className={buttons.navBtn} to="/shoppingCart">
          Koszyk
        </Link>
      </div>
      <Books />
    </>
  );
};
export default Homepage;
