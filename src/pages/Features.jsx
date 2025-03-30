import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BarChartIcon from "@mui/icons-material/BarChart";
import GroupIcon from "@mui/icons-material/Group";

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionPaper = motion(Paper);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Features = () => {
  const theme = useTheme();

  const features = [
    {
      title: "Fitness Tracking",
      description:
        "Track your workouts, monitor progress, and get personalized recommendations based on your goals and performance.",
      image:
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      color: "#FF6B6B",
      icon: <FitnessCenterIcon sx={{ fontSize: 40 }} />,
      benefits: [
        "Real-time workout tracking",
        "Custom exercise library",
        "Progress visualization",
        "Personalized workout plans",
      ],
    },
    {
      title: "Health Monitoring",
      description:
        "Comprehensive health tracking including vital signs, sleep patterns, and overall wellness metrics.",
      image:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      color: "#4ECDC4",
      icon: <HealthAndSafetyIcon sx={{ fontSize: 40 }} />,
      benefits: [
        "Vital signs monitoring",
        "Sleep quality analysis",
        "Health trend tracking",
        "AI-powered health insights",
      ],
    },
    {
      title: "Time Scheduling",
      description:
        "Smart scheduling system that helps you balance workouts, meals, and rest periods for optimal results.",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      color: "#45B7D1",
      icon: <AccessTimeIcon sx={{ fontSize: 40 }} />,
      benefits: [
        "Smart workout scheduling",
        "Meal planning integration",
        "Rest period optimization",
        "Calendar synchronization",
      ],
    },
    {
      title: "Diet & Nutrition",
      description:
        "Personalized nutrition plans and tracking tools to help you maintain a healthy diet and achieve your goals.",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      color: "#96CEB4",
      icon: <RestaurantIcon sx={{ fontSize: 40 }} />,
      benefits: [
        "Meal planning tools",
        "Nutrition tracking",
        "Recipe suggestions",
        "Dietary restriction support",
      ],
    },
  ];

  const stats = [
    { label: "Active Users", value: "50K+" },
    { label: "Workouts Tracked", value: "1M+" },
    { label: "Success Rate", value: "95%" },
    { label: "Community Members", value: "100K+" },
  ];

  return (
    <MotionBox
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      sx={{ py: 8 }}
    >
      <Container maxWidth="lg">
        {/* Hero Section */}
        <MotionBox
          variants={itemVariants}
          sx={{
            textAlign: "center",
            mb: 8,
            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
            borderRadius: 2,
            p: 6,
            color: "white",
            boxShadow: 3,
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Smart Features for Your Fitness Journey
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: 800, mx: "auto" }}>
            Discover how our AI-powered platform helps you achieve your fitness
            goals
          </Typography>
        </MotionBox>

        {/* Stats Section */}
        <MotionBox variants={itemVariants} sx={{ mb: 8 }}>
          <Grid container spacing={4}>
            {stats.map((stat) => (
              <Grid item xs={6} md={3} key={stat.label}>
                <MotionPaper
                  elevation={3}
                  sx={{
                    p: 3,
                    textAlign: "center",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
                  }}
                >
                  <Typography
                    variant="h3"
                    component="div"
                    gutterBottom
                    color="primary"
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {stat.label}
                  </Typography>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>
        </MotionBox>

        {/* Features Grid */}
        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid item xs={12} md={6} key={feature.title}>
              <MotionCard
                variants={itemVariants}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
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
                    <Box sx={{ color: feature.color, mr: 1 }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h5" component="h2">
                      {feature.title}
                    </Typography>
                  </Box>
                  <Typography variant="body1" paragraph>
                    {feature.description}
                  </Typography>
                  <List>
                    {feature.benefits.map((benefit) => (
                      <ListItem key={benefit}>
                        <ListItemIcon>
                          <CheckCircleIcon sx={{ color: feature.color }} />
                        </ListItemIcon>
                        <ListItemText primary={benefit} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <MotionBox
          variants={itemVariants}
          sx={{
            mt: 8,
            textAlign: "center",
            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
            borderRadius: 2,
            p: 6,
            color: "white",
          }}
        >
          <Typography variant="h3" component="h2" gutterBottom>
            Ready to Start Your Fitness Journey?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Join thousands of users who have transformed their lives with
            SmartLife AI
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "white",
              color: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              },
            }}
          >
            Get Started Now
          </Button>
        </MotionBox>
      </Container>
    </MotionBox>
  );
};

export default Features;
