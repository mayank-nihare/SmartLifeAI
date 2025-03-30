import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Paper,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BarChartIcon from "@mui/icons-material/BarChart";
import GroupIcon from "@mui/icons-material/Group";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { useUser } from "../context/UserContext";

const MotionBox = motion.create(Box);
const MotionCard = motion.create(Card);

const LandingPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { user } = useUser();

  const handleGetStarted = () => {
    if (user) {
      navigate("/fitness-assessment");
    } else {
      navigate("/signup");
    }
  };

  const handleFeatureClick = (feature) => {
    if (feature.title === "Fitness Tracking") {
      handleGetStarted();
    }
  };

  const features = [
    {
      title: "Fitness Tracking",
      description:
        "Track your workouts, monitor progress, and get personalized recommendations based on your goals and performance.",
      icon: <FitnessCenterIcon sx={{ fontSize: 40 }} />,
      image:
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      isClickable: true,
    },
    {
      title: "Health Monitoring",
      description:
        "Comprehensive health tracking including vital signs, sleep patterns, and overall wellness metrics.",
      icon: <HealthAndSafetyIcon sx={{ fontSize: 40 }} />,
      image:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Time Scheduling",
      description:
        "Smart scheduling system that helps you balance workouts, meals, and rest periods for optimal results.",
      icon: <AccessTimeIcon sx={{ fontSize: 40 }} />,
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Diet & Nutrition",
      description:
        "Personalized nutrition plans and tracking tools to help you maintain a healthy diet and achieve your goals.",
      icon: <RestaurantIcon sx={{ fontSize: 40 }} />,
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  const benefits = [
    {
      title: "Proven Results",
      description:
        "Join thousands of users who have achieved their fitness goals with our platform.",
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
    },
    {
      title: "Community Support",
      description:
        "Connect with like-minded individuals and share your fitness journey.",
      icon: <GroupIcon sx={{ fontSize: 40 }} />,
    },
    {
      title: "Data Security",
      description:
        "Your health data is protected with enterprise-grade security measures.",
      icon: <BarChartIcon sx={{ fontSize: 40 }} />,
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: "white",
          py: 8,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                Transform Your Life with SmartLife AI
              </Typography>
              <Typography variant="h5" paragraph sx={{ mb: 4 }}>
                Your personal AI-powered fitness companion for a healthier,
                happier lifestyle.
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={handleGetStarted}
                sx={{
                  bgcolor: "white",
                  color: theme.palette.primary.main,
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.9)",
                  },
                }}
              >
                {user ? "Continue Your Journey" : "Get Started"}
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Feature Preview"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </MotionBox>

      {/* Features Section */}
      <Box sx={{ py: 8, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography variant="h2" component="h2" gutterBottom>
              Smart Features for Your Fitness Journey
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Discover how our AI-powered platform helps you achieve your
              fitness goals
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {features.map((feature) => (
              <Grid item xs={12} md={6} key={feature.title}>
                <MotionCard
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.2 }}
                  onClick={() =>
                    feature.isClickable && handleFeatureClick(feature)
                  }
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    cursor: feature.isClickable ? "pointer" : "default",
                    "&:hover": {
                      boxShadow: feature.isClickable ? 6 : 1,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={feature.image}
                    alt={feature.title}
                    sx={{
                      objectFit: "cover",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Box sx={{ color: "primary.main", mr: 1 }}>
                        {feature.icon}
                      </Box>
                      <Typography variant="h5" component="h3">
                        {feature.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1" paragraph>
                      {feature.description}
                    </Typography>
                    {feature.isClickable && (
                      <Box
                        sx={{ display: "flex", alignItems: "center", mt: 2 }}
                      >
                        <Typography
                          variant="body2"
                          color="primary"
                          sx={{ mr: 1 }}
                        >
                          Try it now
                        </Typography>
                        <ArrowForwardIcon color="primary" />
                      </Box>
                    )}
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box sx={{ py: 8, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography variant="h2" component="h2" gutterBottom>
              Why Choose SmartLife AI?
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Experience the difference with our comprehensive fitness solution
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {benefits.map((benefit) => (
              <Grid item xs={12} md={4} key={benefit.title}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  <Box sx={{ color: "primary.main", mb: 2 }}>
                    {benefit.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {benefit.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          py: 8,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: "white",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ mb: 4, fontWeight: 700 }}
          >
            Ready to Transform Your Life?
          </Typography>
          <Typography variant="h6" align="center" paragraph sx={{ mb: 4 }}>
            Join thousands of users who have already started their fitness
            journey with SmartLife AI.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              size="large"
              onClick={handleGetStarted}
              sx={{
                bgcolor: "white",
                color: theme.palette.primary.main,
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.9)",
                },
              }}
            >
              {user ? "Continue Your Journey" : "Get Started Now"}
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
