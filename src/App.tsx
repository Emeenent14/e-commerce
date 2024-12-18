import { AppContainer } from "App.styles";
import Cart from "components/Cart/Cart";
import Products from "components/ProductContainer/Products";

function App() {
  return (
    <AppContainer>
      <Products />
      <Cart />
    </AppContainer>
  );
}

export default App;
