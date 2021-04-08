import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div>
        <h1>Strona główna</h1>
        <Link to="/shoppingCart">Koszyk</Link>
      </div>
    </>
  );
};

export default Homepage;
