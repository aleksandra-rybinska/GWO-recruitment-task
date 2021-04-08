import { Link } from "react-router-dom";

const OrderForm = () => {
  return (
    <div>
      <div>
        <h1>Formularz zamówienia</h1>
        <Link to="/shoppingCart">Wróć do koszyka</Link>
        <Link to="/">Wróć do strony głównej</Link>
      </div>
      <form>
        <div>
          <label>Imię:</label>
          <input name="first_name" type="text" />
          <label>Nazwisko:</label>
          <input name="last_name" type="text" />
          <label>Miejscowość:</label>
          <input name="city" type="text" />
          <label>Kod pocztowy:</label>
          <input name="zip_code" type="text" />
        </div>
        <button>Zamawiam i płacę</button>
      </form>
    </div>
  );
};

export default OrderForm;
