import React, { useState } from "react";
import { TextField, List, ListItem, ListItemText } from "@mui/material";

const IndustryCodeSearch = () => {
  // Sample industry codes (replace with your actual data)
  const industryCodes = [
    { code: "A123", name: "Agriculture" },
    { code: "B456", name: "Banking" },
    { code: "C789", name: "Construction" },
    { code: "D012", name: "Education" },
    { code: "E345", name: "Energy" },
    { code: "F678", name: "Finance" },
    { code: "G123", name: "Government" },
    { code: "H456", name: "Healthcare" },
    { code: "I789", name: "Insurance" },
    { code: "J012", name: "Journalism" },
  ];

  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [filteredCodes, setFilteredCodes] = useState(industryCodes); // State for filtered list

  // Handle search input
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = industryCodes.filter(
      (item) =>
        item.code.toLowerCase().includes(query) || // Match by code
        item.name.toLowerCase().includes(query) // Match by name
    );
    setFilteredCodes(filtered);
  };

  return (
    <div
      style={{
        maxWidth: "700px", // Restrict maximum width
        width: "100%", // Responsive width for smaller screens
        margin: "20px auto", // Center horizontally
        padding: "16px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#F5F5F5", // Light grey background
        border: "1px solid #E0E0E0",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        boxSizing: "border-box",
        overflow: "hidden", // Prevent content spill
      }}
    >
      {/* Search Input */}
      <TextField
        label="Search Industry Codes"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={handleSearch}
        style={{
          marginBottom: "16px",
          backgroundColor: "#FFFFFF", // White input background
          borderRadius: "4px",
        }}
      />

      {/* Results List */}
      <div
        style={{
            height: '100%',
          maxHeight: "40vh", // Restrict height of the list
          width: "25vw", // Responsive width

          overflowY: "auto", // Enable vertical scrolling
        }}
      >
        <List>
          {filteredCodes.length > 0 ? (
            filteredCodes.map((item) => (
              <ListItem
                key={item.code}
                style={{
                  backgroundColor: "#FFFFFF",
                  marginBottom: "8px",
                  padding: "16px",
                  border: "1px solid #4CAF50", // Green border for sustainability theme
                  borderRadius: "8px", // Rounded corners
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
                }}
              >
                <ListItemText
                  primary={item.name}
                  secondary={`Code: ${item.code}`}
                  primaryTypographyProps={{
                    style: { fontWeight: "bold", color: "#212121" }, // Green primary text
                  }}
                  secondaryTypographyProps={{
                    style: { color: "#212121" }, // Subtle secondary text
                  }}
                />
              </ListItem>
            ))
          ) : (
            <ListItem
              style={{
                backgroundColor: "#FFFFFF",
                padding: "16px",
                border: "3px solid #E0E0E0",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <ListItemText
                primary="No results found"
                primaryTypographyProps={{
                  style: { color: "#FF0000", fontWeight: "bold" }, // Red text for no results
                }}
              />
            </ListItem>
          )}
        </List>
      </div>
    </div>
  );
};

export default IndustryCodeSearch;
