import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useTheme,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import TimerIcon from "@mui/icons-material/Timer";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useUser } from "../context/UserContext";

const MotionBox = motion.create(Box);
const MotionPaper = motion.create(Paper);
const MotionCard = motion.create(Card);

const FitnessAssessment = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { updateUser } = useUser();
  const [activeStep, setActiveStep] = useState(0);
  const [answers, setAnswers] = useState({
    gender: "",
    fitnessLevel: "",
    goals: "",
    timeAvailability: "",
    healthConditions: "",
    workoutPreferences: "",
  });

  const steps = [
    "Gender",
    "Fitness Level",
    "Goals",
    "Time Availability",
    "Health Conditions",
    "Workout Preferences",
  ];

  const questions = [
    {
      title: "What's your gender?",
      options: [
        {
          value: "male",
          label: "Male",
          description: "Male",
          image:
            "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        },
        {
          value: "female",
          label: "Female",
          description: "Female",
          image:
            "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        },
      ],
      isGenderSelection: true,
    },
    {
      title: "What's your current fitness level?",
      options: [
        {
          value: "beginner",
          label: "Beginner",
          description: "New to fitness or returning after a long break",
        },
        {
          value: "intermediate",
          label: "Intermediate",
          description: "Regular exercise but looking to improve",
        },
        {
          value: "advanced",
          label: "Advanced",
          description: "Experienced with intense workouts",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80",
    },
    {
      title: "What are your primary fitness goals?",
      options: [
        {
          value: "weightLoss",
          label: "Weight Loss",
          description: "Focus on burning calories and reducing body fat",
        },
        {
          value: "muscleGain",
          label: "Muscle Gain",
          description: "Build strength and increase muscle mass",
        },
        {
          value: "endurance",
          label: "Endurance",
          description: "Improve cardiovascular fitness and stamina",
        },
        {
          value: "flexibility",
          label: "Flexibility",
          description: "Enhance mobility and prevent injuries",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1535743686920-55e4145369b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    },
    {
      title: "How much time can you dedicate to workouts?",
      options: [
        {
          value: "30min",
          label: "30 minutes",
          description: "Quick, focused workouts",
        },
        {
          value: "45min",
          label: "45 minutes",
          description: "Balanced workout sessions",
        },
        {
          value: "60min",
          label: "60 minutes",
          description: "Comprehensive training",
        },
        {
          value: "90min",
          label: "90+ minutes",
          description: "Intensive training sessions",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    },
    {
      title: "Do you have any health conditions or injuries?",
      options: [
        {
          value: "none",
          label: "None",
          description: "No current health issues",
        },
        {
          value: "joint",
          label: "Joint Issues",
          description: "Knee, back, or other joint problems",
        },
        {
          value: "cardio",
          label: "Cardiovascular",
          description: "Heart or blood pressure concerns",
        },
        {
          value: "other",
          label: "Other",
          description: "Other health considerations",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "What type of workouts do you prefer?",
      options: [
        { value: "gym", label: "Gym", description: "Traditional gym workouts" },
        { value: "home", label: "Home", description: "Workouts at home" },
        {
          value: "outdoor",
          label: "Outdoor",
          description: "Outdoor activities",
        },
        {
          value: "group",
          label: "Group Classes",
          description: "Group fitness sessions",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      // Save assessment results
      updateUser({ fitnessAssessment: answers });
      navigate("/dashboard", { state: { section: "fitness" } });
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleAnswer = (value) => {
    setAnswers((prev) => ({
      ...prev,
      [Object.keys(answers)[activeStep]]: value,
    }));
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt: 8,
        pb: 4,
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
      }}
    >
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            align="center"
            gutterBottom
            sx={{ mb: 4, fontWeight: 700 }}
          >
            Fitness Assessment
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ mb: 6 }}
          >
            Let's create your personalized fitness plan
          </Typography>

          <Stepper activeStep={activeStep} sx={{ mb: 6 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <AnimatePresence mode="wait">
            <MotionPaper
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              sx={{ p: 4, mb: 4 }}
            >
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: 600, textAlign: "center", mb: 4 }}
                  >
                    {questions[activeStep].title}
                  </Typography>
                  <FormControl component="fieldset" sx={{ width: "100%" }}>
                    <RadioGroup
                      value={answers[Object.keys(answers)[activeStep]]}
                      onChange={(e) => handleAnswer(e.target.value)}
                      sx={{ width: "100%" }}
                    >
                      {questions[activeStep].isGenderSelection ? (
                        <Grid container spacing={3} justifyContent="center">
                          {questions[activeStep].options.map((option) => (
                            <Grid item xs={12} sm={6} key={option.value}>
                              <MotionCard
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                sx={{
                                  cursor: "pointer",
                                  height: "100%",
                                  display: "flex",
                                  flexDirection: "column",
                                  border: (theme) =>
                                    answers[
                                      Object.keys(answers)[activeStep]
                                    ] === option.value
                                      ? `2px solid ${theme.palette.primary.main}`
                                      : "none",
                                  "&:hover": {
                                    borderColor: "primary.main",
                                  },
                                }}
                                onClick={() => handleAnswer(option.value)}
                              >
                                <CardMedia
                                  component="img"
                                  height="400"
                                  image={option.image}
                                  alt={option.label}
                                  sx={{ objectFit: "cover" }}
                                />
                                <CardContent
                                  sx={{ flexGrow: 1, textAlign: "center" }}
                                >
                                  <FormControlLabel
                                    value={option.value}
                                    control={<Radio />}
                                    label={
                                      <Box>
                                        <Typography
                                          variant="h5"
                                          sx={{
                                            fontWeight: 600,
                                            fontSize: {
                                              xs: "1.2rem",
                                              sm: "1.5rem",
                                            },
                                          }}
                                        >
                                          {option.label}
                                        </Typography>
                                        <Typography
                                          variant="body1"
                                          color="text.secondary"
                                          sx={{
                                            fontSize: {
                                              xs: "0.9rem",
                                              sm: "1rem",
                                            },
                                          }}
                                        >
                                          {option.description}
                                        </Typography>
                                      </Box>
                                    }
                                  />
                                </CardContent>
                              </MotionCard>
                            </Grid>
                          ))}
                        </Grid>
                      ) : (
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            {questions[activeStep].options.map((option) => (
                              <MotionCard
                                key={option.value}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                sx={{
                                  mb: 2,
                                  cursor: "pointer",
                                  border: (theme) =>
                                    answers[
                                      Object.keys(answers)[activeStep]
                                    ] === option.value
                                      ? `2px solid ${theme.palette.primary.main}`
                                      : "none",
                                  "&:hover": {
                                    borderColor: "primary.main",
                                  },
                                }}
                                onClick={() => handleAnswer(option.value)}
                              >
                                <CardContent>
                                  <FormControlLabel
                                    value={option.value}
                                    control={<Radio />}
                                    label={
                                      <Box>
                                        <Typography
                                          variant="subtitle1"
                                          sx={{
                                            fontWeight: 600,
                                            fontSize: {
                                              xs: "0.9rem",
                                              sm: "1rem",
                                            },
                                          }}
                                        >
                                          {option.label}
                                        </Typography>
                                        <Typography
                                          variant="body2"
                                          color="text.secondary"
                                          sx={{
                                            fontSize: {
                                              xs: "0.8rem",
                                              sm: "0.9rem",
                                            },
                                          }}
                                        >
                                          {option.description}
                                        </Typography>
                                      </Box>
                                    }
                                  />
                                </CardContent>
                              </MotionCard>
                            ))}
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <MotionCard
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.2 }}
                              sx={{ height: "100%" }}
                            >
                              <CardMedia
                                component="img"
                                height="400"
                                image={questions[activeStep].image}
                                alt={questions[activeStep].title}
                                sx={{ objectFit: "cover" }}
                              />
                            </MotionCard>
                          </Grid>
                        </Grid>
                      )}
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </MotionPaper>
          </AnimatePresence>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ minWidth: 120 }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={!answers[Object.keys(answers)[activeStep]]}
              sx={{
                minWidth: 120,
                bgcolor: "primary.main",
                "&:hover": {
                  bgcolor: "primary.dark",
                },
              }}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default FitnessAssessment;
