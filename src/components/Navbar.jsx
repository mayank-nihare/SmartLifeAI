import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Typography,
  Avatar,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import { useUser } from "../context/UserContext";
import UserProfile from "./UserProfile";

const MotionButton = motion.create(Button);

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { user, logout } = useUser();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path) => {
    navigate(path);
    handleClose();
  };

  const handleProfileClick = () => {
    setProfileOpen(true);
    handleClose();
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    handleClose();
  };

  const isActive = (path) => location.pathname === path;

  const renderAuthButtons = () => {
    if (user) {
      return (
        <>
          <IconButton onClick={handleMenu} sx={{ color: "text.primary" }}>
            <Avatar
              src={user.profileImage}
              alt={`${user.firstName} ${user.lastName}`}
              sx={{
                width: 40,
                height: 40,
                border: "2px solid",
                borderColor: "primary.main",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              sx: {
                mt: 1.5,
                minWidth: 200,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <MenuItem onClick={handleProfileClick}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  width: "100%",
                }}
              >
                <Avatar
                  src={user.profileImage}
                  alt={`${user.firstName} ${user.lastName}`}
                  sx={{
                    width: 32,
                    height: 32,
                    border: "1px solid",
                    borderColor: "primary.main",
                  }}
                />
                <Typography>Profile</Typography>
              </Box>
            </MenuItem>
            <MenuItem onClick={() => handleNavigation("/dashboard")}>
              <Typography>Dashboard</Typography>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>
              <Typography color="error">Logout</Typography>
            </MenuItem>
          </Menu>
        </>
      );
    }

    return (
      <>
        <MotionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          color="inherit"
          onClick={() => navigate("/login")}
          sx={{
            color: "text.primary",
            fontWeight: isActive("/login") ? 600 : 400,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          Login
        </MotionButton>
        <MotionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variant="contained"
          onClick={() => navigate("/signup")}
          sx={{
            bgcolor: "primary.main",
            color: "white",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          Sign Up
        </MotionButton>
      </>
    );
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          zIndex: 1200,
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 700,
                cursor: "pointer",
                color: "text.primary",
                textTransform: "uppercase",
                letterSpacing: "1px",
                "&:hover": {
                  color: "primary.main",
                },
              }}
              onClick={() => navigate("/")}
            >
              SmartLife AI
            </Typography>
          </Box>

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
                sx={{ color: "text.primary" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                  sx: {
                    mt: 1.5,
                    minWidth: 200,
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                {!user && (
                  <>
                    <MenuItem
                      onClick={() => handleNavigation("/features")}
                      sx={{
                        color: isActive("/features")
                          ? "primary.main"
                          : "text.primary",
                        fontWeight: isActive("/features") ? 600 : 400,
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Features
                    </MenuItem>
                    <MenuItem
                      onClick={() => handleNavigation("/about")}
                      sx={{
                        color: isActive("/about")
                          ? "primary.main"
                          : "text.primary",
                        fontWeight: isActive("/about") ? 600 : 400,
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      About
                    </MenuItem>
                    <Divider />
                    <MenuItem
                      onClick={() => handleNavigation("/login")}
                      sx={{
                        color: isActive("/login")
                          ? "primary.main"
                          : "text.primary",
                        fontWeight: isActive("/login") ? 600 : 400,
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Login
                    </MenuItem>
                    <MenuItem
                      onClick={() => handleNavigation("/signup")}
                      sx={{
                        color: isActive("/signup")
                          ? "primary.main"
                          : "text.primary",
                        fontWeight: isActive("/signup") ? 600 : 400,
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Sign Up
                    </MenuItem>
                  </>
                )}
                {user && (
                  <>
                    <MenuItem onClick={handleProfileClick}>
                      <Typography>Profile</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => handleNavigation("/dashboard")}>
                      <Typography>Dashboard</Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleLogout}>
                      <Typography color="error">Logout</Typography>
                    </MenuItem>
                  </>
                )}
              </Menu>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              {!user && (
                <>
                  <MotionButton
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    color="inherit"
                    onClick={() => navigate("/features")}
                    sx={{
                      color: "text.primary",
                      fontWeight: isActive("/features") ? 600 : 400,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    Features
                  </MotionButton>
                  <MotionButton
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    color="inherit"
                    onClick={() => navigate("/about")}
                    sx={{
                      color: "text.primary",
                      fontWeight: isActive("/about") ? 600 : 400,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    About
                  </MotionButton>
                </>
              )}
              {renderAuthButtons()}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <UserProfile open={profileOpen} onClose={() => setProfileOpen(false)} />
    </>
  );
};

export default Navbar;
