import { Box, Button, Container, Grid, Typography, Card, CardContent, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import ScheduleIcon from '@mui/icons-material/Schedule';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const MotionBox = motion(Box);

const features = [
  {
    icon: <FitnessCenterIcon sx={{ fontSize: 40 }} />,
    title: 'Fitness Tracking',
    description: 'Track your workouts, set goals, and monitor your progress with AI-powered insights.'
  },
  {
    icon: <MonitorHeartIcon sx={{ fontSize: 40 }} />,
    title: 'Health Monitoring',
    description: 'Monitor vital signs, sleep patterns, and overall health metrics with smart analytics.'
  },
  {
    icon: <ScheduleIcon sx={{ fontSize: 40 }} />,
    title: 'Time Scheduling',
    description: 'Create personalized workout schedules and get reminders for your fitness routine.'
  },
  {
    icon: <RestaurantIcon sx={{ fontSize: 40 }} />,
    title: 'Diet & Nutrition',
    description: 'Get AI-powered meal plans and nutritional guidance tailored to your goals.'
  }
];

const LandingPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: 'white',
          py: 8,
          textAlign: 'center'
        }}
      >
        <Container>
          <Typography variant="h1" component="h1" gutterBottom>
            SmartLife AI
          </Typography>
          <Typography variant="h5" gutterBottom>
            Your AI-Powered Fitness Companion
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => navigate('/signup')}
              sx={{ mr: 2 }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
          </Box>
        </Container>
      </MotionBox>

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h2" component="h2" textAlign="center" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box sx={{ color: theme.palette.primary.main, mb: 2 }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        sx={{
          background: theme.palette.grey[100],
          py: 8,
          textAlign: 'center'
        }}
      >
        <Container>
          <Typography variant="h3" component="h2" gutterBottom>
            Ready to Transform Your Life?
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Join thousands of users who have already started their fitness journey with SmartLife AI
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/signup')}
          >
            Start Your Journey Today
          </Button>
        </Container>
      </MotionBox>
    </Box>
  );
};

export default LandingPage; 