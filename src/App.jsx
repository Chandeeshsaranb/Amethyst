

import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";
import Home from "./components/Home/Home";
import MarchEdit from "./marchedit/MarchEdit";
import ProductDetail from "./marchedit/ProductDetails";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/march-edit" element={<MarchEdit />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;