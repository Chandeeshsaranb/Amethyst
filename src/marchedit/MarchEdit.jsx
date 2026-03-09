// import React, { useEffect, useMemo, useState } from "react";
// import Filter from "../marchedit/Filter";
// import MainPage from "../marchedit/MainPage";

// export default function MarchEdit() {
//   const masterProductTypes = [
//     "Bangles",
//     "Bracelets",
//     "Chain",
//     "Earrings",
//     "Hair Jewel",
//     "Jadai / Hair Accessories",
//     "Maangtikka",
//     "Necklaces",
//     "Oddiyanam / Hip Belts",
//     "Pendants",
//     "Rings",
//   ];

//   const masterOccasions = [
//     "Haldi",
//     "Mehndi",
//     "Muhurtham",
//     "Party wear",
//     "Pooja / Mini Occasion",
//     "Reception",
//     "Sangeeth",
//     "Work wear",
//   ];

//   const masterFinishAndDesign = [
//     "Antique Collection",
//     "Boho Goddess",
//     "Gold Plated Kundan",
//     "Gold Plated Stone",
//     "Mosaicette Collection",
//     "Mother Of Pearls",
//     "Nagai / Nakshi",
//     "One Of A Kind Dual Tone",
//     "Oxidised",
//     "Turquoise",
//   ];

//   const masterJewelTypes = [
//     "Attigai",
//     "Bends",
//     "Bugudi",
//     "Centre hook",
//     "Chain",
//     "Chain With Earrings",
//     "Choker Necklace",
//     "Close Setting",
//     "Drops",
//     "Hook Drops",
//     "Jadai Billa",
//     "Jhumkas",
//     "Kaappu",
//     "Layer Chain Model",
//     "Long Earrings",
//     "Long Necklace",
//     "Mini Chokers",
//     "Mugappu Chain",
//     "Necklace And Earrings",
//     "Pair Bangle",
//     "Pendant with Earrings",
//     "Reversible Necklace",
//     "Short Necklace",
//     "Side hook",
//     "Single Chain Model",
//     "Single Strand",
//     "Staff Oddiyanam",
//     "Studs",
//   ];

//   const masterSizes = ["2.4"];

//   const [productsFromStorage, setProductsFromStorage] = useState([]);

//   const [selectedTypes, setSelectedTypes] = useState([]);
//   const [selectedOccasions, setSelectedOccasions] = useState([]);
//   const [selectedFinishDesign, setSelectedFinishDesign] = useState([]);
//   const [selectedJewelTypes, setSelectedJewelTypes] = useState([]);
//   const [selectedSizes, setSelectedSizes] = useState([]);
//   const [priceRange, setPriceRange] = useState(0);

//   useEffect(() => {
//     const storedProducts = JSON.parse(
//       localStorage.getItem("adminProducts") || "[]"
//     );

//     const normalizedProducts = storedProducts.map((item) => ({
//       id: item.id,
//       name: item.name || "",
//       code: item.productCode || "",
//       price: Number(item.price || 0),
//       description: item.description || "",
//       images: Array.isArray(item.images) ? item.images : [],
//       createdAt: item.createdAt || "",
//       productTypes: item.categories?.["Product Type"] || [],
//       occasions: item.categories?.Occasions || [],
//       finishDesign: item.categories?.["Finish and Design"] || [],
//       jewelTypes: item.categories?.["Jewel Type"] || [],
//       sizes: item.categories?.Size || [],
//       categories: item.categories || {},
//     }));

//     setProductsFromStorage(normalizedProducts);

//     const maxStoredPrice =
//       normalizedProducts.length > 0
//         ? Math.max(...normalizedProducts.map((p) => p.price))
//         : 0;

//     setPriceRange(maxStoredPrice);
//   }, []);

//   const getCountsFromMaster = (masterList, products, key) => {
//     return masterList.map((itemName) => {
//       const count = products.filter((product) =>
//         (product[key] || []).includes(itemName)
//       ).length;

//       return {
//         name: itemName,
//         count,
//       };
//     });
//   };

//   const productTypes = useMemo(() => {
//     return getCountsFromMaster(
//       masterProductTypes,
//       productsFromStorage,
//       "productTypes"
//     );
//   }, [productsFromStorage]);

//   const occasions = useMemo(() => {
//     return getCountsFromMaster(
//       masterOccasions,
//       productsFromStorage,
//       "occasions"
//     );
//   }, [productsFromStorage]);

//   const finishAndDesign = useMemo(() => {
//     return getCountsFromMaster(
//       masterFinishAndDesign,
//       productsFromStorage,
//       "finishDesign"
//     );
//   }, [productsFromStorage]);

//   const jewelTypes = useMemo(() => {
//     return getCountsFromMaster(
//       masterJewelTypes,
//       productsFromStorage,
//       "jewelTypes"
//     );
//   }, [productsFromStorage]);

//   const sizes = useMemo(() => {
//     return getCountsFromMaster(masterSizes, productsFromStorage, "sizes");
//   }, [productsFromStorage]);

//   const maxPrice = useMemo(() => {
//     if (productsFromStorage.length === 0) return 0;
//     return Math.max(...productsFromStorage.map((p) => p.price));
//   }, [productsFromStorage]);

//   const filteredProducts = useMemo(() => {
//     return productsFromStorage.filter((product) => {
//       const matchType =
//         selectedTypes.length === 0 ||
//         product.productTypes.some((type) => selectedTypes.includes(type));

//       const matchOccasion =
//         selectedOccasions.length === 0 ||
//         product.occasions.some((occasion) =>
//           selectedOccasions.includes(occasion)
//         );

//       const matchFinishDesign =
//         selectedFinishDesign.length === 0 ||
//         product.finishDesign.some((finish) =>
//           selectedFinishDesign.includes(finish)
//         );

//       const matchJewelType =
//         selectedJewelTypes.length === 0 ||
//         product.jewelTypes.some((jewel) =>
//           selectedJewelTypes.includes(jewel)
//         );

//       const matchSize =
//         selectedSizes.length === 0 ||
//         product.sizes.some((size) => selectedSizes.includes(size));

//       const matchPrice = product.price <= priceRange;

//       return (
//         matchType &&
//         matchOccasion &&
//         matchFinishDesign &&
//         matchJewelType &&
//         matchSize &&
//         matchPrice
//       );
//     });
//   }, [
//     productsFromStorage,
//     selectedTypes,
//     selectedOccasions,
//     selectedFinishDesign,
//     selectedJewelTypes,
//     selectedSizes,
//     priceRange,
//   ]);

//   const page = {
//     display: "flex",
//     width: "100%",
//     minHeight: "100vh",
//     background: "#fff",
//   };

//   return (
//     <div style={page}>
//       <Filter
//         productTypes={productTypes}
//         occasions={occasions}
//         finishAndDesign={finishAndDesign}
//         jewelTypes={jewelTypes}
//         sizes={sizes}
//         selectedTypes={selectedTypes}
//         selectedOccasions={selectedOccasions}
//         selectedFinishDesign={selectedFinishDesign}
//         selectedJewelTypes={selectedJewelTypes}
//         selectedSizes={selectedSizes}
//         setSelectedTypes={setSelectedTypes}
//         setSelectedOccasions={setSelectedOccasions}
//         setSelectedFinishDesign={setSelectedFinishDesign}
//         setSelectedJewelTypes={setSelectedJewelTypes}
//         setSelectedSizes={setSelectedSizes}
//         priceRange={priceRange}
//         setPriceRange={setPriceRange}
//         maxPrice={maxPrice}
//       />

//       <MainPage products={filteredProducts} />
//     </div>
//   );
// }


import React, { useEffect, useMemo, useState } from "react";
import Filter from "../marchedit/Filter";
import MainPage from "../marchedit/MainPage";

export default function MarchEdit() {
  const masterProductTypes = [
    "Bangles",
    "Bracelets",
    "Chain",
    "Earrings",
    "Hair Jewel",
    "Jadai / Hair Accessories",
    "Maangtikka",
    "Necklaces",
    "Oddiyanam / Hip Belts",
    "Pendants",
    "Rings",
  ];

  const masterOccasions = [
    "Haldi",
    "Mehndi",
    "Muhurtham",
    "Party wear",
    "Pooja / Mini Occasion",
    "Reception",
    "Sangeeth",
    "Work wear",
  ];

  const masterFinishAndDesign = [
    "Antique Collection",
    "Boho Goddess",
    "Gold Plated Kundan",
    "Gold Plated Stone",
    "Mosaicette Collection",
    "Mother Of Pearls",
    "Nagai / Nakshi",
    "One Of A Kind Dual Tone",
    "Oxidised",
    "Turquoise",
  ];

  const masterJewelTypes = [
    "Attigai",
    "Bends",
    "Bugudi",
    "Centre hook",
    "Chain",
    "Chain With Earrings",
    "Choker Necklace",
    "Close Setting",
    "Drops",
    "Hook Drops",
    "Jadai Billa",
    "Jhumkas",
    "Kaappu",
    "Layer Chain Model",
    "Long Earrings",
    "Long Necklace",
    "Mini Chokers",
    "Mugappu Chain",
    "Necklace And Earrings",
    "Pair Bangle",
    "Pendant with Earrings",
    "Reversible Necklace",
    "Short Necklace",
    "Side hook",
    "Single Chain Model",
    "Single Strand",
    "Staff Oddiyanam",
    "Studs",
  ];

  const masterSizes = ["2.4"];

  const [productsFromStorage, setProductsFromStorage] = useState([]);

  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedOccasions, setSelectedOccasions] = useState([]);
  const [selectedFinishDesign, setSelectedFinishDesign] = useState([]);
  const [selectedJewelTypes, setSelectedJewelTypes] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
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
      productTypes: item.categories?.["Product Type"] || [],
      occasions: item.categories?.Occasions || [],
      finishDesign: item.categories?.["Finish and Design"] || [],
      jewelTypes: item.categories?.["Jewel Type"] || [],
      sizes: item.categories?.Size || [],
      categories: item.categories || {},
    }));

    setProductsFromStorage(normalizedProducts);

    const maxStoredPrice =
      normalizedProducts.length > 0
        ? Math.max(...normalizedProducts.map((p) => p.price))
        : 0;

    setPriceRange(maxStoredPrice);
  }, []);

  const getCountsFromMaster = (masterList, products, key) => {
    return masterList.map((itemName) => {
      const count = products.filter((product) =>
        (product[key] || []).includes(itemName)
      ).length;

      return {
        name: itemName,
        count,
      };
    });
  };

  const productTypes = useMemo(() => {
    return getCountsFromMaster(
      masterProductTypes,
      productsFromStorage,
      "productTypes"
    );
  }, [productsFromStorage]);

  const occasions = useMemo(() => {
    return getCountsFromMaster(
      masterOccasions,
      productsFromStorage,
      "occasions"
    );
  }, [productsFromStorage]);

  const finishAndDesign = useMemo(() => {
    return getCountsFromMaster(
      masterFinishAndDesign,
      productsFromStorage,
      "finishDesign"
    );
  }, [productsFromStorage]);

  const jewelTypes = useMemo(() => {
    return getCountsFromMaster(
      masterJewelTypes,
      productsFromStorage,
      "jewelTypes"
    );
  }, [productsFromStorage]);

  const sizes = useMemo(() => {
    return getCountsFromMaster(masterSizes, productsFromStorage, "sizes");
  }, [productsFromStorage]);

  const maxPrice = useMemo(() => {
    if (productsFromStorage.length === 0) return 0;
    return Math.max(...productsFromStorage.map((p) => p.price));
  }, [productsFromStorage]);

  const filteredProducts = useMemo(() => {
    return productsFromStorage.filter((product) => {
      const matchType =
        selectedTypes.length === 0 ||
        product.productTypes.some((type) => selectedTypes.includes(type));

      const matchOccasion =
        selectedOccasions.length === 0 ||
        product.occasions.some((occasion) =>
          selectedOccasions.includes(occasion)
        );

      const matchFinishDesign =
        selectedFinishDesign.length === 0 ||
        product.finishDesign.some((finish) =>
          selectedFinishDesign.includes(finish)
        );

      const matchJewelType =
        selectedJewelTypes.length === 0 ||
        product.jewelTypes.some((jewel) =>
          selectedJewelTypes.includes(jewel)
        );

      const matchSize =
        selectedSizes.length === 0 ||
        product.sizes.some((size) => selectedSizes.includes(size));

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
    productsFromStorage,
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

      <MainPage products={filteredProducts} />
    </div>
  );
}