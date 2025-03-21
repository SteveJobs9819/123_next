import React, { useState, useEffect } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Select,
  MenuItem,
  Button,
  Collapse,
  Box,
  Typography,
  Stack,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { settingSections } from './SettingsContent';
import { configSections } from './ConfigurationContent';
import { editorSections } from './EditorContent';
import Image from 'next/image';

const DRAWER_WIDTH = 320;

const Sidebar = ({ 
  onSelect, 
  onStoreChange, 
  onTabChange,
  selectedStore,
  activeTab,
  selectedSection
}) => {
  const [openSections, setOpenSections] = useState({});
  const [activeSections, setActiveSections] = useState(configSections);
  // const [selectedSection, setSelectedSection] = useState('');

  // Update sections when tab changes
  useEffect(() => {
    let newSections;
    let firstSectionId = '';
    
    // Clear all open sections when changing tabs
    // setOpenSections({});
    switch (activeTab) {
      case 'Settings':
        newSections = settingSections;
        firstSectionId = settingSections.length > 0 ? settingSections[0].id : '';
        break;
      case 'Editor':
        newSections = editorSections;
        firstSectionId = editorSections.length > 0 ? editorSections[0].id : '';
        break;
      case 'Configuration':
      default:
        newSections = configSections;
        firstSectionId = configSections.length > 0 ? configSections[0].id : '';
        break;
    }
    
    setActiveSections(newSections);
    
    // console.log('useEffect->', activeTab, firstSectionId);
    // Auto-select first section
    if (firstSectionId) {
      onSelect(firstSectionId);
      
      // Open only the first section
      // setOpenSections({
      //   [firstSectionId]: true
      // });
      
      // onSelect(firstSectionId);
    }
  }, [activeTab]);

  const handleStoreChange = (event) => {
    onStoreChange(event.target.value);
  };

  const handleTabClick = (tab) => {
    onTabChange(tab);
  };

  const toggleSection = (sectionId) => {
    onSelect(sectionId);
  };

  return (
    
    <Box sx={{ p: 0 }}>
      {/* Gateway Logo */}
      <Box sx={{ 
          mb: 2, 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          minHeight: '60px',
          ml:0.5
        }}>
          <Image 
            src="/gateway-logo.png" 
            alt="Gateway Ticketing Systems"
            width={70}
            height={70}
          />
      </Box>
      <Box sx={{ p: 0 }}>

        {/* Store Selector */}
        <Box sx={{ mb: 0 }}>
          <Typography 
            variant="subtitle2" 
            sx={{ 
              mb: 0,
              fontWeight: 600,
              fontSize: '0.875rem',
              color: 'black',
            }}
          >
            Storefront
          </Typography>
          <Select
            value={selectedStore}
            onChange={handleStoreChange}
            fullWidth
            size="small"
            sx={{ mb: 1.5, boxShadow: '0 1px 0 1px rgba(0,0,0,.1)', height: '2.6rem' }}
          >
            <MenuItem value="Wonder Worlds">Wonder Worlds</MenuItem>
            <MenuItem value="Other Store">Other Store</MenuItem>
          </Select>
        </Box>

        {/* Navigation Buttons */}
        <Stack 
          direction="row" 
          spacing={1}
          sx={{ 
            mb: 1.5,
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
          {['Configuration', 'Settings', 'Editor'].map((tab) => (
            <Button
              key={tab}
              variant="contained"
              color="primary"
              onClick={() => handleTabClick(tab)}
              size="small"
              sx={{
                boxShadow: "none",
                borderRadius: 2,
                bgcolor: activeTab === tab ? '#0D85F5' : '#F5F5F5',
                color: activeTab === tab ? 'white' : 'text.primary',
                '&:hover': {
                  bgcolor: activeTab === tab ? 'primary.dark' : 'action.hover',
                },
                textTransform: 'none',
                minWidth: 'auto',
                px: 1.2,
                height:41,
                width: 'auto',
                fontSize: '0.9rem',
                flex: '0 1 auto',
              }}
            >
              {tab}
            </Button>
          ))}
        </Stack>

        {/* Collapsible Sections - Dynamic based on activeTab */}
        <List sx={{ p: 0 }}>
          {activeSections.map((section) => (
            <React.Fragment key={section.id}>
              <ListItem 
                button
                onClick={() => toggleSection(section.id)}
                sx={{
                  borderRadius: 1,
                  p:0,
                  mb:1.5,
                  color: 'black',
                  bgcolor: selectedSection === section.id ? "action.selected" : "transparent", // Change background color when selected
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                }}
              >
                <ListItemText 
                  primary={section.label}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    color: 'black',
                  }}
                />
                {openSections[section.id] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openSections[section.id]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {/* Add sub-items here if needed */}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;