import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import OrderForm from "./components/OrderForm";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <Router>
      <div className="App">
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
      </div>
    </Router>
  );
}

export default App;
