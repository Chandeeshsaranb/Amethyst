
import React, { useEffect, useMemo, useState } from "react";
import Filter from "../marchedit/Filter";
import MainPage from "../marchedit/MainPage";

export default function MarchEdit() {
  const [productsFromStorage, setProductsFromStorage] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [priceRange, setPriceRange] = useState(0);

  useEffect(() => {
    const storedProducts = JSON.parse(
      localStorage.getItem("adminProducts") || "[]"
    );

    const normalizedProducts = storedProducts.map((item) => ({
      id: item.id,
      name: item.name || "",
      code: item.productCode || "",
      price: Number(item.price || 0),
      description: item.description || "",
      images: Array.isArray(item.images) ? item.images : [],
      createdAt: item.createdAt || "",
      categories: item.categories || {},
    }));

    setProductsFromStorage(normalizedProducts);

    const maxStoredPrice =
      normalizedProducts.length > 0
        ? Math.max(...normalizedProducts.map((p) => p.price))
        : 0;

    setPriceRange(maxStoredPrice);
  }, []);

  const maxPrice = useMemo(() => {
    if (productsFromStorage.length === 0) return 0;
    return Math.max(...productsFromStorage.map((p) => p.price));
  }, [productsFromStorage]);

  const filteredProducts = useMemo(() => {
    return productsFromStorage.filter((product) => {
      const matchPrice = product.price <= priceRange;

      const matchDynamicFilters = Object.entries(selectedFilters).every(
        ([categoryName, selectedValues]) => {
          if (!selectedValues || selectedValues.length === 0) return true;

          const productValues = product?.categories?.[categoryName] || [];

          return selectedValues.some((value) => productValues.includes(value));
        }
      );

      return matchPrice && matchDynamicFilters;
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