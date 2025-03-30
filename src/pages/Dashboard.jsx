import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  Avatar,
  Divider,
  Button,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  FitnessCenter as FitnessIcon,
  MonitorHeart as HealthIcon,
  Schedule as ScheduleIcon,
  Restaurant as DietIcon,
  Person as ProfileIcon,
  ExitToApp as LogoutIcon,
  EmojiEvents as GoalIcon,
  Timer as TimerIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import FitnessTracker from "../components/FitnessTracker";
import Profile from "./Profile";
import { useUser } from "../context/UserContext";

const MotionBox = motion(Box);

const drawerWidth = 240;

const Dashboard = () => {
  const theme = useTheme();
  const location = useLocation();
  const { user } = useUser();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(
    location.state?.section || "overview"
  );

  useEffect(() => {
    if (location.state?.section) {
      setSelectedSection(location.state.section);
    }
  }, [location.state]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: "Overview", icon: <DashboardIcon />, value: "overview" },
    { text: "Fitness Tracking", icon: <FitnessIcon />, value: "fitness" },
    { text: "Health Monitoring", icon: <HealthIcon />, value: "health" },
    { text: "Schedule", icon: <ScheduleIcon />, value: "schedule" },
    { text: "Diet & Nutrition", icon: <DietIcon />, value: "diet" },
    { text: "Profile", icon: <ProfileIcon />, value: "profile" },
  ];

  const drawer = (
    <Box>
      <Toolbar />
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
      </List>
    </Box>
  );

  const renderContent = () => {
    switch (selectedSection) {
      case "overview":
        return (
          <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Welcome back, {user?.name}!
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={3}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Paper sx={{ p: 2, textAlign: "center" }}>
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
                  <Paper sx={{ p: 2, textAlign: "center" }}>
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
                  <Paper sx={{ p: 2, textAlign: "center" }}>
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
                  <Paper sx={{ p: 2, textAlign: "center" }}>
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
          </Box>
        );
      case "fitness":
        return <FitnessTracker />;
      case "profile":
        return <Profile />;
      case "settings":
        return (
          <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Settings
            </Typography>
            <Typography>Settings content coming soon...</Typography>
          </Box>
        );
      default:
        return (
          <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Welcome back, {user?.name}!
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={3}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Paper sx={{ p: 2, textAlign: "center" }}>
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
                  <Paper sx={{ p: 2, textAlign: "center" }}>
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
                  <Paper sx={{ p: 2, textAlign: "center" }}>
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
                  <Paper sx={{ p: 2, textAlign: "center" }}>
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
              <Grid item xs={12} md={3}>
                <MotionBox
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Paper sx={{ p: 3, mb: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 120,
                          height: 120,
                          bgcolor: theme.palette.primary.main,
                          mb: 2,
                        }}
                      >
                        {user?.name?.charAt(0)}
                      </Avatar>
                      <Typography variant="h6" gutterBottom>
                        {user?.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {user?.email}
                      </Typography>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <FitnessIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Fitness Level"
                          secondary={user?.fitnessLevel}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <GoalIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Goals" secondary={user?.goals} />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <TimerIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Time Availability"
                          secondary={`${user?.timeAvailability} minutes`}
                        />
                      </ListItem>
                    </List>
                    <Button
                      variant="outlined"
                      fullWidth
                      onClick={() => setSelectedSection("profile")}
                      sx={{ mt: 2 }}
                    >
                      View Full Profile
                    </Button>
                  </Paper>
                </MotionBox>
              </Grid>
            </Grid>
          </Box>
        );
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
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
            sx={{ mr: 2, display: { sm: "none" } }}
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
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
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
        }}
      >
        <Toolbar />
        {renderContent()}
      </Box>
    </Box>
  );
};

export default Dashboard;
