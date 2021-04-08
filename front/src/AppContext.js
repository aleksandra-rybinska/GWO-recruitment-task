import { createContext, useContext, useState } from "react";
import { useQuery } from "react-query";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { data, status } = useQuery("books", () =>
    fetch("http://localhost:3001/api/book").then((res) => {
      return res.json();
    })
  );
  const [cart, setCart] = useLocalStorage("cart", []);

  const addToCart = (clickedBook) => {
    setCart((old) => {
      const isBookInCart = old.find((book) => book.id === clickedBook.id);
      if (isBookInCart) {
        return old.map((book) =>
          book.id === clickedBook.id
            ? { ...book, quantity: book.quantity + 1 }
            : book
        );
      }
      return [...old, { ...clickedBook, quantity: 1 }];
    });
    console.log(cart);
  };

  const value = {
    books: data?.data || [],
    status,
    addToCart,
    cart,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export const useBooks = () => {
  return useContext(AppContext);
};

// Local storage hook: https://usehooks.com/useLocalStorage/?fbclid=IwAR0h5qXIzD8JAptCbqrKaFCbTsFQgROa7_f51GKzoCNjjYPQ7Ln9EurFcLs
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
