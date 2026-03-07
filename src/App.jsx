

// import { Routes, Route } from "react-router-dom";
// import "./App.css";

// import Header from "./Navigation/Header";
// import Footer from "./Navigation/Footer";
// import Home from "./components/Home/Home";
// import MarchEdit from "./marchedit/MarchEdit";
// import ProductDetail from "./marchedit/ProductDetails";

// function App() {
//   return (
//     <>
//       <Header />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/march-edit" element={<MarchEdit />} />
//         <Route path="/product/:slug" element={<ProductDetail />} />
//       </Routes>

//       <Footer />
//     </>
//   );
// }

// export default App;


// import { Routes, Route } from "react-router-dom";
// import "./App.css";

// import Header from "./Navigation/Header";
// import Footer from "./Navigation/Footer";
// import Home from "./components/Home/Home";
// import MarchEdit from "./marchedit/MarchEdit";
// import ProductDetail from "./marchedit/ProductDetails";
// import CartPage from "./Cart/cartPage";

// function App() {
//   return (
//     <>
//       <Header />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/march-edit" element={<MarchEdit />} />
//         <Route path="/product/:slug" element={<ProductDetail />} />
//         <Route path="/cart" element={<CartPage />} />
//       </Routes>

//       <Footer />
//     </>
//   );
// }

// export default App;



// import { Routes, Route } from "react-router-dom";
// import "./App.css";

// import Header from "./Navigation/Header";
// import Footer from "./Navigation/Footer";
// import Home from "./components/Home/Home";
// import MarchEdit from "./marchedit/MarchEdit";
// import ProductDetail from "./marchedit/ProductDetails";
// import CartPage from "./Cart/cartPage";

// import Register from "./auth/Register";
// import Login from "./auth/Login";

// import AdminPage from "./Admin/AdminPage";

// function App() {
//   return (
//     <>
//       <Header />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/march-edit" element={<MarchEdit />} />
//         <Route path="/product/:slug" element={<ProductDetail />} />
//         <Route path="/cart" element={<CartPage />} />

//         {/* Auth pages */}
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />

//         {/* Admin Page */}
//         <Route path="/admin" element={<AdminPage />} />
//       </Routes>

//       <Footer />
//     </>
//   );
// }

// export default App;



import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";
import Home from "./components/Home/Home";
import MarchEdit from "./marchedit/MarchEdit";
import ProductDetail from "./marchedit/ProductDetails";
import CartPage from "./Cart/cartPage";
import PaymentPage from "./Cart/PaymentPage";

import Register from "./auth/Register";
import Login from "./auth/Login";

import AdminPage from "./Admin/AdminPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/march-edit" element={<MarchEdit />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />

        {/* Payment */}
        <Route path="/payment" element={<PaymentPage />} />   {/* ✅ Added */}

        {/* Auth pages */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Page */}
        <Route path="/admin" element={<AdminPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;