import React, { useState } from 'react';
import MUIAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { List, ListItemButton, ListItemText, Drawer } from '@mui/material';
import { AppBarConst } from './Const/AppBarConst';

interface AppBarProps {
  onNavigate: (section: string) => void;
}

const AppBarComponent: React.FC<AppBarProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <MUIAppBar component="nav" sx={{ backgroundColor:' #DCC196', pt: 3, py: 1,color: '#A12C2C' }} position="fixed" elevation={0}>
        <Toolbar>
          
          {/* Logo */}
          <img src='/logo.svg' alt="Logo" style={{ height: '40px', marginRight: '20px' }} />
          
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
            }}
          >
            {/* Placeholder for the logo text */}
          </Typography>

          {/* Navbar Items for large screens */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <List sx={{ display: 'flex', padding: 0, margin: 0 }}>
              {AppBarConst.map((item) => (
                <ListItemButton
                  key={item.id}
                  sx={{ display: 'inline', color: '#A12C2C', mr: 2 }}
                  onClick={() => onNavigate(item.route)}
                >
                  <ListItemText
                    primary={<Typography sx={{ fontWeight: 200, fontSize: "20px" }}>{item.label}</Typography>}
                  />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Toolbar>
      </MUIAppBar>

    </>
  );
};

export default AppBarComponent;
