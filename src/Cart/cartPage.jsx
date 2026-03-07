// import React, { useState } from "react";
// import CartProducts from "../Cart/cartProducts";
// import CartCheckout from "../Cart/cartCheckout";

// export default function cartPage() {
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: "Navitha Stone Necklace",
//       price: 19000,
//       quantity: 1,
//       image: "/products/p1-1.jpg.webp",
//     },
//     {
//       id: 2,
//       name: "Dheshka Nagas Choker",
//       price: 91000,
//       quantity: 1,
//       image: "/products/p2-1.jpg",
//     },
//     {
//       id: 3,
//       name: "Nithika Nagas Short Necklace",
//       price: 68000,
//       quantity: 1,
//       image: "/products/p3-1.jpg",
//     },
//     {
//       id: 4,
//       name: "Mahita Stone Ring",
//       price: 3850,
//       quantity: 1,
//       image: "/products/p4-1.jpg",
//     },
//     {
//       id: 5,
//       name: "Isvari Stone Jhumkas",
//       price: 5200,
//       quantity: 1,
//       image: "/products/p5-1.jpg",
//     },
//   ]);

//   const handleIncrease = (id) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   const handleDecrease = (id) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === id
//           ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
//           : item
//       )
//     );
//   };

//   const handleRemove = (id) => {
//     setCartItems((prev) => prev.filter((item) => item.id !== id));
//   };

//   const page = {
//     maxWidth: "1400px",
//     margin: "0 auto",
//     padding: "40px 28px 60px",
//     boxSizing: "border-box",
//   };

//   const layout = {
//     display: "grid",
//     gridTemplateColumns: "1fr 360px",
//     gap: "60px",
//     alignItems: "start",
//   };

//   return (
//     <div style={page}>
//       <div style={layout}>
//         <CartProducts
//           cartItems={cartItems}
//           onIncrease={handleIncrease}
//           onDecrease={handleDecrease}
//           onRemove={handleRemove}
//         />

//         <CartCheckout cartItems={cartItems} />
//       </div>
//     </div>
//   );
// }


// import React, { useState, useEffect } from "react";
// import CartProducts from "../Cart/cartProducts";
// import CartCheckout from "../Cart/cartCheckout";

// export default function cartPage() {
//   const [cartItems, setCartItems] = useState([]);

//   // Load cart items from localStorage
//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
//     setCartItems(savedCart);
//   }, []);

//   const updateCart = (updatedCart) => {
//     setCartItems(updatedCart);
//     localStorage.setItem("cartItems", JSON.stringify(updatedCart));
//   };

//   const handleIncrease = (id) => {
//     const updatedCart = cartItems.map((item) =>
//       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//     );

//     updateCart(updatedCart);
//   };

//   const handleDecrease = (id) => {
//     const updatedCart = cartItems.map((item) =>
//       item.id === id
//         ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
//         : item
//     );

//     updateCart(updatedCart);
//   };

//   const handleRemove = (id) => {
//     const updatedCart = cartItems.filter((item) => item.id !== id);
//     updateCart(updatedCart);
//   };

//   const page = {
//     maxWidth: "1400px",
//     margin: "0 auto",
//     padding: "40px 28px 60px",
//     boxSizing: "border-box",
//   };

//   const layout = {
//     display: "grid",
//     gridTemplateColumns: "1fr 360px",
//     gap: "60px",
//     alignItems: "start",
//   };

//   return (
//     <div style={page}>
//       <div style={layout}>
//         <CartProducts
//           cartItems={cartItems}
//           onIncrease={handleIncrease}
//           onDecrease={handleDecrease}
//           onRemove={handleRemove}
//         />

//         <CartCheckout cartItems={cartItems} />
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import CartProducts from "../Cart/cartProducts";
import CartCheckout from "../Cart/cartCheckout";

export default function cartPage() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const handleIncrease = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );

    updateCart(updatedCart);
  };

  const handleDecrease = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    );

    updateCart(updatedCart);
  };

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    updateCart(updatedCart);
  };

  const page = {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "40px 28px 60px",
    boxSizing: "border-box",
    minHeight: "100vh",
    overflowY: "auto",
  };

  const layout = {
    display: "grid",
    gridTemplateColumns: "1fr 360px",
    gap: "60px",
    alignItems: "start",
  };

  // Scroll container for products
  const productsScroll = {
    maxHeight: "80vh",
    overflowY: "auto",
    paddingRight: "10px",
  };

  return (
    <div style={page}>
      <div style={layout}>
        <div style={productsScroll}>
          <CartProducts
            cartItems={cartItems}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            onRemove={handleRemove}
          />
        </div>

        <CartCheckout cartItems={cartItems} />
      </div>
    </div>
  );
}