import React from "react";

export default function Dashboard({ dashboardStats }) {
    const formCard = {
        background: "#fff",
        borderRadius: "12px",
        padding: "28px",
        boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
        maxWidth: "1100px",
        width: "100%",
    };

    const dashboardHeader = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "28px",
        paddingBottom: "18px",
        borderBottom: "1px solid #e9e1ef",
        flexWrap: "wrap",
        gap: "12px",
    };

    const dashboardTitle = {
        fontSize: "28px",
        fontWeight: "700",
        color: "#222",
        margin: 0,
    };

    const dashboardSubTitle = {
        fontSize: "14px",
        color: "#666",
        marginTop: "6px",
    };

    const welcomeText = {
        color: "#6f3f8f",
        fontWeight: "600",
        fontSize: "14px",
    };

    const dashboardStatsGrid = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
    };

    const statCard = {
        background: "#fff",
        border: "1px solid #e7dff0",
        borderRadius: "16px",
        padding: "22px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
    };

    const statIconCircle = {
        width: "46px",
        height: "46px",
        borderRadius: "50%",
        background: "#f3e9fb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "14px",
        fontSize: "20px",
    };

    const statTitle = {
        fontSize: "13px",
        color: "#666",
        textTransform: "uppercase",
        letterSpacing: "0.8px",
        marginBottom: "8px",
    };

    const statValue = {
        fontSize: "28px",
        fontWeight: "700",
        color: "#222",
    };

    const StatCard = ({ title, val, icon }) => (
        <div style={statCard}>
            <div style={statIconCircle}>{icon}</div>
            <div style={statTitle}>{title}</div>
            <div style={statValue}>{val}</div>
        </div>
    );

    return (
        <div style={formCard}>
            <div style={dashboardHeader}>
                <div>
                    <h1 style={dashboardTitle}>Dashboard Overview</h1>
                    <div style={dashboardSubTitle}>
                        Clean and premium admin dashboard for jewellery management
                    </div>
                </div>

                <div style={welcomeText}>Welcome back, Administrator</div>
            </div>

            <div style={dashboardStatsGrid}>
                <StatCard
                    title="Total Customers"
                    val={dashboardStats.totalCustomers}
                    icon="👥"
                />
                <StatCard
                    title="Total Profit"
                    val={`₹${dashboardStats.totalProfit.toLocaleString()}`}
                    icon="💰"
                />
                <StatCard
                    title="Active Users"
                    val={dashboardStats.activeUsers}
                    icon="📈"
                />
                <StatCard
                    title="Active Shipment"
                    val={dashboardStats.activeShipment}
                    icon="📦"
                />
                <StatCard
                    title="Delivered"
                    val={dashboardStats.delivered}
                    icon="✅"
                />
                <StatCard
                    title="Gold Available"
                    val={dashboardStats.goldCount}
                    icon="✨"
                />
                <StatCard
                    title="Silver Available"
                    val={dashboardStats.silverCount}
                    icon="🔘"
                />
            </div>
        </div>
    );
}