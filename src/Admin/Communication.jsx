import React from "react";

export default function Communication({
    communicationSettings,
    setCommunicationSettings,
    handleCommunicationSave,
}) {
    const formCard = {
        background: "#fff",
        borderRadius: "12px",
        padding: "28px",
        boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
        maxWidth: "1100px",
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

    const commGrid = {
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: "18px",
        marginBottom: "26px",
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

    const textarea = {
        minHeight: "110px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        fontSize: "14px",
        outline: "none",
        resize: "vertical",
        fontFamily: "Arial, Helvetica, sans-serif",
        boxSizing: "border-box",
        width: "100%",
    };

    const descriptionWrap = {
        display: "flex",
        flexDirection: "column",
        marginBottom: "26px",
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
            <div style={heading}>Communication Settings</div>
            <div style={subHeading}>Manage WhatsApp, email and support messages</div>

            <div style={commGrid}>
                <div style={fieldWrap}>
                    <label style={label}>WhatsApp Number</label>
                    <input
                        type="text"
                        value={communicationSettings.whatsapp}
                        onChange={(e) =>
                            setCommunicationSettings((prev) => ({
                                ...prev,
                                whatsapp: e.target.value,
                            }))
                        }
                        style={input}
                        placeholder="Enter WhatsApp number"
                    />
                </div>

                <div style={fieldWrap}>
                    <label style={label}>Support Email</label>
                    <input
                        type="email"
                        value={communicationSettings.email}
                        onChange={(e) =>
                            setCommunicationSettings((prev) => ({
                                ...prev,
                                email: e.target.value,
                            }))
                        }
                        style={input}
                        placeholder="Enter support email"
                    />
                </div>
            </div>

            <div style={descriptionWrap}>
                <label style={label}>Default Support Message</label>
                <textarea
                    value={communicationSettings.supportMessage}
                    onChange={(e) =>
                        setCommunicationSettings((prev) => ({
                            ...prev,
                            supportMessage: e.target.value,
                        }))
                    }
                    style={textarea}
                    placeholder="Enter support message"
                />
            </div>

            <button type="button" style={submitButton} onClick={handleCommunicationSave}>
                Save Communication Settings
            </button>
        </div>
    );
}