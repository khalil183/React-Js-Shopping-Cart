import Cart from "./components/Cart";
import Product from "./components/Product";
import Test from "./components/Test";
import ProductContextProvider from "./contexts/Product";

function App() {
  return (
    <div className="container-fluid">
      <ProductContextProvider>
        <h1 className="text-center">Simple Shopping Cart Using React Js</h1>
        <div className="row mt-4">
          <div className="col-md-7">
            <Product/>
          </div>

          <div className="col-md-5">
            <Cart/>
          </div>
        </div>
      </ProductContextProvider>
    </div>
  );
}

export default App;
