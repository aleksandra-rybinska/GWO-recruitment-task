import { createContext, useContext } from "react";
import { useQuery } from "react-query";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { data, status } = useQuery("books", () =>
    fetch("http://localhost:3001/api/book").then((res) => {
      return res.json();
    })
  );

  const value = {
    books: data?.data || [],
    status,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export const useBooks = () => {
  return useContext(AppContext);
};
