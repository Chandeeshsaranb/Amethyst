// // import React, { useMemo, useState } from "react";
// // import Filter from "../marchedit/Filter";
// // import MainPage from "../marchedit/MainPage";
// // import { PRODUCTS } from "../Data/Products";

// // export default function MarchEdit() {
// //   const productTypes = [
// //     { name: "BANGLES", count: 1 },
// //     { name: "Bracelets", count: 3 },
// //     { name: "Chain", count: 4 },
// //     { name: "Earrings", count: 81 },
// //     { name: "Hair Maatal", count: 12 },
// //     { name: "Jada/ Hair Accessories", count: 6 },
// //     { name: "Maangtikka", count: 34 },
// //     { name: "Necklaces", count: 204 },
// //     { name: "Oddiyanam/Hip Belts", count: 3 },
// //     { name: "Pendants", count: 49 },
// //     { name: "Rings", count: 4 },
// //   ];

// //   const occasions = [
// //     { name: "Haldi", count: 6 },
// //     { name: "Mehndi", count: 4 },
// //     { name: "Muhurtham", count: 136 },
// //     { name: "Party wear", count: 2 },
// //     { name: "Pooja/ Mini Occasion", count: 44 },
// //     { name: "Reception", count: 26 },
// //     { name: "Sangeeth", count: 31 },
// //     { name: "Work wear", count: 2 },
// //   ];

// //   const finishAndDesign = [
// //     { name: "Avikam Collection", count: 37 },
// //     { name: "Boho Goddess", count: 8 },
// //     { name: "Gold Plated", count: 107 },
// //     { name: "Gold Plated Stone", count: 87 },
// //     { name: "Moissanite Collection", count: 8 },
// //     { name: "Mother Of Pearls", count: 4 },
// //     { name: "Nagas/ Nakshi", count: 162 },
// //     { name: "One Of A Kind Dual Tone", count: 7 },
// //     { name: "Oxidised", count: 1 },
// //     { name: "Turquoise", count: 3 },
// //   ];

// //   const jewelTypes = [
// //     { name: "Attigai", count: 22 },
// //     { name: "Beads", count: 3 },
// //     { name: "Bugadi", count: 9 },
// //     { name: "Centra hook", count: 49 },
// //     { name: "Chain", count: 5 },
// //     { name: "Chain With Earrings", count: 1 },
// //     { name: "Choker Necklace", count: 28 },
// //     { name: "Close Setting", count: 6 },
// //     { name: "Drops", count: 19 },
// //     { name: "Hook Bapu", count: 2 },
// //     { name: "Jada Billa", count: 6 },
// //     { name: "Jhumkas", count: 25 },
// //     { name: "Kaapu", count: 3 },
// //     { name: "Layer Chain Maatal", count: 5 },
// //     { name: "Long Earrings", count: 18 },
// //     { name: "Long Necklace", count: 33 },
// //     { name: "Mini Choker", count: 5 },
// //     { name: "Mugappu Chain", count: 3 },
// //     { name: "Necklace And Earrings", count: 28 },
// //     { name: "Pair Bangle", count: 1 },
// //     { name: "Pendant with Earrings", count: 15 },
// //     { name: "Reversible Necklace", count: 27 },
// //     { name: "Short Necklace", count: 22 },
// //     { name: "Side hook", count: 20 },
// //     { name: "Single Chain Maatal", count: 7 },
// //     { name: "Single Strand", count: 34 },
// //     { name: "Stiff Oddiyanam", count: 3 },
// //     { name: "Studs", count: 9 },
// //   ];

// //   const sizes = [
// //     { name: "2.4", count: 1 },
// //     { name: "2.6", count: 2 },
// //     { name: "2.8", count: 1 },
// //     { name: "Adjustable", count: 5 },
// //     { name: "Standard", count: 5 },
// //   ];

// //   const maxPrice = 317550;

// //   const [selectedTypes, setSelectedTypes] = useState([]);
// //   const [selectedOccasions, setSelectedOccasions] = useState([]);
// //   const [selectedFinishDesign, setSelectedFinishDesign] = useState([]);
// //   const [selectedJewelTypes, setSelectedJewelTypes] = useState([]);
// //   const [selectedSizes, setSelectedSizes] = useState([]);
// //   const [priceRange, setPriceRange] = useState(maxPrice);

// //   const filteredProducts = useMemo(() => {
// //     return PRODUCTS.filter((product) => {
// //       const matchType =
// //         selectedTypes.length === 0 || selectedTypes.includes(product.type);

// //       const matchOccasion =
// //         selectedOccasions.length === 0 ||
// //         selectedOccasions.includes(product.occasion);

// //       const matchFinishDesign =
// //         selectedFinishDesign.length === 0 ||
// //         selectedFinishDesign.includes(product.finishDesign);

// //       const matchJewelType =
// //         selectedJewelTypes.length === 0 ||
// //         selectedJewelTypes.includes(product.jewelType);

// //       const matchSize =
// //         selectedSizes.length === 0 || selectedSizes.includes(product.size);

// //       const matchPrice = product.price <= priceRange;

// //       return (
// //         matchType &&
// //         matchOccasion &&
// //         matchFinishDesign &&
// //         matchJewelType &&
// //         matchSize &&
// //         matchPrice
// //       );
// //     });
// //   }, [
// //     selectedTypes,
// //     selectedOccasions,
// //     selectedFinishDesign,
// //     selectedJewelTypes,
// //     selectedSizes,
// //     priceRange,
// //   ]);

// //   const page = {
// //     display: "flex",
// //     width: "100%",
// //     minHeight: "100vh",
// //     background: "#fff",
// //   };

// //   return (
// //     <div style={page}>
// //       <Filter
// //         productTypes={productTypes}
// //         occasions={occasions}
// //         finishAndDesign={finishAndDesign}
// //         jewelTypes={jewelTypes}
// //         sizes={sizes}
// //         selectedTypes={selectedTypes}
// //         selectedOccasions={selectedOccasions}
// //         selectedFinishDesign={selectedFinishDesign}
// //         selectedJewelTypes={selectedJewelTypes}
// //         selectedSizes={selectedSizes}
// //         setSelectedTypes={setSelectedTypes}
// //         setSelectedOccasions={setSelectedOccasions}
// //         setSelectedFinishDesign={setSelectedFinishDesign}
// //         setSelectedJewelTypes={setSelectedJewelTypes}
// //         setSelectedSizes={setSelectedSizes}
// //         priceRange={priceRange}
// //         setPriceRange={setPriceRange}
// //         maxPrice={maxPrice}
// //       />

// //       <MainPage title="March Edit" products={filteredProducts} />
// //     </div>
// //   );
// // }



// import React, { useEffect, useMemo, useState } from "react";
// import Filter from "../marchedit/Filter";
// import MainPage from "../marchedit/MainPage";

// export default function MarchEdit() {
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
//       name: item.productName,
//       code: item.productCode,
//       price: Number(item.productPrice || 0),
//       description: item.productDescription,
//       image: item.image,
//       createdAt: item.createdAt,
//       productTypes: item.categories?.["Product Type"] || [],
//       occasions: item.categories?.Occasions || [],
//       finishDesign: item.categories?.["Finish and Design"] || [],
//       jewelTypes: item.categories?.["Jewel Type"] || [],
//       sizes: item.categories?.Size || [],
//     }));

//     setProductsFromStorage(normalizedProducts);

//     const maxStoredPrice =
//       normalizedProducts.length > 0
//         ? Math.max(...normalizedProducts.map((p) => p.price))
//         : 0;

//     setPriceRange(maxStoredPrice);
//   }, []);

//   const getFilterCounts = (products, key) => {
//     const countMap = {};

//     products.forEach((product) => {
//       const values = product[key] || [];
//       values.forEach((value) => {
//         countMap[value] = (countMap[value] || 0) + 1;
//       });
//     });

//     return Object.entries(countMap)
//       .map(([name, count]) => ({ name, count }))
//       .sort((a, b) => a.name.localeCompare(b.name));
//   };

//   const productTypes = useMemo(
//     () => getFilterCounts(productsFromStorage, "productTypes"),
//     [productsFromStorage]
//   );

//   const occasions = useMemo(
//     () => getFilterCounts(productsFromStorage, "occasions"),
//     [productsFromStorage]
//   );

//   const finishAndDesign = useMemo(
//     () => getFilterCounts(productsFromStorage, "finishDesign"),
//     [productsFromStorage]
//   );

//   const jewelTypes = useMemo(
//     () => getFilterCounts(productsFromStorage, "jewelTypes"),
//     [productsFromStorage]
//   );

//   const sizes = useMemo(
//     () => getFilterCounts(productsFromStorage, "sizes"),
//     [productsFromStorage]
//   );

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

//       <MainPage title="March Edit" products={filteredProducts} />
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
      name: item.productName || "",
      code: item.productCode || "",
      price: Number(item.productPrice || 0),
      description: item.productDescription || "",
      image: item.image || "",
      createdAt: item.createdAt || "",
      productTypes: item.categories?.["Product Type"] || [],
      occasions: item.categories?.Occasions || [],
      finishDesign: item.categories?.["Finish and Design"] || [],
      jewelTypes: item.categories?.["Jewel Type"] || [],
      sizes: item.categories?.Size || [],
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

      <MainPage title="March Edit" products={filteredProducts} />
    </div>
  );
}