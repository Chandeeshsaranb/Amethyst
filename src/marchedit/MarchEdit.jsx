import React, { useMemo, useState } from "react";
import Filter from "../marchedit/Filter";
import MainPage from "../marchedit/MainPage";
import { PRODUCTS } from "../Data/Products";

export default function MarchEdit() {
  const productTypes = [
    { name: "BANGLES", count: 1 },
    { name: "Bracelets", count: 3 },
    { name: "Chain", count: 4 },
    { name: "Earrings", count: 81 },
    { name: "Hair Maatal", count: 12 },
    { name: "Jada/ Hair Accessories", count: 6 },
    { name: "Maangtikka", count: 34 },
    { name: "Necklaces", count: 204 },
    { name: "Oddiyanam/Hip Belts", count: 3 },
    { name: "Pendants", count: 49 },
    { name: "Rings", count: 4 },
  ];

  const occasions = [
    { name: "Haldi", count: 6 },
    { name: "Mehndi", count: 4 },
    { name: "Muhurtham", count: 136 },
    { name: "Party wear", count: 2 },
    { name: "Pooja/ Mini Occasion", count: 44 },
    { name: "Reception", count: 26 },
    { name: "Sangeeth", count: 31 },
    { name: "Work wear", count: 2 },
  ];

  const finishAndDesign = [
    { name: "Avikam Collection", count: 37 },
    { name: "Boho Goddess", count: 8 },
    { name: "Gold Plated", count: 107 },
    { name: "Gold Plated Stone", count: 87 },
    { name: "Moissanite Collection", count: 8 },
    { name: "Mother Of Pearls", count: 4 },
    { name: "Nagas/ Nakshi", count: 162 },
    { name: "One Of A Kind Dual Tone", count: 7 },
    { name: "Oxidised", count: 1 },
    { name: "Turquoise", count: 3 },
  ];

  const jewelTypes = [
    { name: "Attigai", count: 22 },
    { name: "Beads", count: 3 },
    { name: "Bugadi", count: 9 },
    { name: "Centra hook", count: 49 },
    { name: "Chain", count: 5 },
    { name: "Chain With Earrings", count: 1 },
    { name: "Choker Necklace", count: 28 },
    { name: "Close Setting", count: 6 },
    { name: "Drops", count: 19 },
    { name: "Hook Bapu", count: 2 },
    { name: "Jada Billa", count: 6 },
    { name: "Jhumkas", count: 25 },
    { name: "Kaapu", count: 3 },
    { name: "Layer Chain Maatal", count: 5 },
    { name: "Long Earrings", count: 18 },
    { name: "Long Necklace", count: 33 },
    { name: "Mini Choker", count: 5 },
    { name: "Mugappu Chain", count: 3 },
    { name: "Necklace And Earrings", count: 28 },
    { name: "Pair Bangle", count: 1 },
    { name: "Pendant with Earrings", count: 15 },
    { name: "Reversible Necklace", count: 27 },
    { name: "Short Necklace", count: 22 },
    { name: "Side hook", count: 20 },
    { name: "Single Chain Maatal", count: 7 },
    { name: "Single Strand", count: 34 },
    { name: "Stiff Oddiyanam", count: 3 },
    { name: "Studs", count: 9 },
  ];

  const sizes = [
    { name: "2.4", count: 1 },
    { name: "2.6", count: 2 },
    { name: "2.8", count: 1 },
    { name: "Adjustable", count: 5 },
    { name: "Standard", count: 5 },
  ];

  const maxPrice = 317550;

  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedOccasions, setSelectedOccasions] = useState([]);
  const [selectedFinishDesign, setSelectedFinishDesign] = useState([]);
  const [selectedJewelTypes, setSelectedJewelTypes] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [priceRange, setPriceRange] = useState(maxPrice);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchType =
        selectedTypes.length === 0 || selectedTypes.includes(product.type);

      const matchOccasion =
        selectedOccasions.length === 0 ||
        selectedOccasions.includes(product.occasion);

      const matchFinishDesign =
        selectedFinishDesign.length === 0 ||
        selectedFinishDesign.includes(product.finishDesign);

      const matchJewelType =
        selectedJewelTypes.length === 0 ||
        selectedJewelTypes.includes(product.jewelType);

      const matchSize =
        selectedSizes.length === 0 || selectedSizes.includes(product.size);

      const matchPrice = product.price <= priceRange;

      return (
        matchType &&
        matchOccasion &&
        matchFinishDesign &&
        matchJewelType &&
        matchSize &&
        matchPrice
      );
    });
  }, [
    selectedTypes,
    selectedOccasions,
    selectedFinishDesign,
    selectedJewelTypes,
    selectedSizes,
    priceRange,
  ]);

  const page = {
    display: "flex",
    width: "100%",
    minHeight: "100vh",
    background: "#fff",
  };

  return (
    <div style={page}>
      <Filter
        productTypes={productTypes}
        occasions={occasions}
        finishAndDesign={finishAndDesign}
        jewelTypes={jewelTypes}
        sizes={sizes}
        selectedTypes={selectedTypes}
        selectedOccasions={selectedOccasions}
        selectedFinishDesign={selectedFinishDesign}
        selectedJewelTypes={selectedJewelTypes}
        selectedSizes={selectedSizes}
        setSelectedTypes={setSelectedTypes}
        setSelectedOccasions={setSelectedOccasions}
        setSelectedFinishDesign={setSelectedFinishDesign}
        setSelectedJewelTypes={setSelectedJewelTypes}
        setSelectedSizes={setSelectedSizes}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        maxPrice={maxPrice}
      />

      <MainPage title="March Edit" products={filteredProducts} />
    </div>
  );
}