import { Link } from "react-router-dom";
import { useBooks } from "../AppContext";
import { useState } from "react";
import styles from "./OrderForm.module.css";
import buttons from "./Buttons.module.css";

const OrderForm = () => {
  const { cart } = useBooks();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    city: "",
    zip_code: "",
  });
  const [errors, setErrors] = useState({});

  const validateConditions = {
    first_name: (value) => value.length > 2,
    last_name: (value) => value.length > 2,
    city: (value) => value.length > 2,
    zip_code: (value) => value.length === 6 && value.indexOf("-") === 2,
  };

  const updateField = (e) => {
    const { name, value } = e.target;

    if (validateConditions[name](value) === false) {
      setErrors((existing) => ({
        ...existing,
        [name]: true,
      }));
      e.target.style.border = "1px solid #dd1818";
    } else {
      setErrors((existing) => ({
        ...existing,
        [name]: false,
      }));
      e.target.style.border = "1px solid #858585";
    }

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errors).some((v) => v === true)) {
      console.log("error");
      return;
    }

    fetch("http://localhost:3001/api/order", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        ...form,
        order: cart.map(({ id, quantity }) => ({ id, quantity })),
      }),
    });

    alert("zamówienie przyjęte do realizacji");
  };

  return (
    <div>
      <div className={styles.header}>
        <h1>Formularz zamówienia</h1>
        <Link className={buttons.navBtn} to="/shoppingCart">
          Wróć do koszyka
        </Link>
        <Link className={buttons.navBtn} to="/">
          Wróć do strony głównej
        </Link>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.formGrid} onSubmit={handleSubmit}>
          <label>Imię:</label>
          <input name="first_name" type="text" onChange={updateField} />
          <label>Nazwisko:</label>
          <input name="last_name" type="text" onChange={updateField} />
          <label>Miejscowość:</label>
          <input name="city" type="text" onChange={updateField} />
          <label>Kod pocztowy:</label>
          <input name="zip_code" type="text" onChange={updateField} />

          <button className={`${buttons.redBtn} ${styles.submitBtn}`}>
            Zamawiam i płacę
          </button>
        </form>
        <div className={styles.errorMsg}>
          {errors.first_name && (
            <p className={styles.firstName}>Imię jest za krótkie</p>
          )}
          {errors.last_name && (
            <p className={styles.lastName}>Nazwisko jest za krótkie</p>
          )}
          {errors.city && <p className={styles.city}>Miasto jest za krótkie</p>}
          {errors.zip_code && (
            <p className={styles.zipCode}>Poprawny format: XX-XXX</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
