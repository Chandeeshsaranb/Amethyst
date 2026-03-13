import React from "react";

export default function Users({
    users,
    userTab,
    setUserTab,
    userFilters,
    setUserFilters,
    filteredUsers,
    openAddUserModal,
    openEditUserModal,
    handleDeleteUser,
    handleToggleUserStatus,
    exportUsersCSV,
    showUserModal,
    setShowUserModal,
    editingUserId,
    userForm,
    handleUserFormChange,
    handleSaveUser,
    resetUserForm,
    formatCurrency,
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

    const usersFiltersGrid = {
        display: "grid",
        gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
        gap: "12px",
        marginBottom: "12px",
    };

    const usersTabs = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        background: "#f3f3f3",
        borderRadius: "10px",
        padding: "4px",
        marginBottom: "14px",
    };

    const tabButton = (active) => ({
        border: "none",
        background: active ? "#fff" : "transparent",
        borderRadius: "8px",
        padding: "12px",
        fontSize: "13px",
        fontWeight: 700,
        cursor: "pointer",
        color: active ? "#6f3f8f" : "#6b7280",
    });

    const filterRowBottom = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px",
        flexWrap: "wrap",
    };

    const checkRow = {
        display: "flex",
        alignItems: "center",
        gap: "16px",
        flexWrap: "wrap",
    };

    const checkboxLabel = {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "14px",
        color: "#333",
        cursor: "pointer",
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

    const userNameWrap = {
        display: "flex",
        alignItems: "center",
        gap: "8px",
    };

    const userActions = {
        display: "flex",
        alignItems: "center",
        gap: "10px",
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

    const modalGrid = {
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: "14px",
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
            <div style={heading}>Users</div>
            <div style={subHeading}>Manage your registered users</div>

            <div style={usersTabs}>
                <button
                    type="button"
                    style={tabButton(userTab === "all")}
                    onClick={() => setUserTab("all")}
                >
                    All
                </button>
                <button
                    type="button"
                    style={tabButton(userTab === "individuals")}
                    onClick={() => setUserTab("individuals")}
                >
                    Individuals
                </button>
                <button
                    type="button"
                    style={tabButton(userTab === "business")}
                    onClick={() => setUserTab("business")}
                >
                    Business
                </button>
            </div>

            <div style={{ fontWeight: 700, marginBottom: "12px", fontSize: "14px" }}>
                Filters
            </div>

            <div style={usersFiltersGrid}>
                <input
                    style={input}
                    placeholder="Filter by name"
                    value={userFilters.name}
                    onChange={(e) =>
                        setUserFilters((prev) => ({ ...prev, name: e.target.value }))
                    }
                />
                <input
                    style={input}
                    placeholder="Filter by email"
                    value={userFilters.email}
                    onChange={(e) =>
                        setUserFilters((prev) => ({ ...prev, email: e.target.value }))
                    }
                />
                <input
                    style={input}
                    placeholder="Filter by location"
                    value={userFilters.location}
                    onChange={(e) =>
                        setUserFilters((prev) => ({ ...prev, location: e.target.value }))
                    }
                />

                <select
                    style={input}
                    value={userFilters.status}
                    onChange={(e) =>
                        setUserFilters((prev) => ({ ...prev, status: e.target.value }))
                    }
                >
                    <option value="">Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>

                <select
                    style={input}
                    value={userFilters.kyc}
                    onChange={(e) =>
                        setUserFilters((prev) => ({ ...prev, kyc: e.target.value }))
                    }
                >
                    <option value="">KYC</option>
                    <option value="approved">Approved</option>
                    <option value="pending">Pending</option>
                    <option value="rejected">Rejected</option>
                </select>

                <select
                    style={input}
                    value={userFilters.crmType}
                    onChange={(e) =>
                        setUserFilters((prev) => ({ ...prev, crmType: e.target.value }))
                    }
                >
                    <option value="">CRM Type</option>
                    <option value="Trader">Trader</option>
                    <option value="Lead">Lead</option>
                    <option value="Collector">Collector</option>
                </select>

                <select
                    style={input}
                    value={userFilters.leadStatus}
                    onChange={(e) =>
                        setUserFilters((prev) => ({ ...prev, leadStatus: e.target.value }))
                    }
                >
                    <option value="">Lead Status</option>
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Qualified">Qualified</option>
                    <option value="Converted">Converted</option>
                </select>

                <select
                    style={input}
                    value={userFilters.type}
                    onChange={(e) =>
                        setUserFilters((prev) => ({ ...prev, type: e.target.value }))
                    }
                >
                    <option value="">All Types</option>
                    <option value="individual">Individual</option>
                    <option value="business">Business</option>
                </select>
            </div>

            <div style={filterRowBottom}>
                <div style={checkRow}>
                    <label style={checkboxLabel}>
                        <input
                            type="checkbox"
                            checked={userFilters.leadsOnly}
                            onChange={(e) =>
                                setUserFilters((prev) => ({
                                    ...prev,
                                    leadsOnly: e.target.checked,
                                }))
                            }
                        />
                        Leads only
                    </label>

                    <label style={checkboxLabel}>
                        <input
                            type="checkbox"
                            checked={userFilters.myLeads}
                            onChange={(e) =>
                                setUserFilters((prev) => ({
                                    ...prev,
                                    myLeads: e.target.checked,
                                }))
                            }
                        />
                        My Leads
                    </label>
                </div>

                <button type="button" style={addButton} onClick={openAddUserModal}>
                    + Add User
                </button>
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "12px",
                    marginTop: "24px",
                    marginBottom: "12px",
                    flexWrap: "wrap",
                }}
            >
                <div style={{ fontSize: "18px", fontWeight: 800 }}>
                    User List ({filteredUsers.length} total)
                </div>

                <button type="button" style={smallButton} onClick={exportUsersCSV}>
                    Export CSV
                </button>
            </div>

            <div style={tableWrap}>
                <table style={table}>
                    <thead>
                        <tr>
                            <th style={th}></th>
                            <th style={th}>Name</th>
                            <th style={th}>Email</th>
                            <th style={th}>Location</th>
                            <th style={th}>CRM Type</th>
                            <th style={th}>Lead Status</th>
                            <th style={th}>Owner</th>
                            <th style={th}>Total Purchases</th>
                            <th style={th}>Status</th>
                            <th style={th}>KYC</th>
                            <th style={th}>IRA</th>
                            <th style={th}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map((user) => (
                                <tr key={user.id}>
                                    <td style={td}>
                                        <input type="checkbox" />
                                    </td>

                                    <td style={td}>
                                        <div style={userNameWrap}>
                                            <span style={{ fontWeight: 700 }}>{user.name}</span>
                                            {user.tags?.[0] ? (
                                                <span style={chipLight}>{user.tags[0]}</span>
                                            ) : null}
                                        </div>
                                    </td>

                                    <td style={td}>{user.email}</td>
                                    <td style={td}>{user.location}</td>
                                    <td style={td}>
                                        <span style={chipLight}>{user.crmType}</span>
                                    </td>
                                    <td style={td}>
                                        <span style={chipDark}>{user.leadStatus}</span>
                                    </td>
                                    <td style={td}>{user.owner}</td>
                                    <td style={td}>{formatCurrency(user.totalPurchases)}</td>
                                    <td style={td}>
                                        <span style={chipDark}>{user.status}</span>
                                    </td>
                                    <td style={td}>
                                        <span style={chipDark}>{user.kyc}</span>
                                    </td>
                                    <td style={td}>
                                        <span style={user.ira === "Active" ? chipDark : chipLight}>
                                            {user.ira}
                                        </span>
                                    </td>
                                    <td style={td}>
                                        <div style={userActions}>
                                            <button
                                                type="button"
                                                onClick={() => window.open(`mailto:${user.email}`, "_blank")}
                                            >
                                                ✉️
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    alert(
                                                        user.phone
                                                            ? `Call: ${user.phone}`
                                                            : "Phone number not available"
                                                    )
                                                }
                                            >
                                                📞
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => openEditUserModal(user)}
                                            >
                                                ✏️
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleToggleUserStatus(user.id)}
                                            >
                                                🔄
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleDeleteUser(user.id)}
                                            >
                                                🗑️
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td style={td} colSpan={12}>
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {showUserModal && (
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
                                {editingUserId ? "Edit User" : "Add User"}
                            </div>
                            <button
                                type="button"
                                style={removeButton}
                                onClick={() => {
                                    setShowUserModal(false);
                                    resetUserForm();
                                }}
                            >
                                Close
                            </button>
                        </div>

                        <div style={modalGrid}>
                            <div style={fieldWrap}>
                                <label style={label}>Name</label>
                                <input style={input} name="name" value={userForm.name} onChange={handleUserFormChange} />
                            </div>

                            <div style={fieldWrap}>
                                <label style={label}>Email</label>
                                <input style={input} name="email" value={userForm.email} onChange={handleUserFormChange} />
                            </div>

                            <div style={fieldWrap}>
                                <label style={label}>Phone</label>
                                <input style={input} name="phone" value={userForm.phone} onChange={handleUserFormChange} />
                            </div>

                            <div style={fieldWrap}>
                                <label style={label}>Location</label>
                                <input style={input} name="location" value={userForm.location} onChange={handleUserFormChange} />
                            </div>

                            <div style={fieldWrap}>
                                <label style={label}>Type</label>
                                <select style={input} name="type" value={userForm.type} onChange={handleUserFormChange}>
                                    <option value="individual">Individual</option>
                                    <option value="business">Business</option>
                                </select>
                            </div>

                            <div style={fieldWrap}>
                                <label style={label}>CRM Type</label>
                                <select style={input} name="crmType" value={userForm.crmType} onChange={handleUserFormChange}>
                                    <option value="Trader">Trader</option>
                                    <option value="Lead">Lead</option>
                                    <option value="Collector">Collector</option>
                                </select>
                            </div>

                            <div style={fieldWrap}>
                                <label style={label}>Lead Status</label>
                                <select style={input} name="leadStatus" value={userForm.leadStatus} onChange={handleUserFormChange}>
                                    <option value="New">New</option>
                                    <option value="Contacted">Contacted</option>
                                    <option value="Qualified">Qualified</option>
                                    <option value="Converted">Converted</option>
                                </select>
                            </div>

                            <div style={fieldWrap}>
                                <label style={label}>Owner</label>
                                <input style={input} name="owner" value={userForm.owner} onChange={handleUserFormChange} />
                            </div>

                            <div style={fieldWrap}>
                                <label style={label}>Total Purchases</label>
                                <input style={input} type="number" name="totalPurchases" value={userForm.totalPurchases} onChange={handleUserFormChange} />
                            </div>

                            <div style={fieldWrap}>
                                <label style={label}>Status</label>
                                <select style={input} name="status" value={userForm.status} onChange={handleUserFormChange}>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>

                            <div style={fieldWrap}>
                                <label style={label}>KYC</label>
                                <select style={input} name="kyc" value={userForm.kyc} onChange={handleUserFormChange}>
                                    <option value="approved">Approved</option>
                                    <option value="pending">Pending</option>
                                    <option value="rejected">Rejected</option>
                                </select>
                            </div>

                            <div style={fieldWrap}>
                                <label style={label}>IRA</label>
                                <select style={input} name="ira" value={userForm.ira} onChange={handleUserFormChange}>
                                    <option value="Active">Active</option>
                                    <option value="None">None</option>
                                </select>
                            </div>

                            <div style={fieldWrap}>
                                <label style={label}>Tags</label>
                                <input style={input} name="tags" value={userForm.tags} onChange={handleUserFormChange} />
                            </div>
                        </div>

                        <div style={{ ...checkRow, marginTop: "18px" }}>
                            <label style={checkboxLabel}>
                                <input type="checkbox" name="isLead" checked={userForm.isLead} onChange={handleUserFormChange} />
                                Is Lead
                            </label>

                            <label style={checkboxLabel}>
                                <input type="checkbox" name="myLead" checked={userForm.myLead} onChange={handleUserFormChange} />
                                My Lead
                            </label>
                        </div>

                        <div style={{ marginTop: "18px" }}>
                            <button type="button" style={submitButton} onClick={handleSaveUser}>
                                {editingUserId ? "Update User" : "Save User"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}