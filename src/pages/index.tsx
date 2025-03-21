import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import FormSection from "../components/FormSection";
import Header from "../components/Header";
import { CssBaseline, ThemeProvider, Box, Grid } from "@mui/material";
import theme from "../theme";

export default function Home() {
  const [selectedSection, setSelectedSection] = useState("Storefront Details");
  const [selectedStore, setSelectedStore] = useState("Wonder Worlds");
  const [activeTab, setActiveTab] = useState("Configuration");

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  const handleStoreChange = (store) => {
    setSelectedStore(store);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box sx={{ display: "flex", height: "100vh" }}>
    {/* Sidebar - Fixed Width */}
    <Box
      sx={{
        width: 330, // Sidebar width
        backgroundColor: "#ffffff",
        color: "white",
        p: 2,
        pt:1.5,
        flexShrink: 0,
        height: "full-screen"
      }}
    >
      <Sidebar 
        onSelect={handleSectionChange}
        onStoreChange={handleStoreChange}
        onTabChange={handleTabChange}
        selectedStore={selectedStore}
        activeTab={activeTab}
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
    </Box>

    {/* Main Section (Header + Content) */}
    <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
      {/* Header - Fixed Height */}
      <Box
        sx={{
          height: 123, // Header height
          backgroundColor: "#ffffff",
          color: "white",
        }}
      >
        <Header />
      </Box>

      {/* Content - Fills Remaining Space */}
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "#F8F9FA",
          p: 2,
          pb:0,
          overflow: "auto", // Scrollable if content overflows
        }}
      >
        <FormSection 
            section={selectedSection} 
            activeTab={activeTab}
          />
      </Box>
    </Box>

  </Box>
  </ThemeProvider>

  );
}