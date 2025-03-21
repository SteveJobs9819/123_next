import React, { useState, useEffect } from 'react';
import reactCSS from 'reactcss';
import './styles.css';
import {
  Typography,
  Grid,
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Select,
  MenuItem,
  FormControl,
  TextField,
  InputAdornment,
  InputLabel,
  Divider
} from '@mui/material';
import { SketchPicker } from 'react-color';
import { Edit, Check, Close, CheckCircle } from '@mui/icons-material';
import BrushIcon from "@mui/icons-material/Brush";

const colorShades = (baseColor) => {
  const shades = [];
  for (let i = 0.2; i <= 1; i += 0.2) {
    shades.push(
      <Box key={i} sx={{
        width: '20%',
        height: '40px',
        backgroundColor: baseColor,
        opacity: i,
        borderRadius: '2px'
      }} />
    );
  }
  return shades;
};

// Define the Settings section options that will be used by Sidebar
export const settingSections = [
  { id: 'Storefront Colors', label: 'Storefront Colors' },
  { id: 'Button Styles', label: 'Button Styles' },
  { id: 'Typography', label: 'Typography' },
  { id: 'Spacing', label: 'Spacing' }
];

const SettingsContent = ({ section }) => {
  const [storefront, setStorefront] = useState('Wonder Worlds');
  const [primaryColor, setPrimaryColor] = useState('#005FB8');
  const [secondaryColor, setSecondaryColor] = useState('#62B6CB');
  const [neutralColor, setNeutralColor] = useState('#62B6CB');
  const [mainTextColor, setMainTextColor] = useState('#000000');
  const [neutralTextColor, setNeutralTextColor] = useState('#666666');

  const [openColorPicker, setOpenColorPicker] = useState(false);
  const [currentColorType, setCurrentColorType] = useState('');
  const [currentColor, setCurrentColor] = useState('');

  const [colorRgb, setColorRgb] = useState({ r: 0, g: 95, b: 184, a: 1 });

  useEffect(() => {
    // Convert hex to rgb when currentColor changes
    if (currentColor) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(currentColor);
      if (result) {
        const r = parseInt(result[1], 16);
        const g = parseInt(result[2], 16);
        const b = parseInt(result[3], 16);
        setColorRgb({ r, g, b, a: 1 });
      }
    }
  }, [currentColor]);

  const handleStorefrontChange = (event) => {
    setStorefront(event.target.value);
  };

  const handleOpenColorPicker = (colorType, color) => {
    setCurrentColorType(colorType);
    setCurrentColor(color);
    setOpenColorPicker(true);
  };

  const handleColorChange = (color) => {
    setCurrentColor(color.hex);
    
  };

  const handleClose = () => {
    setOpenColorPicker(false);
  };

  const handleSaveChanges = () => {
    // Here you would save the color changes to your backend
    switch (currentColorType) {
      case 'primary':
        setPrimaryColor(currentColor);
        break;
      case 'secondary':
        setSecondaryColor(currentColor);
        break;
      case 'neutral':
        setNeutralColor(currentColor);
        break;
      case 'mainText':
        setMainTextColor(currentColor);
        break;
      case 'neutralText':
        setNeutralTextColor(currentColor);
        break;
      default:
        break;
    }
    setOpenColorPicker(false);
  };

  const ColorSetting = ({ label, color, type }) => (
    <Box sx={{ 
      mb: 0.5, 
      borderRadius: '4px', 
      p: 0, 
      bgcolor: 'white',
      border: '1px solid #e0e0e0',
      height: '120px',
      width: `${type === 'mainText' || type === 'neutralText' ? 'calc(100% - 352px)' : '100%'}`,
    }}>

      <Box display="flex" alignItems="center" justifyContent="space-between" height="100%">
        <Box sx={{ display: 'block', alignItems: 'center', width: 'auto', flexShrink: 0, height:'100%' }}>
          <Typography variant="h5" sx={{ mb: 0, pl:2, pt:2.5, align: 'left',fontWeight: 750, height: '50%', fontSize: '17px' }}>{label}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', width: 'auto', flexShrink: 0, hegith: '50%', pl:2 }}>
            <TextField 
              value={color}
              size="small"
              sx={{ 
                width: '115px', 
                mr: 0.2,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '4px',
                },
                '& .MuiInputBase-input': { 
                  fontSize: "13px" ,
                  padding: '15px 0px 15px 7px',
                },
              }}
            />
            <IconButton 
              size="small" 
              onClick={() => handleOpenColorPicker(type, color)}
              sx={{ 
                color: 'white', 
                bgcolor: 'white',
                '&:hover': { bgcolor: '#065491' },
                width: '30px',
                borderRadius: '4px',
                padding: '2px',
              }}
            >
              <BrushIcon sx={{ color: '#065491' }} />
                </IconButton>
              </Box>
            </Box>
        {type !== 'mainText' && type !== 'neutralText' ? (
          <Box sx={{ display: 'flex', height: '100%', ml: 2, p:2 }}>
            {[1, 0.8, 0.6, 0.4, 0.2].map((opacity, index) => (
              <Box 
                key={index} 
                sx={{
                  width: '88px',
                  bgcolor: color,
                  opacity,
                  align: 'left'
                }}
              />
            ))}
          </Box>
        ) : (
          <Box sx={{ width: '120px', height: '100%', ml: 2, p:2 }}>
            <Box sx={{ 
              width: '100%', 
              height: '100%', 
              backgroundColor: color, 
            }} />
          </Box>
        )}
        
      </Box>
    </Box>
  );

  const renderContent = () => {
    switch (section) {
      case 'Storefront Colors':
        return (
          <Box sx={{width:"100%", overflowX: "auto",whiteSpace: "nowrap"}}>
            <Grid container spacing={1} sx={{width:"1100px"}}>
              <Grid item xs={12} md={10}>
                <ColorSetting label="Primary Color" color={primaryColor} type="primary" />
              </Grid>
              <Grid item xs={12} md={10}>
                <ColorSetting label="Secondary Color" color={secondaryColor} type="secondary" />
              </Grid>
              <Grid item xs={12} md={10}>
                <ColorSetting label="Neutral Color" color={neutralColor} type="neutral" />
              </Grid>
              <Grid item xs={12} md={10}>
                <ColorSetting label="Main Text Color" color={mainTextColor} type="mainText" />
              </Grid>
              <Grid item xs={12} md={10}>
                <ColorSetting label="Neutral Text Color" color={neutralTextColor} type="neutralText" />
              </Grid>
            </Grid>
          </Box>
        );
      case 'Button Styles':
        return (
          <Box>
            <Typography>Button Styles settings will go here</Typography>
          </Box>
        );
      case 'Typography':
        return (
          <Box>
            <Typography>Typography settings will go here</Typography>
          </Box>
        );
      case 'Spacing':
        return (
          <Box>
            <Typography>Spacing settings will go here</Typography>
          </Box>
        );
      default:
        return null;
    }
  };

  // Map setting labels to display names
  const getSettingLabel = () => {
    switch (section) {
      case 'Storefront Colors': return 'Storefront Colors';
      case 'Button Styles': return 'Button Styles';
      case 'Typography': return 'Typography';
      case 'Spacing': return 'Spacing';
      default: return 'Settings';
    }
  };

  const styles = reactCSS({
    'default': {
      color: {
        width: '36px',
        height: '14px',
        borderRadius: '2px',
      },
      swatch: {
        paddingTop: '10px',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingBottom:'0px',
        background: '#fff',
        borderRadius: '5px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
        width:'92%',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  });
  
  return (
    <Box sx={{ pt: 1 }}>
      {renderContent()}

      <Dialog 
        open={openColorPicker} 
        onClose={handleClose} 
        maxWidth="md"
        BackdropProps={{
          style: {
            backgroundColor: "transparent", // Make backdrop transparent (invisible)
          },
        }}
        PaperProps={{
          sx: { 
            position: 'fixed',
            right: 0,
            top: 123,
            margin: 0,
            height: '87vh',
            width: '315px',
            maxWidth: '400px',
            borderRadius: 0,
            boxShadow: '-8px 0px 24px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto'
          }
        }}
        sx={{
          '& .MuiDialog-container': {
            justifyContent: 'flex-end',
            alignItems: 'stretch'
          },
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(82, 74, 74, 0.2)'
          }
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          pr: 2, 
          pl: 2,
          pt: 2,
          pb: 1,
          bgcolor: 'white',
          flexShrink: 0
        }}>
          <Typography variant="h6">Color Picker</Typography>
          <IconButton onClick={handleClose} size="small">
            <Close sx={{ color: "#000",ontSize: '28px' }}/>
          </IconButton>
        </Box>
        
        {/* <Box sx={{ml:2, mr:2, p:0, borderRadius:1, border: '1px solidrgb(107, 37, 37)',}}> */}
        <Box sx={{ml:3, mr:3 ,boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.4)'}}>
          <SketchPicker 
            color={currentColor} 
            onChangeComplete={handleColorChange}
            disableAlpha={false}
            presetColors={[
              '#d32f2f', '#ffeb3b', '#795548', '#8bc34a',
              '#4caf50', '#9c27b0', '#00bcd4','#673ab7', '#2196f3',
              '#00bcd4', '#4caf50', '#000000', '#424242', 
              '#9e9e9e', '#f5f5f5',
            ]}
            styles={{
              default: {
                picker: { 
                  boxShadow: 'none', 
                  paddingBottom: '0px',
                  borderRadius: '4px',
                  fontFamily: 'inherit',
                  ...styles.swatch,
                  
                },
              }
            }}
          />
          
        </Box>
        <Box sx={{ pl: 3, pr:3, pt:2, pb:1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '14px' }}>
            Choose {currentColorType === 'primary' ? 'Primary' : 
                    currentColorType === 'secondary' ? 'Secondary' : 
                    currentColorType === 'neutral' ? 'Neutral' : 
                    currentColorType === 'mainText' ? 'Main Text' : 'Neutral Text'} Color
          </Typography>
          
          <Typography variant="body2" sx={{ mt: 0.5, fontSize: '10px'}}>Sample:</Typography>
          <Box sx={{ 
            width: '100%', 
            height: '40px', 
            bgcolor: currentColor, 
            mt: 1, 
            borderRadius: '2px' 
          }} />
          
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
            <Typography variant="body2" sx={{ mr: 1, fontWeight: 'bold',fontSize: '13px' }}>Accessibility: Success</Typography>
            <CheckCircle sx={{ color:'#87CF5C', fontSize: 25 }} />
          </Box>
          
          <Typography variant="body2" sx={{ mt: 1, color: '#666', fontSize: '12.5px' }}>
            Primary color must meet a minimum of WCAG 2.0 AA or greater when used as a solid color on a white background and when used as a background color with white text.
          </Typography>
        </Box>
        <Box sx={{ pl: 3, pr:3, pt:0.5, pb:1 }}>
        <Button 
            onClick={handleSaveChanges} 
            variant="contained" 
            color="primary"
            fullWidth
            sx={{ 
              textTransform: "none",
              py: 1, 
              borderRadius: 1,
              boxShadow: 'none',
              fontSize: '13px',
              width: '100%',
              border: '1px solid rgb(252, 247, 247)',
            }}
          >
            Save Changes
          </Button>
          <Button 
            onClick={handleClose} 
            variant="text"
            fullWidth
            sx={{ 
              textTransform: "none",
              color: '#666',
              py: 1,
              borderRadius: 1,
              fontSize: '13px',
              width: '100%',
              border: '1px solid #9e9e9e',
              mt: 1.3
            }}
          >
            Cancel
          </Button>
        </Box>
      </Dialog>
    </Box>
  );
};

export default SettingsContent;
