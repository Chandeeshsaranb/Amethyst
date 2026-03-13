import React from "react";

export default function MetalTypes({
    storedMetals,
    setShowAddMetalModal,
    getMetalProductCount,
    confirmDeleteMetal,
}) {
    const metalPageWrap = {
        width: "100%",
        maxWidth: "1300px",
    };

    const metalHeader = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "12px",
        marginBottom: "24px",
        flexWrap: "wrap",
    };

    const metalTitle = {
        fontSize: "28px",
        fontWeight: "700",
        color: "#222",
        margin: 0,
    };

    const metalSubTitle = {
        fontSize: "14px",
        color: "#666",
        marginTop: "6px",
    };

    const addButton = {
        background: "#6f3f8f",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        padding: "11px 18px",
        fontSize: "14px",
        fontWeight: "700",
        cursor: "pointer",
        whiteSpace: "nowrap",
    };

    const metalGrid = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: "22px",
    };

    const metalCard = {
        background: "#fff",
        border: "1px solid #e7dff0",
        borderRadius: "18px",
        padding: "22px",
        boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
    };

    const metalCardHeader = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "12px",
        marginBottom: "12px",
    };

    const metalCardTitle = {
        fontSize: "20px",
        fontWeight: "700",
        color: "#222",
        margin: 0,
    };

    const metalCardCount = {
        fontSize: "15px",
        color: "#6f3f8f",
        fontWeight: "600",
    };

    const metalRemoveButton = {
        background: "#fff1f1",
        color: "#b33939",
        border: "1px solid #f0c7c7",
        borderRadius: "8px",
        padding: "8px 12px",
        fontSize: "12px",
        fontWeight: "700",
        cursor: "pointer",
        whiteSpace: "nowrap",
    };

    const noProductsBox = {
        background: "#fff",
        border: "1px dashed #d9c8e7",
        borderRadius: "16px",
        padding: "40px 24px",
        textAlign: "center",
        color: "#666",
        fontSize: "15px",
    };

    return (
        <div style={metalPageWrap}>
            <div style={metalHeader}>
                <div>
                    <h1 style={metalTitle}>Metal Types</h1>
                    <div style={metalSubTitle}>
                        Add and manage available metal types for products
                    </div>
                </div>

                <button
                    type="button"
                    style={addButton}
                    onClick={() => setShowAddMetalModal(true)}
                >
                    + Add Metal
                </button>
            </div>

            {storedMetals.length > 0 ? (
                <div style={metalGrid}>
                    {storedMetals.map((metal) => (
                        <div key={metal} style={metalCard}>
                            <div style={metalCardHeader}>
                                <h3 style={metalCardTitle}>{metal}</h3>

                                <button
                                    type="button"
                                    style={metalRemoveButton}
                                    onClick={() => confirmDeleteMetal(metal)}
                                >
                                    Remove
                                </button>
                            </div>

                            <div style={metalCardCount}>
                                Total Products: {getMetalProductCount(metal)}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div style={noProductsBox}>No metal types available.</div>
            )}
        </div>
    );
}