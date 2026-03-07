// import React from "react";

// export default function Filter({
//   productTypes,
//   occasions,
//   selectedTypes,
//   selectedOccasions,
//   setSelectedTypes,
//   setSelectedOccasions,
//   priceRange,
//   setPriceRange,
//   maxPrice,
// }) {
//   const toggleType = (type) => {
//     if (selectedTypes.includes(type)) {
//       setSelectedTypes(selectedTypes.filter((item) => item !== type));
//     } else {
//       setSelectedTypes([...selectedTypes, type]);
//     }
//   };

//   const toggleOccasion = (occasion) => {
//     if (selectedOccasions.includes(occasion)) {
//       setSelectedOccasions(
//         selectedOccasions.filter((item) => item !== occasion)
//       );
//     } else {
//       setSelectedOccasions([...selectedOccasions, occasion]);
//     }
//   };

//   const sidebar = {
//     width: "280px",
//     minWidth: "280px",
//     background: "#f7f7f7",
//     padding: "20px",
//     boxSizing: "border-box",
//     borderRight: "1px solid #e5e5e5",
//     height: "100%",
//     overflowY: "auto",
//   };

//   const section = {
//     marginBottom: "30px",
//   };

//   const heading = {
//     fontSize: "13px",
//     letterSpacing: "3px",
//     fontWeight: "600",
//     marginBottom: "18px",
//     color: "#333",
//   };

//   const item = {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     marginBottom: "12px",
//     fontSize: "15px",
//     color: "#444",
//     cursor: "pointer",
//   };

//   const checkbox = {
//     width: "16px",
//     height: "16px",
//     accentColor: "#b58bb7",
//     cursor: "pointer",
//   };

//   const priceTextWrap = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: "12px",
//     fontSize: "14px",
//     color: "#333",
//   };

//   const range = {
//     width: "100%",
//     accentColor: "#000",
//     cursor: "pointer",
//   };

//   return (
//     <div style={sidebar}>
//       <div style={section}>
//         <div style={heading}>PRODUCT TYPE</div>
//         {productTypes.map((type, index) => (
//           <label key={index} style={item}>
//             <input
//               type="checkbox"
//               style={checkbox}
//               checked={selectedTypes.includes(type.name)}
//               onChange={() => toggleType(type.name)}
//             />
//             <span>
//               {type.name} ({type.count})
//             </span>
//           </label>
//         ))}
//       </div>

//       <div style={section}>
//         <div style={heading}>PRICE</div>
//         <div style={priceTextWrap}>
//           <span>₹ 0</span>
//           <span>₹ {priceRange.toLocaleString("en-IN")}</span>
//         </div>
//         <input
//           type="range"
//           min="0"
//           max={maxPrice}
//           value={priceRange}
//           onChange={(e) => setPriceRange(Number(e.target.value))}
//           style={range}
//         />
//       </div>

//       <div style={section}>
//         <div style={heading}>OCCASIONS</div>
//         {occasions.map((occasion, index) => (
//           <label key={index} style={item}>
//             <input
//               type="checkbox"
//               style={checkbox}
//               checked={selectedOccasions.includes(occasion.name)}
//               onChange={() => toggleOccasion(occasion.name)}
//             />
//             <span>
//               {occasion.name} ({occasion.count})
//             </span>
//           </label>
//         ))}
//       </div>
//     </div>
//   );
// }




import React, { useState } from "react";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";

export default function Filter({
  productTypes,
  occasions,
  finishAndDesign,
  jewelTypes,
  sizes,
  selectedTypes,
  selectedOccasions,
  selectedFinishDesign,
  selectedJewelTypes,
  selectedSizes,
  setSelectedTypes,
  setSelectedOccasions,
  setSelectedFinishDesign,
  setSelectedJewelTypes,
  setSelectedSizes,
  priceRange,
  setPriceRange,
  maxPrice,
}) {
  const [openSections, setOpenSections] = useState({
    productType: true,
    price: true,
    occasions: true,
    finishAndDesign: true,
    jewelType: true,
    size: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleItem = (value, selectedList, setSelectedList) => {
    if (selectedList.includes(value)) {
      setSelectedList(selectedList.filter((item) => item !== value));
    } else {
      setSelectedList([...selectedList, value]);
    }
  };

  const sidebar = {
    width: "280px",
    minWidth: "280px",
    background: "#f7f7f7",
    padding: "20px 16px",
    boxSizing: "border-box",
    borderRight: "1px solid #e5e5e5",
    height: "100vh",
    overflowY: "auto",
    position: "sticky",
    top: 0,
  };

  const section = {
    marginBottom: "18px",
    paddingBottom: "14px",
    borderBottom: "1px solid #e8dff0",
  };

  const header = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    marginBottom: "14px",
  };

  const heading = {
    fontSize: "12px",
    letterSpacing: "4px",
    fontWeight: "600",
    color: "#444",
    textTransform: "uppercase",
  };

  const item = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
    fontSize: "14px",
    color: "#444",
    cursor: "pointer",
  };

  const checkbox = {
    width: "15px",
    height: "15px",
    accentColor: "#b58bb7",
    cursor: "pointer",
  };

  const priceTextWrap = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
    fontSize: "14px",
    color: "#333",
  };

  const range = {
    width: "100%",
    cursor: "pointer",
    accentColor: "#000",
  };

  const renderCheckboxList = (items, selectedList, setSelectedList) =>
    items.map((itemObj, index) => {
      const label = itemObj.name;
      const count = itemObj.count;

      return (
        <label key={index} style={item}>
          <input
            type="checkbox"
            style={checkbox}
            checked={selectedList.includes(label)}
            onChange={() => toggleItem(label, selectedList, setSelectedList)}
          />
          <span>
            {label} {typeof count === "number" ? `(${count})` : ""}
          </span>
        </label>
      );
    });

  return (
    <div style={sidebar}>
      {/* PRODUCT TYPE */}
      <div style={section}>
        <div style={header} onClick={() => toggleSection("productType")}>
          <div style={heading}>Product Type</div>
          {openSections.productType ? <IoChevronUp /> : <IoChevronDown />}
        </div>
        {openSections.productType &&
          renderCheckboxList(productTypes, selectedTypes, setSelectedTypes)}
      </div>

      {/* PRICE */}
      <div style={section}>
        <div style={header} onClick={() => toggleSection("price")}>
          <div style={heading}>Price</div>
          {openSections.price ? <IoChevronUp /> : <IoChevronDown />}
        </div>
        {openSections.price && (
          <>
            <div style={priceTextWrap}>
              <span>₹ 0</span>
              <span>₹ {priceRange.toLocaleString("en-IN")}</span>
            </div>
            <input
              type="range"
              min="0"
              max={maxPrice}
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              style={range}
            />
          </>
        )}
      </div>

      {/* OCCASIONS */}
      <div style={section}>
        <div style={header} onClick={() => toggleSection("occasions")}>
          <div style={heading}>Occasions</div>
          {openSections.occasions ? <IoChevronUp /> : <IoChevronDown />}
        </div>
        {openSections.occasions &&
          renderCheckboxList(
            occasions,
            selectedOccasions,
            setSelectedOccasions
          )}
      </div>

      {/* FINISH AND DESIGN */}
      <div style={section}>
        <div style={header} onClick={() => toggleSection("finishAndDesign")}>
          <div style={heading}>Finish and Design</div>
          {openSections.finishAndDesign ? <IoChevronUp /> : <IoChevronDown />}
        </div>
        {openSections.finishAndDesign &&
          renderCheckboxList(
            finishAndDesign,
            selectedFinishDesign,
            setSelectedFinishDesign
          )}
      </div>

      {/* JEWEL TYPE */}
      <div style={section}>
        <div style={header} onClick={() => toggleSection("jewelType")}>
          <div style={heading}>Jewel Type</div>
          {openSections.jewelType ? <IoChevronUp /> : <IoChevronDown />}
        </div>
        {openSections.jewelType &&
          renderCheckboxList(
            jewelTypes,
            selectedJewelTypes,
            setSelectedJewelTypes
          )}
      </div>

      {/* SIZE */}
      <div style={section}>
        <div style={header} onClick={() => toggleSection("size")}>
          <div style={heading}>Size</div>
          {openSections.size ? <IoChevronUp /> : <IoChevronDown />}
        </div>
        {openSections.size &&
          renderCheckboxList(sizes, selectedSizes, setSelectedSizes)}
      </div>
    </div>
  );
}