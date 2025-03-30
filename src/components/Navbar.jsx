import { useState, useEffect } from "react";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";

const MotionButton = motion.create(Button);

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

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

  const isActive = (path) => location.pathname === path;

  return (
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
              sx={{ color: scrolled ? "text.primary" : "white" }}
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
              <MenuItem
                onClick={() => handleNavigation("/")}
                sx={{
                  color: isActive("/") ? "primary.main" : "text.primary",
                  fontWeight: isActive("/") ? 600 : 400,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Home
              </MenuItem>
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
                  color: isActive("/about") ? "primary.main" : "text.primary",
                  fontWeight: isActive("/about") ? 600 : 400,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                About
              </MenuItem>
              <MenuItem
                onClick={() => handleNavigation("/login")}
                sx={{
                  color: isActive("/login") ? "primary.main" : "text.primary",
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
                  color: isActive("/signup") ? "primary.main" : "text.primary",
                  fontWeight: isActive("/signup") ? 600 : 400,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Sign Up
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 2 }}>
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
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
