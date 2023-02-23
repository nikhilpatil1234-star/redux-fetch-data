import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="*" element={<h1> error</h1>} />
      </Routes>
    </div>
  );
}

export default App;
