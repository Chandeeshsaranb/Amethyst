
// import React, { useMemo, useState } from "react";
// import { IoChevronUp, IoChevronDown } from "react-icons/io5";

// export default function Filter({
//   products = [],
//   selectedFilters,
//   setSelectedFilters,
//   priceRange,
//   setPriceRange,
//   maxPrice,
// }) {
//   const [openSections, setOpenSections] = useState({});

//   const productFilters = useMemo(() => {
//     try {
//       return JSON.parse(localStorage.getItem("adminProductFilters")) || {};
//     } catch (error) {
//       return {};
//     }
//   }, []);

//   const toggleSection = (section) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [section]: prev[section] === undefined ? false : !prev[section],
//     }));
//   };

//   const toggleItem = (categoryName, value) => {
//     const currentValues = selectedFilters[categoryName] || [];

//     if (currentValues.includes(value)) {
//       setSelectedFilters((prev) => ({
//         ...prev,
//         [categoryName]: currentValues.filter((item) => item !== value),
//       }));
//     } else {
//       setSelectedFilters((prev) => ({
//         ...prev,
//         [categoryName]: [...currentValues, value],
//       }));
//     }
//   };

//   const getOptionCount = (categoryName, optionValue) => {
//     return products.filter((product) => {
//       const productCategoryValues = product?.categories?.[categoryName] || [];
//       return productCategoryValues.includes(optionValue);
//     }).length;
//   };

//   const sidebar = {
//     width: "280px",
//     minWidth: "280px",
//     background: "#f7f7f7",
//     padding: "20px 16px",
//     boxSizing: "border-box",
//     borderRight: "1px solid #e5e5e5",
//     height: "100vh",
//     overflowY: "auto",
//     position: "sticky",
//     top: 0,
//   };

//   const section = {
//     marginBottom: "18px",
//     paddingBottom: "14px",
//     borderBottom: "1px solid #e8dff0",
//   };

//   const header = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     cursor: "pointer",
//     marginBottom: "14px",
//   };

//   const heading = {
//     fontSize: "12px",
//     letterSpacing: "4px",
//     fontWeight: "600",
//     color: "#444",
//     textTransform: "uppercase",
//   };

//   const item = {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     marginBottom: "10px",
//     fontSize: "14px",
//     color: "#444",
//     cursor: "pointer",
//   };

//   const checkbox = {
//     width: "15px",
//     height: "15px",
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
//     cursor: "pointer",
//     accentColor: "#000",
//   };

//   const renderCheckboxList = (categoryName, options) =>
//     options.map((option, index) => {
//       const count = getOptionCount(categoryName, option);

//       return (
//         <label key={`${categoryName}-${index}`} style={item}>
//           <input
//             type="checkbox"
//             style={checkbox}
//             checked={(selectedFilters[categoryName] || []).includes(option)}
//             onChange={() => toggleItem(categoryName, option)}
//           />
//           <span>
//             {option} ({count})
//           </span>
//         </label>
//       );
//     });

//   return (
//     <div style={sidebar}>
//       {Object.entries(productFilters).map(([categoryName, options]) => {
//         const sectionKey = categoryName;
//         const isOpen =
//           openSections[sectionKey] === undefined ? true : openSections[sectionKey];

//         return (
//           <div key={categoryName} style={section}>
//             <div style={header} onClick={() => toggleSection(sectionKey)}>
//               <div style={heading}>{categoryName}</div>
//               {isOpen ? <IoChevronUp /> : <IoChevronDown />}
//             </div>

//             {isOpen && renderCheckboxList(categoryName, options)}
//           </div>
//         );
//       })}

//       <div style={section}>
//         <div style={header} onClick={() => toggleSection("price")}>
//           <div style={heading}>Price</div>
//           {(openSections.price === undefined ? true : openSections.price) ? (
//             <IoChevronUp />
//           ) : (
//             <IoChevronDown />
//           )}
//         </div>

//         {(openSections.price === undefined ? true : openSections.price) && (
//           <>
//             <div style={priceTextWrap}>
//               <span>₹ 0</span>
//               <span>₹ {Number(priceRange || 0).toLocaleString("en-IN")}</span>
//             </div>
//             <input
//               type="range"
//               min="0"
//               max={maxPrice}
//               value={priceRange}
//               onChange={(e) => setPriceRange(Number(e.target.value))}
//               style={range}
//             />
//           </>
//         )}
//       </div>
//     </div>
//   );
// }




import React, { useMemo, useState } from "react";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";

export default function Filter({
  products = [],
  selectedFilters,
  setSelectedFilters,
  priceRange,
  setPriceRange,
  maxPrice,
}) {
  const [openSections, setOpenSections] = useState({});

  const productFilters = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("adminProductFilters")) || {};
    } catch (error) {
      return {};
    }
  }, []);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: prev[section] === undefined ? false : !prev[section],
    }));
  };

  const toggleItem = (categoryName, value) => {
    const currentValues = selectedFilters[categoryName] || [];

    if (currentValues.includes(value)) {
      setSelectedFilters((prev) => ({
        ...prev,
        [categoryName]: currentValues.filter((item) => item !== value),
      }));
    } else {
      setSelectedFilters((prev) => ({
        ...prev,
        [categoryName]: [...currentValues, value],
      }));
    }
  };

  const getOptionCount = (categoryName, optionValue) => {
    return products.filter((product) => {
      const productCategoryValues = product?.categories?.[categoryName] || [];
      return productCategoryValues.includes(optionValue);
    }).length;
  };

  const visibleProductFilters = useMemo(() => {
    const filtered = {};

    Object.entries(productFilters).forEach(([categoryName, options]) => {
      const validOptions = (options || []).filter(
        (option) => getOptionCount(categoryName, option) > 0
      );

      if (validOptions.length > 0) {
        filtered[categoryName] = validOptions;
      }
    });

    return filtered;
  }, [productFilters, products]);

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

  const emptyText = {
    fontSize: "13px",
    color: "#777",
  };

  const renderCheckboxList = (categoryName, options) =>
    options.map((option, index) => {
      const count = getOptionCount(categoryName, option);

      return (
        <label key={`${categoryName}-${index}`} style={item}>
          <input
            type="checkbox"
            style={checkbox}
            checked={(selectedFilters[categoryName] || []).includes(option)}
            onChange={() => toggleItem(categoryName, option)}
          />
          <span>
            {option} ({count})
          </span>
        </label>
      );
    });

  return (
    <div style={sidebar}>
      {Object.entries(visibleProductFilters).map(([categoryName, options]) => {
        const sectionKey = categoryName;
        const isOpen =
          openSections[sectionKey] === undefined
            ? true
            : openSections[sectionKey];

        return (
          <div key={categoryName} style={section}>
            <div style={header} onClick={() => toggleSection(sectionKey)}>
              <div style={heading}>{categoryName}</div>
              {isOpen ? <IoChevronUp /> : <IoChevronDown />}
            </div>

            {isOpen &&
              (options.length > 0 ? (
                renderCheckboxList(categoryName, options)
              ) : (
                <div style={emptyText}>No items available.</div>
              ))}
          </div>
        );
      })}

      <div style={section}>
        <div style={header} onClick={() => toggleSection("price")}>
          <div style={heading}>Price</div>
          {(openSections.price === undefined ? true : openSections.price) ? (
            <IoChevronUp />
          ) : (
            <IoChevronDown />
          )}
        </div>

        {(openSections.price === undefined ? true : openSections.price) && (
          <>
            <div style={priceTextWrap}>
              <span>₹ 0</span>
              <span>₹ {Number(priceRange || 0).toLocaleString("en-IN")}</span>
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
    </div>
  );
}