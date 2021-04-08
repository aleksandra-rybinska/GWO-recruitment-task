import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppProvider } from "./AppContext";
import Homepage from "./components/Homepage";
import OrderForm from "./components/OrderForm";
import ShoppingCart from "./components/ShoppingCart";

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <AppProvider>
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route path="/shoppingCart">
                <ShoppingCart />
              </Route>
              <Route path="/orderForm">
                <OrderForm />
              </Route>
            </Switch>
          </AppProvider>
        </div>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
