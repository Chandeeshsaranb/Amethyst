import React from "react";

export default function AdminUsers({
    adminSearch,
    setAdminSearch,
    filteredAdmins,
    selectedAdminId,
    setSelectedAdminId,
    selectedAdmin,
    openAddAdminModal,
    openEditAdminModal,
    handleToggleAdminStatus,
    handleDeleteAdmin,
    showAdminModal,
    setShowAdminModal,
    editingAdminId,
    adminForm,
    handleAdminFormChange,
    handleAdminPermissionChange,
    handleSaveAdmin,
    resetAdminForm,
    getInitials,
    formatDateTime,
}) {
    const formCard = {
        background: "#fff",
        borderRadius: "12px",
        padding: "28px",
        boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
        maxWidth: "1300px",
        width: "100%",
    };

    const heading = {
        fontSize: "28px",
        fontWeight: "700",
        marginBottom: "24px",
        color: "#222",
    };

    const subHeading = {
        fontSize: "14px",
        color: "#666",
        marginBottom: "18px",
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

    const smallButton = {
        background: "#5d3d75",
        color: "#fff",
        border: "none",
        borderRadius: "7px",
        padding: "10px 14px",
        fontSize: "13px",
        fontWeight: "700",
        cursor: "pointer",
        whiteSpace: "nowrap",
    };

    const removeButton = {
        border: "none",
        background: "#b33939",
        color: "#fff",
        borderRadius: "6px",
        padding: "8px 10px",
        cursor: "pointer",
        fontSize: "12px",
        fontWeight: "700",
    };

    const chipLight = {
        background: "#f3e9fb",
        color: "#5d3d75",
        borderRadius: "999px",
        padding: "4px 10px",
        fontSize: "11px",
        fontWeight: 700,
        display: "inline-block",
        border: "1px solid #d8c9e4",
        textTransform: "capitalize",
    };

    const chipDark = {
        background: "#5d3d75",
        color: "#fff",
        borderRadius: "999px",
        padding: "4px 10px",
        fontSize: "11px",
        fontWeight: 700,
        display: "inline-block",
        textTransform: "capitalize",
    };

    const roleBadge = (role) => ({
        background: role === "super admin" ? "#6f3f8f" : "#f3e9fb",
        color: role === "super admin" ? "#fff" : "#5d3d75",
        borderRadius: "999px",
        padding: "4px 10px",
        fontSize: "11px",
        fontWeight: 700,
        display: "inline-block",
        textTransform: "lowercase",
        border:
            role === "super admin" ? "1px solid #6f3f8f" : "1px solid #d8c9e4",
    });

    const adminLayout = {
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "16px",
        alignItems: "start",
    };

    const adminListCard = {
        ...formCard,
        padding: "16px",
    };

    const adminDetailCard = {
        ...formCard,
        padding: "18px",
        position: "sticky",
        top: "92px",
    };

    const adminRow = (selected) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px",
        padding: "14px 12px",
        border: `1px solid ${selected ? "#6f3f8f" : "#e7dff0"}`,
        borderRadius: "10px",
        background: selected ? "#f3e9fb" : "#fff",
        marginBottom: "12px",
        cursor: "pointer",
    });

    const adminLeft = {
        display: "flex",
        alignItems: "center",
        gap: "12px",
    };

    const adminAvatar = {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background: "#6f3f8f",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: "14px",
        flexShrink: 0,
    };

    const detailLabel = {
        fontSize: "12px",
        color: "#687588",
        marginBottom: "4px",
    };

    const detailValue = {
        fontSize: "14px",
        color: "#111827",
        fontWeight: 600,
        marginBottom: "12px",
        wordBreak: "break-word",
    };

    const modalOverlay = {
        position: "fixed",
        inset: 0,
        background: "rgba(47, 36, 56, 0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        zIndex: 999,
    };

    const modalCard = {
        width: "100%",
        maxWidth: "900px",
        background: "#fff",
        borderRadius: "16px",
        padding: "26px",
        boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
    };

    const label = {
        fontSize: "14px",
        fontWeight: "600",
        marginBottom: "8px",
        color: "#333",
    };

    const fieldWrap = {
        display: "flex",
        flexDirection: "column",
    };

    const modalGrid = {
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: "14px",
    };

    const checkboxLabel = {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "14px",
        color: "#333",
        cursor: "pointer",
    };

    const submitButton = {
        marginTop: "10px",
        background: "#6f3f8f",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        padding: "13px 24px",
        fontSize: "15px",
        fontWeight: "700",
        cursor: "pointer",
    };

    return (
        <div style={formCard}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "16px",
                    marginBottom: "16px",
                    flexWrap: "wrap",
                }}
            >
                <div>
                    <div style={heading}>Admin Users</div>
                    <div style={subHeading}>Manage admin access and permissions</div>
                </div>

                <button type="button" style={addButton} onClick={openAddAdminModal}>
                    + Add Admin User
                </button>
            </div>

            <div style={adminLayout}>
                <div>
                    <div style={{ ...adminListCard, marginBottom: "16px" }}>
                        <div style={{ fontSize: "16px", fontWeight: 700, marginBottom: "12px" }}>
                            Search Admin Users
                        </div>
                        <input
                            type="text"
                            placeholder="Search by name or email..."
                            value={adminSearch}
                            onChange={(e) => setAdminSearch(e.target.value)}
                            style={input}
                        />
                    </div>

                    <div style={adminListCard}>
                        <div style={{ fontSize: "16px", fontWeight: 700, marginBottom: "12px" }}>
                            Admin Users ({filteredAdmins.length})
                        </div>

                        {filteredAdmins.length > 0 ? (
                            filteredAdmins.map((admin) => (
                                <div
                                    key={admin.id}
                                    style={adminRow(selectedAdminId === admin.id)}
                                    onClick={() => setSelectedAdminId(admin.id)}
                                >
                                    <div style={adminLeft}>
                                        <div style={adminAvatar}>{getInitials(admin.name)}</div>
                                        <div>
                                            <div style={{ fontWeight: 700, fontSize: "15px" }}>
                                                {admin.name}
                                            </div>
                                            <div style={{ fontSize: "13px", color: "#687588" }}>
                                                {admin.email}
                                            </div>
                                            <div style={{ fontSize: "12px", color: "#687588", marginTop: "4px" }}>
                                                Last login: {formatDateTime(admin.lastLogin)}
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                                        <span style={roleBadge(admin.role)}>{admin.role}</span>
                                        <span style={chipDark}>{admin.status}</span>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                openEditAdminModal(admin);
                                            }}
                                        >
                                            ✏️
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div style={{ color: "#687588", fontSize: "14px" }}>
                                No admin users found.
                            </div>
                        )}
                    </div>
                </div>

                <div style={adminDetailCard}>
                    {selectedAdmin ? (
                        <>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
                                <div style={{ ...adminAvatar, width: "50px", height: "50px" }}>
                                    {getInitials(selectedAdmin.name)}
                                </div>
                                <div>
                                    <div style={{ fontSize: "20px", fontWeight: 800 }}>
                                        {selectedAdmin.name}
                                    </div>
                                    <div style={{ color: "#687588", fontSize: "13px" }}>
                                        {selectedAdmin.email}
                                    </div>
                                </div>
                            </div>

                            <div style={detailLabel}>Role</div>
                            <div style={detailValue}>
                                <span style={roleBadge(selectedAdmin.role)}>{selectedAdmin.role}</span>
                            </div>

                            <div style={detailLabel}>Status</div>
                            <div style={detailValue}>
                                <span style={chipDark}>{selectedAdmin.status}</span>
                            </div>

                            <div style={detailLabel}>Created At</div>
                            <div style={detailValue}>{formatDateTime(selectedAdmin.createdAt)}</div>

                            <div style={detailLabel}>Last Login</div>
                            <div style={detailValue}>{formatDateTime(selectedAdmin.lastLogin)}</div>

                            <div style={detailLabel}>Permissions</div>
                            <div style={{ ...detailValue, marginBottom: "18px" }}>
                                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                                    {Object.entries(selectedAdmin.permissions || {}).map(([key, value]) =>
                                        value ? (
                                            <span key={key} style={chipLight}>
                                                {key}
                                            </span>
                                        ) : null
                                    )}
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                                <button
                                    type="button"
                                    style={smallButton}
                                    onClick={() => openEditAdminModal(selectedAdmin)}
                                >
                                    Edit
                                </button>

                                <button
                                    type="button"
                                    style={smallButton}
                                    onClick={() => handleToggleAdminStatus(selectedAdmin.id)}
                                >
                                    Toggle Status
                                </button>

                                <button
                                    type="button"
                                    style={removeButton}
                                    onClick={() => handleDeleteAdmin(selectedAdmin.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </>
                    ) : (
                        <div style={{ textAlign: "center", padding: "40px 10px" }}>
                            <div style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px" }}>
                                Select a User
                            </div>
                            <div style={{ color: "#687588", fontSize: "14px" }}>
                                Choose an admin user to view or edit details and permissions.
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {showAdminModal && (
                <div style={modalOverlay}>
                    <div style={modalCard}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "16px",
                            }}
                        >
                            <div style={{ fontSize: "22px", fontWeight: 800 }}>
                                {editingAdminId ? "Edit Admin User" : "Add Admin User"}
                            </div>
                            <button
                                type="button"
                                style={removeButton}
                                onClick={() => {
                                    setShowAdminModal(false);
                                    resetAdminForm();
                                }}
                            >
                                Close
                            </button>
                        </div>

                        <div style={modalGrid}>
                            <div style={fieldWrap}>
                                <label style={label}>Name</label>
                                <input style={input} name="name" value={adminForm.name} onChange={handleAdminFormChange} />
                            </div>

                            <div style={fieldWrap}>
                                <label style={label}>Email</label>
                                <input style={input} name="email" value={adminForm.email} onChange={handleAdminFormChange} />
                            </div>

                            <div style={fieldWrap}>
                                <label style={label}>Role</label>
                                <select style={input} name="role" value={adminForm.role} onChange={handleAdminFormChange}>
                                    <option value="manager">manager</option>
                                    <option value="super admin">super admin</option>
                                </select>
                            </div>

                            <div style={fieldWrap}>
                                <label style={label}>Status</label>
                                <select style={input} name="status" value={adminForm.status} onChange={handleAdminFormChange}>
                                    <option value="active">active</option>
                                    <option value="inactive">inactive</option>
                                </select>
                            </div>
                        </div>

                        <div style={{ fontSize: "18px", fontWeight: "700", margin: "24px 0 14px", color: "#2b2b2b" }}>
                            Permissions
                        </div>

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                                gap: "10px 16px",
                            }}
                        >
                            {[
                                ["dashboard", "Dashboard"],
                                ["users", "Users"],
                                ["categories", "Categories"],
                                ["products", "Products"],
                                ["shipping", "Shipping"],
                                ["communication", "Communication"],
                                ["feeSettings", "Fee Settings"],
                                ["policies", "Policies"],
                            ].map(([key, labelText]) => (
                                <label key={key} style={checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        checked={adminForm.permissions[key]}
                                        onChange={() => handleAdminPermissionChange(key)}
                                    />
                                    {labelText}
                                </label>
                            ))}
                        </div>

                        <div style={{ marginTop: "18px" }}>
                            <button type="button" style={submitButton} onClick={handleSaveAdmin}>
                                {editingAdminId ? "Update Admin User" : "Save Admin User"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}