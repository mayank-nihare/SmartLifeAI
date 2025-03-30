import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupIcon from "@mui/icons-material/Group";
import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const MotionBox = motion(Box);
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

const About = () => {
  const theme = useTheme();

  const sections = [
    {
      title: "Our Mission",
      description:
        "At SmartLife AI, we're dedicated to revolutionizing personal health and fitness through cutting-edge technology and personalized solutions. Our mission is to empower individuals to achieve their health goals by providing intelligent, data-driven insights and guidance.",
      icon: <FitnessCenterIcon sx={{ fontSize: 40 }} />,
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Our Vision",
      description:
        "We envision a future where everyone has access to personalized health and fitness guidance, making it easier to maintain a healthy lifestyle. Through our AI-powered platform, we aim to create a community of health-conscious individuals who support and inspire each other.",
      icon: <HealthAndSafetyIcon sx={{ fontSize: 40 }} />,
      image:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Our Values",
      description:
        "We believe in innovation, personalization, and community. Our platform combines advanced AI technology with human expertise to deliver the best possible experience for our users.",
      icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
      image:
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      name: "Michael Chen",
      role: "Head of Technology",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Nutritionist",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
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
            About SmartLife AI
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: 800, mx: "auto" }}>
            Empowering your health journey with intelligent technology and
            personalized guidance
          </Typography>
        </MotionBox>

        {/* Main Sections */}
        {sections.map((section, index) => (
          <MotionBox key={section.title} variants={itemVariants} sx={{ mb: 8 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <MotionPaper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
                  }}
                >
                  <Box sx={{ color: theme.palette.primary.main, mb: 2 }}>
                    {section.icon}
                  </Box>
                  <Typography variant="h4" gutterBottom>
                    {section.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    {section.description}
                  </Typography>
                </MotionPaper>
              </Grid>
              <Grid item xs={12} md={6}>
                <MotionPaper
                  elevation={3}
                  sx={{
                    height: 400,
                    overflow: "hidden",
                    borderRadius: 2,
                  }}
                >
                  <Box
                    component="img"
                    src={section.image}
                    alt={section.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                </MotionPaper>
              </Grid>
            </Grid>
          </MotionBox>
        ))}

        {/* Team Section */}
        <MotionBox variants={itemVariants} sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ textAlign: "center", mb: 4 }}
          >
            Our Team
          </Typography>
          <Grid container spacing={4}>
            {team.map((member) => (
              <Grid item xs={12} md={4} key={member.name}>
                <MotionPaper
                  elevation={3}
                  sx={{
                    p: 3,
                    textAlign: "center",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    sx={{
                      width: 150,
                      height: 150,
                      mb: 2,
                      border: `4px solid ${theme.palette.primary.main}`,
                    }}
                  />
                  <Typography variant="h6" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {member.role}
                  </Typography>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>
        </MotionBox>

        {/* Why Choose Us Section */}
        <MotionBox
          variants={itemVariants}
          sx={{
            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
            borderRadius: 2,
            p: 6,
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography variant="h3" component="h2" gutterBottom>
            Why Choose SmartLife AI?
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ p: 2 }}>
                <GroupIcon sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="h6">Community Support</Typography>
                <Typography variant="body2">
                  Join a community of like-minded individuals
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ p: 2 }}>
                <SecurityIcon sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="h6">Data Security</Typography>
                <Typography variant="body2">
                  Your data is protected with enterprise-grade security
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ p: 2 }}>
                <SupportAgentIcon sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="h6">24/7 Support</Typography>
                <Typography variant="body2">
                  Expert support available around the clock
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ p: 2 }}>
                <EmojiEventsIcon sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="h6">Proven Results</Typography>
                <Typography variant="body2">
                  Thousands of success stories from our users
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </MotionBox>
      </Container>
    </MotionBox>
  );
};

export default About;
