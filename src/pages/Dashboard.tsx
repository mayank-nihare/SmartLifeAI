import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  FitnessCenter as FitnessIcon,
  MonitorHeart as HealthIcon,
  Schedule as ScheduleIcon,
  Restaurant as DietIcon,
  Person as ProfileIcon,
  ExitToApp as LogoutIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const drawerWidth = 240;

const Dashboard = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState('overview');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Overview', icon: <DashboardIcon />, value: 'overview' },
    { text: 'Fitness Tracking', icon: <FitnessIcon />, value: 'fitness' },
    { text: 'Health Monitoring', icon: <HealthIcon />, value: 'health' },
    { text: 'Schedule', icon: <ScheduleIcon />, value: 'schedule' },
    { text: 'Diet & Nutrition', icon: <DietIcon />, value: 'diet' },
    { text: 'Profile', icon: <ProfileIcon />, value: 'profile' },
  ];

  const drawer = (
    <Box>
      <Toolbar>
        <Typography variant="h6" noWrap>
          SmartLife AI
        </Typography>
      </Toolbar>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => setSelectedSection(item.value)}
            selected={selectedSection === item.value}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <ListItem button>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );

  const renderContent = () => {
    switch (selectedSection) {
      case 'overview':
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Paper sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h6">Today's Workout</Typography>
                  <Typography variant="h4" color="primary">
                    45 min
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Strength Training
                  </Typography>
                </Paper>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Paper sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h6">Calories Burned</Typography>
                  <Typography variant="h4" color="primary">
                    320
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Today's Goal: 500
                  </Typography>
                </Paper>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Paper sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h6">Water Intake</Typography>
                  <Typography variant="h4" color="primary">
                    1.8L
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Daily Goal: 2.5L
                  </Typography>
                </Paper>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Paper sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h6">Sleep Quality</Typography>
                  <Typography variant="h4" color="primary">
                    85%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    7h 30m Last Night
                  </Typography>
                </Paper>
              </MotionBox>
            </Grid>
          </Grid>
        );
      default:
        return (
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h5">
              {menuItems.find((item) => item.value === selectedSection)?.text} Section
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Coming soon...
            </Typography>
          </Paper>
        );
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: '64px',
        }}
      >
        <Container maxWidth="lg">
          {renderContent()}
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard; 