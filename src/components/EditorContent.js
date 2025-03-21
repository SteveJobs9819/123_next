import React from 'react';
import { Typography, Grid, Box, TextField, Button } from '@mui/material';

// Export editor sections for reuse in Sidebar
export const editorSections = [
  { id: 'Pages', label: 'Pages' },
  { id: 'Components', label: 'Components' },
  { id: 'Media Library', label: 'Media Library' },
  { id: 'Templates', label: 'Templates' },
];

const StorefrontEditorForm = () => (
  <Grid container spacing={1.5}>
    <Grid item xs={12}>
      <Box sx={{ mb: 0.5 }}>
        <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 500 }}>
          Header Content
        </Typography>
        <TextField
          multiline
          rows={4}
          fullWidth
          size="small"
          placeholder="Enter custom HTML for header section"
          sx={{
            '& .MuiInputBase-root': {
              fontFamily: 'monospace'
            }
          }}
        />
      </Box>
    </Grid>
    <Grid item xs={12}>
      <Box sx={{ mb: 0.5 }}>
        <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 500 }}>
          Footer Content
        </Typography>
        <TextField
          multiline
          rows={4}
          fullWidth
          size="small"
          placeholder="Enter custom HTML for footer section"
          sx={{
            '& .MuiInputBase-root': {
              fontFamily: 'monospace'
            }
          }}
        />
      </Box>
    </Grid>
    <Grid item xs={12}>
      <Box sx={{ mb: 0.5 }}>
        <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 500 }}>
          Custom CSS
        </Typography>
        <TextField
          multiline
          rows={4}
          fullWidth
          size="small"
          placeholder="Enter custom CSS styles"
          sx={{
            '& .MuiInputBase-root': {
              fontFamily: 'monospace'
            }
          }}
        />
      </Box>
    </Grid>
    <Grid item xs={12}>
      <Button 
        variant="contained" 
        color="primary"
        sx={{
          mt: 1,
          bgcolor: '#0D6EFD',
          '&:hover': {
            bgcolor: '#0B5ED7'
          }
        }}
      >
        Preview Changes
      </Button>
    </Grid>
  </Grid>
);

const EditorContent = ({ section }) => {
  const getEditorContent = () => {
    switch (section) {
      case 'storefront':
        return <StorefrontEditorForm />;
      case 'egalaxy':
        return <Typography>eGalaxy Editor Form</Typography>;
      case 'payment':
        return <Typography>Payment Processing Editor</Typography>;
      case 'recaptcha':
        return <Typography>reCAPTCHA v3 Editor</Typography>;
      case 'analytics':
        return <Typography>Google Analytics Editor</Typography>;
      case 'localizations':
        return <Typography>Localizations Editor</Typography>;
      default:
        return <Typography>Please select a section</Typography>;
    }
  };

  return getEditorContent();
};

export default EditorContent; 