import { Link } from "react-router-dom";
import { useBooks } from "../AppContext";

const Homepage = () => {
  const { books, status } = useBooks();
  return (
    <>
      <div>
        <h1>Strona główna</h1>
        <Link to="/shoppingCart">Koszyk</Link>
        {status === "loading" && <div>Ładowanie danych...</div>}
        {status === "error" && <div>Błąd pobierania danych</div>}
        {status === "success" && (
          <div>
            {books.map((book) => (
              <p>{book.id}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default Homepage;
