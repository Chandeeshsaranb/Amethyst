import React from "react";
import Dashboard from "./Dashboard";
import Products from "./Products";
import MetalTypes from "./MetalTypes";
import Category from "./Category";
import Users from "./Users";
import Shipping from "./Shipping";
import Communication from "./Communication";
import AdminUsers from "./AdminUsers";

export default function Mainbar(props) {
    const {
        activeSection,
        dashboardStats,

        storedMetals,
        metalNames,
        metalPurities,
        setShowAddMetalModal,
        getMetalProductCount,
        getPurityProductCount,
        confirmDeleteMetal,
        confirmDeletePurity,
        purityInputs,
        setPurityInputs,
        showPurityInputFor,
        setShowPurityInputFor,
        addPurityToMetal,

        categories,
        categoryNames,
        setShowAddCategoryModal,
        confirmDeleteCategory,

        productFilterType,
        setProductFilterType,
        categoryFilter,
        setCategoryFilter,
        showAddProductForm,
        setShowAddProductForm,
        formData,
        setFormData,
        handleInputChange,
        handleSubmit,
        fileInputRef,
        handleImageChange,
        previews,
        setPreviews,
        handleDragStart,
        handleDragEnter,
        handleDrop,
        handleDragEnd,
        removeImage,
        filteredProducts,
        confirmDeleteProduct,
        editingStockId,
        editingStockValue,
        setEditingStockValue,
        saveStockEdit,
        setEditingStockId,
        startStockEdit,
        setIsEditMode,

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

        shippingFilters,
        handleShippingFilterChange,
        clearShippingFilters,
        filteredShipments,
        getStatusBadgeStyle,

        communicationSettings,
        setCommunicationSettings,
        handleCommunicationSave,

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

        formatCurrency,
        formatDateTime,
        getInitials,
    } = props;

    const main = {
        flex: 1,
        padding: "30px",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        background: "#f6f4f8",
        minHeight: "100vh",
    };

    const placeholderCard = {
        background: "#fff",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
        fontSize: "20px",
        fontWeight: "600",
        width: "100%",
        maxWidth: "1100px",
    };

    return (
        <main style={main}>
            {activeSection === "dashboard" && (
                <Dashboard dashboardStats={dashboardStats} />
            )}

            {activeSection === "products" && (
                <Products
                    storedMetals={metalNames}
                    metalPurities={metalPurities}
                    categories={categoryNames}
                    productFilterType={productFilterType}
                    setProductFilterType={setProductFilterType}
                    categoryFilter={categoryFilter}
                    setCategoryFilter={setCategoryFilter}
                    showAddProductForm={showAddProductForm}
                    setShowAddProductForm={setShowAddProductForm}
                    formData={formData}
                    setFormData={setFormData}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    fileInputRef={fileInputRef}
                    handleImageChange={handleImageChange}
                    previews={previews}
                    setPreviews={setPreviews}
                    handleDragStart={handleDragStart}
                    handleDragEnter={handleDragEnter}
                    handleDrop={handleDrop}
                    handleDragEnd={handleDragEnd}
                    removeImage={removeImage}
                    filteredProducts={filteredProducts}
                    confirmDeleteProduct={confirmDeleteProduct}
                    editingStockId={editingStockId}
                    editingStockValue={editingStockValue}
                    setEditingStockValue={setEditingStockValue}
                    saveStockEdit={saveStockEdit}
                    setEditingStockId={setEditingStockId}
                    startStockEdit={startStockEdit}
                    setIsEditMode={setIsEditMode}
                />
            )}

            {activeSection === "category" && (
                <Category
                    categories={categories}
                    setShowAddCategoryModal={setShowAddCategoryModal}
                    confirmDeleteCategory={confirmDeleteCategory}
                />
            )}

            {activeSection === "metal-types" && (
                <MetalTypes
                    storedMetals={storedMetals}
                    metalPurities={metalPurities}
                    setShowAddMetalModal={setShowAddMetalModal}
                    getMetalProductCount={getMetalProductCount}
                    confirmDeleteMetal={confirmDeleteMetal}
                    confirmDeletePurity={confirmDeletePurity}
                    addPurityToMetal={addPurityToMetal}
                />
            )}

            {activeSection === "users" && (
                <Users
                    users={users}
                    userTab={userTab}
                    setUserTab={setUserTab}
                    userFilters={userFilters}
                    setUserFilters={setUserFilters}
                    filteredUsers={filteredUsers}
                    openAddUserModal={openAddUserModal}
                    openEditUserModal={openEditUserModal}
                    handleDeleteUser={handleDeleteUser}
                    handleToggleUserStatus={handleToggleUserStatus}
                    exportUsersCSV={exportUsersCSV}
                    showUserModal={showUserModal}
                    setShowUserModal={setShowUserModal}
                    editingUserId={editingUserId}
                    userForm={userForm}
                    handleUserFormChange={handleUserFormChange}
                    handleSaveUser={handleSaveUser}
                    resetUserForm={resetUserForm}
                    formatCurrency={formatCurrency}
                />
            )}

            {activeSection === "shipping" && (
                <Shipping
                    shippingFilters={shippingFilters}
                    handleShippingFilterChange={handleShippingFilterChange}
                    clearShippingFilters={clearShippingFilters}
                    filteredShipments={filteredShipments}
                    getStatusBadgeStyle={getStatusBadgeStyle}
                />
            )}

            {activeSection === "communication" && (
                <Communication
                    communicationSettings={communicationSettings}
                    setCommunicationSettings={setCommunicationSettings}
                    handleCommunicationSave={handleCommunicationSave}
                />
            )}

            {activeSection === "admin-users" && (
                <AdminUsers
                    adminSearch={adminSearch}
                    setAdminSearch={setAdminSearch}
                    filteredAdmins={filteredAdmins}
                    selectedAdminId={selectedAdminId}
                    setSelectedAdminId={setSelectedAdminId}
                    selectedAdmin={selectedAdmin}
                    openAddAdminModal={openAddAdminModal}
                    openEditAdminModal={openEditAdminModal}
                    handleToggleAdminStatus={handleToggleAdminStatus}
                    handleDeleteAdmin={handleDeleteAdmin}
                    showAdminModal={showAdminModal}
                    setShowAdminModal={setShowAdminModal}
                    editingAdminId={editingAdminId}
                    adminForm={adminForm}
                    handleAdminFormChange={handleAdminFormChange}
                    handleAdminPermissionChange={handleAdminPermissionChange}
                    handleSaveAdmin={handleSaveAdmin}
                    resetAdminForm={resetAdminForm}
                    getInitials={getInitials}
                    formatDateTime={formatDateTime}
                />
            )}

            {["fee-setting", "privacy-policy", "terms-conditions"].includes(activeSection) && (
                <div style={placeholderCard}>
                    {activeSection.replace("-", " ").toUpperCase()} PAGE
                </div>
            )}
        </main>
    );
}
