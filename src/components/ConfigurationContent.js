import React from 'react';
import { Typography, Grid, Box, TextField, Paper } from '@mui/material';

// Export configuration sections for reuse in Sidebar
export const configSections = [
  { id: 'Storefront Details', label: 'Storefront Details' },
  { id: 'eGalaxy Config', label: 'eGalaxy Config' },
  { id: 'Payment Processing', label: 'Payment Processing' },
  { id: 'reCAPTCHA v3', label: 'reCAPTCHA v3' },
  { id: 'Google Analytics', label: 'Google Analytics' },
  { id: 'Localizations', label: 'Localizations' },
];

const StorefrontForm = () => (
  <Paper sx={{ bgcolor: 'white', p: 2, pb:4.7, borderRadius: 0 }}>
    <Grid container spacing={1.5}>
    <Grid item xs={12}>
      <Box sx={{ mb: 0.5 }}>
        <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 100, fontSize: '11px' }}>
          Name
        </Typography>
        <TextField
          defaultValue="Wonder Worlds Staging"
          fullWidth
          size="small"
          inputProps={{ 
            style: { 
              height: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              fontSize: "14px",
              padding: "10px"
            } 
          }}
          sx={{
            '& .MuiInputBase-root': {
              height: '2.6rem'
            },
          }}
        />
      </Box>
    </Grid>

    <Grid item xs={12}>
      <Box sx={{ mb: 0.5 }}>
        <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 100 , fontSize: '11px'}}>
          Description
        </Typography>
        <TextField
          defaultValue="Staging/Test environment"
          fullWidth
          size="small"
          inputProps={{ 
            style: { 
              height: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              fontSize: "14px",
              padding: "10px"
            } 
          }}
          sx={{
            '& .MuiInputBase-root': {
              height: '2.6rem'
            }
          }}
        />
      </Box>
    </Grid>

    <Grid item xs={12}>
      <Box sx={{ mb: 0.5 }}>
        <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 100, fontSize: '11px' }}>
          Domain URL
        </Typography>
        <TextField
          defaultValue="https://stage.wonderworlds.com"
          fullWidth
          size="small"
          inputProps={{ 
            style: { 
              height: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              fontSize: "14px",
              padding: "10px"
            } 
          }}
          sx={{
            '& .MuiInputBase-root': {
              height: '2.6rem'
            }
          }}
        />
      </Box>
    </Grid>

    <Grid item xs={12}>
      <Box sx={{ mb: 0.5 }}>
        <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 100 , fontSize: '11px'}}>
          Culture Code
        </Typography>
        <TextField
          defaultValue="ENG"
          fullWidth
          size="small"
          inputProps={{ 
            style: { 
              height: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              fontSize: "14px",
              padding: "10px"
            } 
          }}
          sx={{
            '& .MuiInputBase-root': {
              height: '2.6rem'
            }
          }}
        />
      </Box>
    </Grid>

    <Grid item xs={12}>
      <Box sx={{ mb: 0.5 }}>
        <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 100, fontSize: '11px' }}>
          Currency Code
        </Typography>
        <TextField
          defaultValue="USD"
          fullWidth
          size="small"
          inputProps={{ 
            style: { 
              height: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              fontSize: "14px",
              padding: "10px"
            } 
          }}
          sx={{
            '& .MuiInputBase-root': {
              height: '2.6rem'
            }
          }}
        />
      </Box>
    </Grid>

    <Grid item xs={12}>
      <Box sx={{ mb: 0.5 }}>
        <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 100 , fontSize: '11px'}}>
          Price Format
        </Typography>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item xs={6}>
            <TextField
              defaultValue="$###.###.###.##"
              fullWidth
              size="small"
              inputProps={{ 
                style: { 
                  height: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: "14px",
                  padding: "10px"
                } 
              }}
              sx={{
                '& .MuiInputBase-root': {
                  height: '2.6rem'
                }
              }}
            />
          </Grid>
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              Example: $123,000.50
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Grid>

    <Grid item xs={12}>
      <Box sx={{ mb: 0.5 }}>
        <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 100, fontSize: '11px' }}>
          Date Format
        </Typography>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item xs={6}>
            <TextField
              defaultValue="MMMM d, yyyy"
              fullWidth
              size="small"
              inputProps={{ 
                style: { 
                  height: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: "14px",
                  padding: "10px"
                } 
              }}
              sx={{
                '& .MuiInputBase-root': {
                  height: '2.6rem'
                }
              }}
            />
          </Grid>
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              Example: September 7, 2025
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Grid>

    <Grid item xs={12}>
      <Box sx={{ mb: 0.5 }}>
        <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 100, fontSize: '11px' }}>
          Time Format
        </Typography>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item xs={6}>
            <TextField
              defaultValue="h:mm tt"
              fullWidth
              size="small"
              inputProps={{ 
                style: { 
                  height: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: "14px",
                  padding: "10px"
                } 
              }}
              sx={{
                '& .MuiInputBase-root': {
                  height: '2.6rem'
                }
              }}
            />
          </Grid>
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              Example: 2:45 PM
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  </Grid>
  </Paper>
  
);

const ConfigurationContent = ({ section }) => {
  const getConfigContent = () => {
    switch (section) {
      case 'Storefront Details':
        return <StorefrontForm />;
      case 'eGalaxy Config':
        return <Typography>eGalaxy Configuration Form</Typography>;
      case 'Payment Processing':
        return <Typography>Payment Processing Form</Typography>;
      case 'reCAPTCHA v3':
        return <Typography>reCAPTCHA v3 Form</Typography>;
      case 'Google Analytics':
        return <Typography>Google Analytics Form</Typography>;
      case 'Localizations':
        return <Typography>Localizations Form</Typography>;
      default:
        return <Typography>Please select a section</Typography>;
    }
  };

  return getConfigContent();
};

export default ConfigurationContent; 