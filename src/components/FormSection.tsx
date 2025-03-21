import React from 'react';
import {
  Paper,
  TextField,
  Typography,
  Box,
  Grid,
  InputAdornment,
} from '@mui/material';
import ConfigurationContent from './ConfigurationContent';
import SettingsContent from './SettingsContent';
import EditorContent from './EditorContent';

const SectionHeaders = ({ activeTab, section }) => (
  <Box>
    <Typography variant="h1" sx={{ mb: 2.3, fontWeight:'bold', fontSize: '20px' }}>
      {activeTab}
    </Typography>
    <Typography variant="h1" sx={{ mb: 0, fontWeight:'bold', fontSize: '20px' }}>
      {section}
    </Typography>
  </Box>
);

const FormSection = ({ activeTab, section }) => {
  const getContent = () => {
    switch (activeTab) {
      case 'Configuration':
        return <ConfigurationContent section={section} />;
      case 'Settings':
        return <SettingsContent section={section} />;
      case 'Editor':
        return <EditorContent section={section} />;
      default:
        return <Typography>Please select a tab</Typography>;
    }
  };

  return (
    <Box>
      <SectionHeaders activeTab={activeTab} section={section} />
      {getContent()}
    </Box>
  );
};

export default FormSection;