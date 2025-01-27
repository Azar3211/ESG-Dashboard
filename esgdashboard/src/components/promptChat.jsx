import React, { useState } from "react";

const ChatComponent = () => {
  const [messages, setMessages] = useState([]); // Chat messages
  const [inputMessage, setInputMessage] = useState(""); // User input

  // Preloaded prompts
  const prompts = [
    "How can I improve my ESG score?",
    "Best ways to reduce carbon footprint?",
    "Recommendations for sustainable investing?",
  ];

  // Send a message (manual input)
  const sendMessage = () => {
    if (inputMessage.trim() === "") return;
    setMessages((prev) => [...prev, { text: inputMessage, type: "user" }]);
    setInputMessage(""); // Clear input
  };

  // Send a preloaded prompt
  const sendPrompt = (prompt) => {
    setMessages((prev) => [...prev, { text: prompt, type: "user" }]);
  };

  return (
    <div
      style={{
        maxWidth: "650px", // Limit width on large screens
        width: "100%", // Full width for smaller screens
        height: "80vh", // Use 80% of the viewport height
        // maxHeight: "750px", // Cap the height for larger screens
        margin: "0 auto", // Center horizontally
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column", // Stack sections vertically
        boxSizing: "border-box",
      }}
    >
      {/* Chat Messages */}
      <div
        style={{
          flex: "1", // Allow this section to grow and fill available space
          overflowY: "auto",
          marginBottom: "16px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "8px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              marginBottom: "8px",
              textAlign: msg.type === "user" ? "right" : "left",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "8px 12px",
                borderRadius: "12px",
                backgroundColor: msg.type === "user" ? "#007bff" : "#F5F5F5",
                color: msg.type === "user" ? "#fff" : "#212121",
                maxWidth: "70%", // Limit the message bubble's width
                wordWrap: "break-word", // Wrap text if it overflows
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      {/* Input Field */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message"
          style={{
            flex: 1,
            padding: "8px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            fontSize: "14px",
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            padding: "8px 16px",
            backgroundColor: "#3A6940",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Send
        </button>
      </div>

      {/* Preloaded Prompts */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
        }}
      >
        {prompts.map((prompt, index) => (
          <button
            key={index}
            onClick={() => sendPrompt(prompt)}
            style={{
              padding: "8px",
              backgroundColor: "#f1f1f1",
              color: "#333",
              border: "1px solid #ddd",
              borderRadius: "8px",
              cursor: "pointer",
              flex: "1 1 calc(50% - 8px)", // Responsive width
              fontSize: "12px",
            }}
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatComponent;
