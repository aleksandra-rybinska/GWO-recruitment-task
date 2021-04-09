import { useBooks } from "../AppContext";
import buttons from "./Buttons.module.css";

const Badge = () => {
  const { cart } = useBooks();
  const getTotalItems = (books) =>
    books.reduce((acc, book) => acc + book.quantity, 0);
  return (
    <div>
      <p className={buttons.badge}>{getTotalItems(cart)}</p>
    </div>
  );
};
export default Badge;
