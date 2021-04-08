import { Link } from "react-router-dom";

import Books from "./Books";

const Homepage = () => {
  return (
    <>
      <div>
        <h1>Strona główna</h1>
        <Link to="/shoppingCart">Koszyk</Link>
      </div>
      <Books />
    </>
  );
};
export default Homepage;
