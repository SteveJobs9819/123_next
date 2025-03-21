import { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from '../components/Sidebar';
import SettingsContent from '../components/SettingsContent';
import ConfigurationContent from '../components/ConfigurationContent';
import EditorContent from '../components/EditorContent';

export default function Home() {
  const [selectedStore, setSelectedStore] = useState('Wonder Worlds');
  const [activeTab, setActiveTab] = useState('Configuration');
  const [activeSection, setActiveSection] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleStoreChange = (store) => {
    setSelectedStore(store);
  };

  const handleSectionSelect = (section) => {
    setActiveSection(section);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <Box sx={{ width: '320px', borderRight: '1px solid #e0e0e0', p: 2 }}>
        <Sidebar 
          onSelect={handleSectionSelect}
          onStoreChange={handleStoreChange}
          onTabChange={handleTabChange}
          selectedStore={selectedStore}
          activeTab={activeTab}
        />
      </Box>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {activeTab === 'Settings' && <SettingsContent activeSetting={activeSection} />}
        {activeTab === 'Configuration' && <ConfigurationContent section={activeSection} />}
        {activeTab === 'Editor' && <EditorContent section={activeSection} />}
      </Box>
    </Box>
  );
}