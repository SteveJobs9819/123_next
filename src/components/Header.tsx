import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import PublishIcon from '@mui/icons-material/Publish';

const DRAWER_WIDTH = 320; // Match sidebar width

const Header = () => {
  return (
      <Toolbar sx={{ minHeight: '123px !important', pl:'0px !important'}}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography 
            variant="h6" 
            component="div"
            sx={{
              fontSize: '2.3rem',
              fontWeight: 600,
              lineHeight: 1.2,
              color: '#000000'
            }}
          >
            Webstore Builder
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'text.secondary',
              fontSize: '0.75rem',
              fontWeight: 800,
              lineHeight: 1.2
            }}
          >
            Edit webstore page layout and content
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            bgcolor: '#0B5ED7',
            '&:hover': {
              bgcolor: '#005FB8'
            },
            textTransform: 'none',
            fontSize: '0.875rem'
          }}
        >
          Publish
        </Button>
      </Toolbar>
  );
};

export default Header;