

import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";
import Home from "./components/Home/Home";
import MarchEdit from "./marchedit/MarchEdit";
import ProductDetail from "./marchedit/ProductDetails";
import CartPage from "./Cart/cartPage";
import PaymentPage from "./Cart/PaymentPage";
import Login from "./auth/Login";

import AdminPage from "./Admin/AdminPage";

import OtpPage from "./auth/otpPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/march-edit" element={<MarchEdit />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />

        {/* Payment */}
        <Route path="/payment" element={<PaymentPage />} />   {/* ✅ Added */}
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OtpPage />} />

        {/* Admin Page */}
        <Route path="/admin" element={<AdminPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;