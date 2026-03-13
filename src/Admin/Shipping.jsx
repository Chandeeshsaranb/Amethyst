import React from "react";

export default function Shipping({
    shippingFilters,
    handleShippingFilterChange,
    clearShippingFilters,
    filteredShipments,
    getStatusBadgeStyle,
}) {
    const shippingPageWrap = {
        width: "100%",
        maxWidth: "1300px",
    };

    const shippingHeader = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "12px",
        marginBottom: "24px",
        flexWrap: "wrap",
    };

    const shippingTitle = {
        fontSize: "28px",
        fontWeight: "700",
        color: "#222",
        margin: 0,
    };

    const shippingSubTitle = {
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

    const shippingCard = {
        background: "#fff",
        border: "1px solid #e7dff0",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
        marginBottom: "20px",
    };

    const shippingFilterHeader = {
        fontSize: "18px",
        fontWeight: "700",
        color: "#2b2b2b",
        marginBottom: "18px",
    };

    const shippingFilterGrid = {
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: "14px",
        alignItems: "end",
    };

    const fieldWrap = {
        display: "flex",
        flexDirection: "column",
    };

    const label = {
        fontSize: "14px",
        fontWeight: "600",
        marginBottom: "8px",
        color: "#333",
    };

    const input = {
        height: "44px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "0 12px",
        fontSize: "14px",
        outline: "none",
        boxSizing: "border-box",
        width: "100%",
        background: "#fff",
    };

    const clearBtn = {
        ...addButton,
        background: "#fff",
        color: "#5d3d75",
        border: "1px solid #d8c9e4",
    };

    const tableWrap = {
        width: "100%",
        overflowX: "auto",
    };

    const table = {
        width: "100%",
        borderCollapse: "collapse",
        minWidth: "1000px",
    };

    const th = {
        textAlign: "left",
        padding: "14px 14px",
        fontSize: "14px",
        color: "#333",
        borderBottom: "1px solid #e7dff0",
        fontWeight: "700",
    };

    const td = {
        padding: "16px 14px",
        fontSize: "14px",
        color: "#333",
        borderBottom: "1px solid #f0eaf5",
        verticalAlign: "middle",
    };

    const linkText = {
        color: "#6f3f8f",
        fontWeight: "600",
        textDecoration: "none",
        cursor: "pointer",
    };

    const iconBtnRow = {
        display: "flex",
        alignItems: "center",
        gap: "14px",
    };

    return (
        <div style={shippingPageWrap}>
            <div style={shippingHeader}>
                <div>
                    <h1 style={shippingTitle}>Shipping Management</h1>
                    <div style={shippingSubTitle}>Track and manage all shipments</div>
                </div>

                <button type="button" style={addButton}>
                    + Create Shipment
                </button>
            </div>

            <div style={shippingCard}>
                <div style={shippingFilterHeader}>Filters</div>

                <div style={shippingFilterGrid}>
                    <div style={fieldWrap}>
                        <label style={label}>Status</label>
                        <select
                            name="status"
                            value={shippingFilters.status}
                            onChange={handleShippingFilterChange}
                            style={input}
                        >
                            <option value="">Select status</option>
                            <option value="Shipment Created">Shipment Created</option>
                            <option value="Shipping Estimated by Admin">
                                Shipping Estimated by Admin
                            </option>
                            <option value="Pending Shipping Estimation">
                                Pending Shipping Estimation
                            </option>
                        </select>
                    </div>

                    <div style={fieldWrap}>
                        <label style={label}>Shipment Type</label>
                        <select
                            name="shipmentType"
                            value={shippingFilters.shipmentType}
                            onChange={handleShippingFilterChange}
                            style={input}
                        >
                            <option value="">Select shipment type</option>
                            <option value="Physical Delivery">Physical Delivery</option>
                            <option value="Ship Commodity To Gold App">
                                Ship Commodity To Gold App
                            </option>
                        </select>
                    </div>

                    <button type="button" style={clearBtn} onClick={clearShippingFilters}>
                        Clear
                    </button>
                </div>
            </div>

            <div style={shippingCard}>
                <div style={{ ...shippingFilterHeader, marginBottom: "16px" }}>
                    Shipments ({filteredShipments.length})
                </div>

                <div style={tableWrap}>
                    <table style={table}>
                        <thead>
                            <tr>
                                <th style={th}>S.NO.</th>
                                <th style={th}>User</th>
                                <th style={th}>Commodity</th>
                                <th style={th}>Weight</th>
                                <th style={th}>Type</th>
                                <th style={th}>Shipment Id</th>
                                <th style={th}>Status</th>
                                <th style={th}>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredShipments.length > 0 ? (
                                filteredShipments.map((item, index) => (
                                    <tr key={item.id}>
                                        <td style={td}>{index + 1}</td>
                                        <td style={td}>{item.user}</td>
                                        <td style={td}>
                                            <span style={linkText}>{item.commodity}</span>
                                        </td>
                                        <td style={td}>{item.weight}</td>
                                        <td style={td}>
                                            <span style={linkText}>{item.type}</span>
                                        </td>
                                        <td style={td}>{item.shipmentId}</td>
                                        <td style={td}>
                                            <span style={getStatusBadgeStyle(item.status)}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td style={td}>
                                            <div style={iconBtnRow}>
                                                <button type="button">👁️</button>
                                                <button type="button">✏️</button>
                                                <button type="button">🗑️</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td style={td} colSpan={8}>
                                        No shipments found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}