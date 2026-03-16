
// // // import React, { useEffect, useMemo, useState } from "react";
// // // import Filter from "../marchedit/Filter";
// // // import MainPage from "../marchedit/MainPage";

// // // export default function MarchEdit() {
// // //   const [productsFromStorage, setProductsFromStorage] = useState([]);
// // //   const [selectedFilters, setSelectedFilters] = useState({});
// // //   const [priceRange, setPriceRange] = useState(0);

// // //   useEffect(() => {
// // //     const storedProducts = JSON.parse(
// // //       localStorage.getItem("adminProducts") || "[]"
// // //     );

// // //     const normalizedProducts = storedProducts.map((item) => ({
// // //       id: item.id,
// // //       name: item.name || "",
// // //       code: item.productCode || "",
// // //       price: Number(item.price || 0),
// // //       description: item.description || "",
// // //       images: Array.isArray(item.images) ? item.images : [],
// // //       createdAt: item.createdAt || "",
// // //       categories: item.categories || {},
// // //     }));

// // //     setProductsFromStorage(normalizedProducts);

// // //     const maxStoredPrice =
// // //       normalizedProducts.length > 0
// // //         ? Math.max(...normalizedProducts.map((p) => p.price))
// // //         : 0;

// // //     setPriceRange(maxStoredPrice);
// // //   }, []);

// // //   const maxPrice = useMemo(() => {
// // //     if (productsFromStorage.length === 0) return 0;
// // //     return Math.max(...productsFromStorage.map((p) => p.price));
// // //   }, [productsFromStorage]);

// // //   const filteredProducts = useMemo(() => {
// // //     return productsFromStorage.filter((product) => {
// // //       const matchPrice = product.price <= priceRange;

// // //       const matchDynamicFilters = Object.entries(selectedFilters).every(
// // //         ([categoryName, selectedValues]) => {
// // //           if (!selectedValues || selectedValues.length === 0) return true;

// // //           const productValues = product?.categories?.[categoryName] || [];

// // //           return selectedValues.some((value) => productValues.includes(value));
// // //         }
// // //       );

// // //       return matchPrice && matchDynamicFilters;
// // //     });
// // //   }, [productsFromStorage, selectedFilters, priceRange]);

// // //   const page = {
// // //     display: "flex",
// // //     width: "100%",
// // //     minHeight: "100vh",
// // //     background: "#fff",
// // //   };

// // //   return (
// // //     <div style={page}>
// // //       <Filter
// // //         products={productsFromStorage}
// // //         selectedFilters={selectedFilters}
// // //         setSelectedFilters={setSelectedFilters}
// // //         priceRange={priceRange}
// // //         setPriceRange={setPriceRange}
// // //         maxPrice={maxPrice}
// // //       />

// // //       <MainPage products={filteredProducts} />
// // //     </div>
// // //   );
// // // }



// // import React, { useEffect, useMemo, useState } from "react";
// // import Filter from "../marchedit/Filter";
// // import MainPage from "../marchedit/MainPage";

// // export default function MarchEdit() {
// //   const [productsFromStorage, setProductsFromStorage] = useState([]);
// //   const [selectedFilters, setSelectedFilters] = useState({});
// //   const [priceRange, setPriceRange] = useState(0);

// //   const loadProducts = () => {
// //     const storedProducts = JSON.parse(
// //       localStorage.getItem("adminProducts") || "[]"
// //     );

// //     const normalized = storedProducts.map((item) => ({
// //       ...item,
// //       slug:        item.slug,
// //       name:        item.name || "",
// //       price:       Number(item.totalPrice || item.price || 0),
// //       stock:       Number(item.stock || 0),
// //       images:      Array.isArray(item.images) ? item.images : [],
// //       createdAt:   item.createdAt || "",
// //       // flat filter fields — these come directly from the admin product form
// //       category:    item.category  || "",
// //       metalType:   item.metalType || "",
// //       purity:      item.purity    || "",
// //     }));

// //     setProductsFromStorage(normalized);

// //     const maxStoredPrice =
// //       normalized.length > 0
// //         ? Math.max(...normalized.map((p) => p.price))
// //         : 0;

// //     setPriceRange(maxStoredPrice);
// //   };

// //   useEffect(() => {
// //     loadProducts();
// //     window.addEventListener("storage", loadProducts);
// //     window.addEventListener("adminProductsUpdated", loadProducts);
// //     return () => {
// //       window.removeEventListener("storage", loadProducts);
// //       window.removeEventListener("adminProductsUpdated", loadProducts);
// //     };
// //   }, []);

// //   const maxPrice = useMemo(() => {
// //     if (productsFromStorage.length === 0) return 0;
// //     return Math.max(...productsFromStorage.map((p) => p.price));
// //   }, [productsFromStorage]);

// //   // Filter field map — matches Filter.jsx's derivedFilters keys to product fields
// //   const filterFieldMap = {
// //     Category: "category",
// //     Metal:    "metalType",
// //     Purity:   "purity",
// //   };

// //   const filteredProducts = useMemo(() => {
// //     return productsFromStorage.filter((product) => {
// //       // Price filter
// //       const matchPrice = product.price <= priceRange;

// //       // Checkbox filters — each selected section must have at least one match
// //       const matchFilters = Object.entries(selectedFilters).every(
// //         ([sectionName, selectedValues]) => {
// //           if (!selectedValues || selectedValues.length === 0) return true;
// //           const field = filterFieldMap[sectionName];
// //           if (!field) return true;
// //           const productValue = (product[field] || "").trim().toLowerCase();
// //           return selectedValues.some(
// //             (v) => v.trim().toLowerCase() === productValue
// //           );
// //         }
// //       );

// //       return matchPrice && matchFilters;
// //     });
// //   }, [productsFromStorage, selectedFilters, priceRange]);

// //   const page = {
// //     display: "flex",
// //     width: "100%",
// //     minHeight: "100vh",
// //     background: "#fff",
// //   };

// //   return (
// //     <div style={page}>
// //       <Filter
// //         products={productsFromStorage}   // full list so filter counts are accurate
// //         selectedFilters={selectedFilters}
// //         setSelectedFilters={setSelectedFilters}
// //         priceRange={priceRange}
// //         setPriceRange={setPriceRange}
// //         maxPrice={maxPrice}
// //       />

// //       <MainPage products={filteredProducts} />  {/* filtered list for display */}
// //     </div>
// //   );
// // }



// import React, { useEffect, useMemo, useState } from "react";
// import Filter from "../marchedit/Filter";
// import MainPage from "../marchedit/MainPage";

// export default function MarchEdit() {
//   const [productsFromStorage, setProductsFromStorage] = useState([]);
//   const [selectedFilters, setSelectedFilters] = useState({});
//   const [priceRange, setPriceRange] = useState(0);

//   const loadProducts = () => {
//     const storedProducts = JSON.parse(
//       localStorage.getItem("adminProducts") || "[]"
//     );

//     const normalized = storedProducts.map((item) => ({
//       ...item,
//       slug:      item.slug,
//       name:      item.name      || "",
//       price:     Number(item.totalPrice || item.price || 0),
//       stock:     Number(item.stock     || 0),
//       images:    Array.isArray(item.images) ? item.images : [],
//       createdAt: item.createdAt || "",
//       // flat fields used by Filter
//       category:  item.category  || "",
//       metalType: item.metalType || "",
//       purity:    item.purity    || "",
//     }));

//     setProductsFromStorage(normalized);

//     const maxStoredPrice =
//       normalized.length > 0
//         ? Math.max(...normalized.map((p) => p.price))
//         : 0;

//     setPriceRange(maxStoredPrice);
//   };

//   useEffect(() => {
//     loadProducts();
//     window.addEventListener("storage", loadProducts);
//     window.addEventListener("adminProductsUpdated", loadProducts);
//     return () => {
//       window.removeEventListener("storage", loadProducts);
//       window.removeEventListener("adminProductsUpdated", loadProducts);
//     };
//   }, []);

//   const maxPrice = useMemo(() => {
//     if (productsFromStorage.length === 0) return 0;
//     return Math.max(...productsFromStorage.map((p) => p.price));
//   }, [productsFromStorage]);

//   const filterFieldMap = {
//     Category: "category",
//     Metal:    "metalType",
//     Purity:   "purity",
//   };

//   const filteredProducts = useMemo(() => {
//     return productsFromStorage.filter((product) => {
//       const matchPrice = product.price <= priceRange;

//       const matchFilters = Object.entries(selectedFilters).every(
//         ([sectionName, selectedValues]) => {
//           if (!selectedValues || selectedValues.length === 0) return true;
//           const field = filterFieldMap[sectionName];
//           if (!field) return true;
//           const productValue = (product[field] || "").trim().toLowerCase();
//           return selectedValues.some((v) => v.trim().toLowerCase() === productValue);
//         }
//       );

//       return matchPrice && matchFilters;
//     });
//   }, [productsFromStorage, selectedFilters, priceRange]);

//   const page = {
//     display: "flex",
//     width: "100%",
//     minHeight: "100vh",
//     background: "#fff",
//   };

//   return (
//     <div style={page}>
//       <Filter
//         products={productsFromStorage}
//         selectedFilters={selectedFilters}
//         setSelectedFilters={setSelectedFilters}
//         priceRange={priceRange}
//         setPriceRange={setPriceRange}
//         maxPrice={maxPrice}
//       />

//       <MainPage products={filteredProducts} />
//     </div>
//   );
// }



import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Filter from "../marchedit/Filter";
import MainPage from "../marchedit/MainPage";

export default function MarchEdit() {
  const [searchParams] = useSearchParams();

  const [productsFromStorage, setProductsFromStorage] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [priceRange, setPriceRange] = useState(0);

  // Pre-apply category filter if ?category= is present in the URL
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedFilters({ Category: [categoryParam] });
    } else {
      setSelectedFilters({});
    }
  }, [searchParams]);

  const loadProducts = () => {
    const storedProducts = JSON.parse(
      localStorage.getItem("adminProducts") || "[]"
    );

    const normalized = storedProducts.map((item) => ({
      ...item,
      slug:      item.slug,
      name:      item.name      || "",
      price:     Number(item.totalPrice || item.price || 0),
      stock:     Number(item.stock     || 0),
      images:    Array.isArray(item.images) ? item.images : [],
      createdAt: item.createdAt || "",
      category:  item.category  || "",
      metalType: item.metalType || "",
      purity:    item.purity    || "",
    }));

    setProductsFromStorage(normalized);

    const maxStoredPrice =
      normalized.length > 0
        ? Math.max(...normalized.map((p) => p.price))
        : 0;

    setPriceRange(maxStoredPrice);
  };

  useEffect(() => {
    loadProducts();
    window.addEventListener("storage", loadProducts);
    window.addEventListener("adminProductsUpdated", loadProducts);
    return () => {
      window.removeEventListener("storage", loadProducts);
      window.removeEventListener("adminProductsUpdated", loadProducts);
    };
  }, []);

  const maxPrice = useMemo(() => {
    if (productsFromStorage.length === 0) return 0;
    return Math.max(...productsFromStorage.map((p) => p.price));
  }, [productsFromStorage]);

  const filterFieldMap = {
    Category: "category",
    Metal:    "metalType",
    Purity:   "purity",
  };

  const filteredProducts = useMemo(() => {
    return productsFromStorage.filter((product) => {
      const matchPrice = product.price <= priceRange;

      const matchFilters = Object.entries(selectedFilters).every(
        ([sectionName, selectedValues]) => {
          if (!selectedValues || selectedValues.length === 0) return true;
          const field = filterFieldMap[sectionName];
          if (!field) return true;
          const productValue = (product[field] || "").trim().toLowerCase();
          return selectedValues.some((v) => v.trim().toLowerCase() === productValue);
        }
      );

      return matchPrice && matchFilters;
    });
  }, [productsFromStorage, selectedFilters, priceRange]);

  const page = {
    display: "flex",
    width: "100%",
    minHeight: "100vh",
    background: "#fff",
  };

  return (
    <div style={page}>
      <Filter
        products={productsFromStorage}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        maxPrice={maxPrice}
      />

      <MainPage products={filteredProducts} />
    </div>
  );
}
