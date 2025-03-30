import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  Grid,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  useTheme,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  FitnessCenter as FitnessIcon,
  Timer as TimerIcon,
  EmojiEvents as GoalIcon,
  LocalHospital as HealthIcon,
  DirectionsRun as WorkoutIcon,
  TrendingUp as ProgressIcon,
  DirectionsBike as BikeIcon,
  Pool as SwimIcon,
  Hiking as HikeIcon,
  SelfImprovement as YogaIcon,
  Add as AddIcon,
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { useUser } from "../context/UserContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as ChartTooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const exerciseImages = {
  cardio:
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  strength:
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  yoga: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  hiit: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
};

const getExerciseRecommendations = (assessment) => {
  const recommendations = {
    exercises: [],
    tips: [],
  };

  switch (assessment.goals) {
    case "weightLoss":
      recommendations.exercises = [
        {
          name: "High-Intensity Interval Training (HIIT)",
          duration: "20-30 minutes",
          intensity: "High",
          image: exerciseImages.hiit,
          description:
            "Alternate between intense bursts of activity and short recovery periods",
          specificExercises: [
            {
              name: "Burpees",
              sets: "3 sets of 12 reps",
              rest: "30 seconds between sets",
              animation:
                "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-burpees-42948-large.mp4",
            },
            {
              name: "Mountain Climbers",
              sets: "4 sets of 30 seconds",
              rest: "20 seconds between sets",
              animation:
                "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-mountain-climbers-42949-large.mp4",
            },
            {
              name: "Jump Squats",
              sets: "3 sets of 15 reps",
              rest: "30 seconds between sets",
              animation:
                "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-jump-squats-42950-large.mp4",
            },
          ],
          tips: [
            "Start with 30 seconds work, 30 seconds rest",
            "Gradually increase work intervals",
          ],
        },
        {
          name: "Cardio Workouts",
          duration: "30-45 minutes",
          intensity: "Moderate to High",
          image: exerciseImages.cardio,
          description: "Sustained aerobic activity to burn calories",
          specificExercises: [
            {
              name: "Running",
              sets: "30-45 minutes",
              rest: "As needed",
              animation:
                "https://assets.mixkit.co/videos/preview/mixkit-woman-running-on-treadmill-42951-large.mp4",
            },
            {
              name: "Cycling",
              sets: "30-45 minutes",
              rest: "As needed",
              animation:
                "https://assets.mixkit.co/videos/preview/mixkit-woman-cycling-42952-large.mp4",
            },
            {
              name: "Swimming",
              sets: "30-45 minutes",
              rest: "As needed",
              animation:
                "https://assets.mixkit.co/videos/preview/mixkit-woman-swimming-42953-large.mp4",
            },
          ],
          tips: [
            "Maintain a steady pace",
            "Include hills or resistance for intensity",
          ],
        },
        {
          name: "Strength Training",
          duration: "45-60 minutes",
          intensity: "Moderate",
          image: exerciseImages.strength,
          description: "Build muscle to increase metabolism",
          specificExercises: [
            {
              name: "Squats",
              sets: "4 sets of 12 reps",
              rest: "60 seconds between sets",
              animation:
                "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-squats-42954-large.mp4",
            },
            {
              name: "Push-ups",
              sets: "3 sets of 10 reps",
              rest: "45 seconds between sets",
              animation:
                "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-push-ups-42955-large.mp4",
            },
            {
              name: "Plank",
              sets: "3 sets of 45 seconds",
              rest: "30 seconds between sets",
              animation:
                "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-plank-42956-large.mp4",
            },
          ],
          tips: [
            "Focus on compound movements",
            "Use moderate weights with higher reps",
          ],
        },
      ];
      recommendations.tips = [
        "Aim for 10,000 steps daily",
        "Include 2-3 HIIT sessions per week",
        "Stay hydrated during workouts",
      ];
      break;

    case "muscleGain":
      recommendations.exercises = [
        {
          name: "Strength Training",
          duration: "60-90 minutes",
          intensity: "High",
          image: exerciseImages.strength,
          description: "Focus on progressive overload and compound movements",
          specificExercises: [
            {
              name: "Barbell Squats",
              sets: "4 sets of 8-10 reps",
              rest: "90 seconds between sets",
              animation:
                "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-barbell-squats-42957-large.mp4",
            },
            {
              name: "Deadlifts",
              sets: "3 sets of 6-8 reps",
              rest: "90 seconds between sets",
              animation:
                "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-deadlifts-42958-large.mp4",
            },
            {
              name: "Bench Press",
              sets: "4 sets of 8-10 reps",
              rest: "90 seconds between sets",
              animation:
                "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-bench-press-42959-large.mp4",
            },
          ],
          tips: [
            "Increase weight gradually",
            "Rest 60-90 seconds between sets",
          ],
        },
        {
          name: "Resistance Training",
          duration: "45-60 minutes",
          intensity: "Moderate to High",
          image: exerciseImages.strength,
          description: "Target specific muscle groups with isolation exercises",
          specificExercises: [
            {
              name: "Bicep Curls",
              sets: "3 sets of 12 reps",
              rest: "60 seconds between sets",
              animation:
                "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-bicep-curls-42960-large.mp4",
            },
            {
              name: "Tricep Extensions",
              sets: "3 sets of 12 reps",
              rest: "60 seconds between sets",
              animation:
                "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-tricep-extensions-42961-large.mp4",
            },
            {
              name: "Lateral Raises",
              sets: "3 sets of 12 reps",
              rest: "60 seconds between sets",
              animation:
                "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-lateral-raises-42962-large.mp4",
            },
          ],
          tips: ["Focus on form", "Use controlled movements"],
        },
      ];
      recommendations.tips = [
        "Focus on progressive overload",
        "Get adequate protein intake",
        "Allow 48 hours rest between muscle groups",
      ];
      break;

    case "endurance":
      recommendations.exercises = [
        {
          name: "Long-Distance Cardio",
          duration: "45-60 minutes",
          intensity: "Moderate",
          image: exerciseImages.cardio,
          description: "Build cardiovascular endurance with sustained activity",
          specificExercises: [
            {
              name: "Running",
              sets: "45-60 minutes",
              rest: "As needed",
              animation:
                "https://assets.mixkit.co/videos/preview/mixkit-woman-running-42963-large.mp4",
            },
            {
              name: "Cycling",
              sets: "45-60 minutes",
              rest: "As needed",
              animation:
                "https://assets.mixkit.co/videos/preview/mixkit-woman-cycling-42964-large.mp4",
            },
            {
              name: "Swimming",
              sets: "45-60 minutes",
              rest: "As needed",
              animation:
                "https://assets.mixkit.co/videos/preview/mixkit-woman-swimming-42965-large.mp4",
            },
          ],
          tips: ["Maintain steady pace", "Gradually increase duration"],
        },
        {
          name: "Interval Training",
          duration: "30-45 minutes",
          intensity: "High",
          image: exerciseImages.hiit,
          description: "Alternate between high and low intensity",
          specificExercises: [
            {
              name: "Sprint Intervals",
              sets: "8 sets of 30 seconds sprint, 90 seconds rest",
              rest: "90 seconds between sets",
              animation:
                "https://assets.mixkit.co/videos/preview/mixkit-woman-sprinting-42966-large.mp4",
            },
            {
              name: "Hill Repeats",
              sets: "6 sets of 1 minute uphill, 2 minutes recovery",
              rest: "2 minutes between sets",
              animation:
                "https://assets.mixkit.co/videos/preview/mixkit-woman-running-uphill-42967-large.mp4",
            },
          ],
          tips: [
            "Start with 1:1 work-rest ratio",
            "Increase intensity gradually",
          ],
        },
      ];
      recommendations.tips = [
        "Gradually increase workout duration",
        "Include recovery days",
        "Monitor heart rate during workouts",
      ];
      break;

    case "flexibility":
      recommendations.exercises = [
        {
          name: "Yoga",
          duration: "45-60 minutes",
          intensity: "Low to Moderate",
          image: exerciseImages.yoga,
          description: "Improve flexibility and balance",
          specificExercises: [
            {
              name: "Sun Salutations",
              sets: "3 rounds",
              rest: "30 seconds between rounds",
              animation:
                "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-sun-salutations-42968-large.mp4",
            },
            {
              name: "Warrior Poses",
              sets: "Hold each pose for 30 seconds",
              rest: "15 seconds between poses",
              animation:
                "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-warrior-pose-42969-large.mp4",
            },
            {
              name: "Downward Dog",
              sets: "Hold for 1 minute",
              rest: "30 seconds rest",
              animation:
                "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-downward-dog-42970-large.mp4",
            },
          ],
          tips: ["Focus on proper breathing", "Hold poses for 30-60 seconds"],
        },
        {
          name: "Dynamic Stretching",
          duration: "20-30 minutes",
          intensity: "Low",
          image: exerciseImages.yoga,
          description: "Active stretching to improve range of motion",
          specificExercises: [
            {
              name: "Arm Circles",
              sets: "2 sets of 20 reps",
              rest: "15 seconds between sets",
              animation:
                "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-arm-circles-42971-large.mp4",
            },
            {
              name: "Leg Swings",
              sets: "2 sets of 20 reps each leg",
              rest: "15 seconds between sets",
              animation:
                "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-leg-swings-42972-large.mp4",
            },
            {
              name: "Hip Circles",
              sets: "2 sets of 20 reps each direction",
              rest: "15 seconds between sets",
              animation:
                "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-hip-circles-42973-large.mp4",
            },
          ],
          tips: ["Move through stretches slowly", "Don't force movements"],
        },
      ];
      recommendations.tips = [
        "Stretch after workouts",
        "Practice daily mobility exercises",
        "Listen to your body's limits",
      ];
      break;
  }

  return recommendations;
};

const FitnessTracker = () => {
  const theme = useTheme();
  const { user } = useUser();
  const assessment = user?.fitnessAssessment;
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [progress, setProgress] = useState({
    daily: [],
    weekly: [],
    completedExercises: [],
  });

  // Sample data for charts (replace with actual data from backend)
  const [chartData, setChartData] = useState([
    {
      name: "Mon",
      workoutTime: 45,
      caloriesBurned: 350,
      exercisesCompleted: 3,
    },
    {
      name: "Tue",
      workoutTime: 60,
      caloriesBurned: 450,
      exercisesCompleted: 4,
    },
    {
      name: "Wed",
      workoutTime: 30,
      caloriesBurned: 250,
      exercisesCompleted: 2,
    },
    {
      name: "Thu",
      workoutTime: 45,
      caloriesBurned: 350,
      exercisesCompleted: 3,
    },
    {
      name: "Fri",
      workoutTime: 60,
      caloriesBurned: 450,
      exercisesCompleted: 4,
    },
    {
      name: "Sat",
      workoutTime: 45,
      caloriesBurned: 350,
      exercisesCompleted: 3,
    },
    {
      name: "Sun",
      workoutTime: 30,
      caloriesBurned: 250,
      exercisesCompleted: 2,
    },
  ]);

  const [exerciseCompletion, setExerciseCompletion] = useState([
    { name: "Burpees", completed: 8, target: 12, status: "incomplete" },
    { name: "Push-ups", completed: 8, target: 10, status: "incomplete" },
    { name: "Squats", completed: 10, target: 12, status: "incomplete" },
    { name: "Plank", completed: 30, target: 45, status: "incomplete" },
  ]);

  const handleOpenDialog = (exercise) => {
    setSelectedExercise(exercise);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedExercise(null);
  };

  const handleUpdateProgress = (exercise, completed, notes) => {
    // Update exercise completion status
    setExerciseCompletion((prevExercises) =>
      prevExercises.map((ex) => {
        if (ex.name === exercise.name) {
          return {
            ...ex,
            completed: completed,
            status: "completed",
          };
        }
        return ex;
      })
    );

    // Update chart data for today
    const today = new Date().toLocaleDateString("en-US", { weekday: "short" });
    setChartData((prevData) =>
      prevData.map((day) => {
        if (day.name === today) {
          return {
            ...day,
            workoutTime: day.workoutTime + 15, // Add 15 minutes for the exercise
            caloriesBurned: day.caloriesBurned + 100, // Approximate calories burned
            exercisesCompleted: day.exercisesCompleted + 1,
          };
        }
        return day;
      })
    );

    handleCloseDialog();
  };

  const handleSkipExercise = (exercise) => {
    setExerciseCompletion((prevExercises) =>
      prevExercises.map((ex) => {
        if (ex.name === exercise.name) {
          return {
            ...ex,
            status: "skipped",
          };
        }
        return ex;
      })
    );
  };

  if (!assessment) {
    return (
      <Paper sx={{ p: 3, textAlign: "center" }}>
        <Typography variant="h6" color="text.secondary">
          Please complete the fitness assessment to get your personalized plan
        </Typography>
      </Paper>
    );
  }

  // Calculate personalized goals based on assessment
  const getPersonalizedGoals = () => {
    const goals = {
      dailyWorkoutTime: assessment.timeAvailability,
      weeklyWorkouts:
        assessment.fitnessLevel === "beginner"
          ? 3
          : assessment.fitnessLevel === "intermediate"
          ? 4
          : 5,
      caloriesBurned:
        assessment.goals === "weightLoss"
          ? 500
          : assessment.goals === "muscleGain"
          ? 300
          : 400,
      waterIntake: 2.5, // liters
      proteinIntake: assessment.goals === "muscleGain" ? 1.8 : 1.2, // grams per kg of body weight
    };

    return goals;
  };

  const goals = getPersonalizedGoals();

  // Get workout recommendations based on assessment
  const getWorkoutRecommendations = () => {
    const recommendations = {
      workoutTypes: [],
      intensity: "",
      duration: "",
    };

    switch (assessment.goals) {
      case "weightLoss":
        recommendations.workoutTypes = ["Cardio", "HIIT", "Strength Training"];
        recommendations.intensity = "High";
        recommendations.duration = assessment.timeAvailability;
        break;
      case "muscleGain":
        recommendations.workoutTypes = [
          "Strength Training",
          "Resistance Training",
        ];
        recommendations.intensity = "Moderate to High";
        recommendations.duration = assessment.timeAvailability;
        break;
      case "endurance":
        recommendations.workoutTypes = ["Cardio", "Interval Training"];
        recommendations.intensity = "Moderate";
        recommendations.duration = assessment.timeAvailability;
        break;
      case "flexibility":
        recommendations.workoutTypes = ["Yoga", "Stretching"];
        recommendations.intensity = "Low to Moderate";
        recommendations.duration = assessment.timeAvailability;
        break;
    }

    return recommendations;
  };

  const recommendations = getWorkoutRecommendations();
  const exerciseRecommendations = getExerciseRecommendations(assessment);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Your Personalized Fitness Plan
      </Typography>

      <Grid container spacing={3}>
        {/* Daily Goals */}
        <Grid item xs={12} md={6}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper sx={{ p: 3, height: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Daily Goals
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <TimerIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Workout Duration"
                    secondary={`${goals.dailyWorkoutTime} minutes`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FitnessIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Calories to Burn"
                    secondary={`${goals.caloriesBurned} calories`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HealthIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Water Intake"
                    secondary={`${goals.waterIntake}L`}
                  />
                </ListItem>
              </List>
            </Paper>
          </MotionBox>
        </Grid>

        {/* Weekly Schedule */}
        <Grid item xs={12} md={6}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Paper sx={{ p: 3, height: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Weekly Schedule
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <WorkoutIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Workouts per Week"
                    secondary={`${goals.weeklyWorkouts} sessions`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GoalIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Recommended Workout Types"
                    secondary={recommendations.workoutTypes.join(", ")}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FitnessIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Workout Intensity"
                    secondary={recommendations.intensity}
                  />
                </ListItem>
              </List>
            </Paper>
          </MotionBox>
        </Grid>

        {/* Recommended Exercises */}
        <Grid item xs={12}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Recommended Exercises
              </Typography>
              <Grid container spacing={3}>
                {exerciseRecommendations.exercises.map((exercise, index) => (
                  <Grid item xs={12} md={4} key={exercise.name}>
                    <MotionCard
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        image={exercise.image}
                        alt={exercise.name}
                        sx={{ objectFit: "cover" }}
                      />
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          {exercise.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          paragraph
                        >
                          {exercise.description}
                        </Typography>
                        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                          <Chip
                            label={exercise.duration}
                            size="small"
                            color="primary"
                          />
                          <Chip
                            label={exercise.intensity}
                            size="small"
                            color="secondary"
                          />
                        </Stack>
                        <Typography variant="subtitle2" gutterBottom>
                          Specific Exercises:
                        </Typography>
                        <List dense>
                          {exercise.specificExercises.map((specific, i) => (
                            <ListItem key={i}>
                              <ListItemIcon>
                                <ProgressIcon
                                  fontSize="small"
                                  color="primary"
                                />
                              </ListItemIcon>
                              <ListItemText
                                primary={specific.name}
                                secondary={`${specific.sets} | Rest: ${specific.rest}`}
                              />
                            </ListItem>
                          ))}
                        </List>
                        <Typography
                          variant="subtitle2"
                          gutterBottom
                          sx={{ mt: 2 }}
                        >
                          Tips:
                        </Typography>
                        <List dense>
                          {exercise.tips.map((tip, i) => (
                            <ListItem key={i}>
                              <ListItemIcon>
                                <ProgressIcon
                                  fontSize="small"
                                  color="primary"
                                />
                              </ListItemIcon>
                              <ListItemText primary={tip} />
                            </ListItem>
                          ))}
                        </List>
                      </CardContent>
                    </MotionCard>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </MotionBox>
        </Grid>

        {/* Progress Tracking */}
        <Grid item xs={12}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Weekly Progress
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle2" gutterBottom>
                    Workout Duration
                  </Typography>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <ChartTooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="workoutTime"
                        stroke="#8884d8"
                        name="Duration (min)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle2" gutterBottom>
                    Calories Burned
                  </Typography>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <ChartTooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="caloriesBurned"
                        stroke="#82ca9d"
                        name="Calories"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Grid>
              </Grid>
            </Paper>
          </MotionBox>
        </Grid>

        {/* Exercise Completion Tracking */}
        <Grid item xs={12}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Paper sx={{ p: 3 }}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
              >
                <Typography variant="h6">Today's Exercise Progress</Typography>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={() => handleOpenDialog(null)}
                >
                  Log Exercise
                </Button>
              </Box>
              <Grid container spacing={2}>
                {exerciseCompletion.map((exercise) => (
                  <Grid item xs={12} sm={6} md={3} key={exercise.name}>
                    <Card>
                      <CardContent>
                        <Typography variant="subtitle1" gutterBottom>
                          {exercise.name}
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={(exercise.completed / exercise.target) * 100}
                          sx={{
                            height: 10,
                            borderRadius: 5,
                            mb: 1,
                            backgroundColor:
                              exercise.status === "skipped"
                                ? "#ffebee"
                                : "#e8f5e9",
                          }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          {exercise.completed} / {exercise.target}
                        </Typography>
                        <Box sx={{ mt: 1, display: "flex", gap: 1 }}>
                          <Tooltip title="Mark as Complete">
                            <IconButton
                              size="small"
                              color={
                                exercise.status === "completed"
                                  ? "success"
                                  : "default"
                              }
                              onClick={() => handleOpenDialog(exercise)}
                              disabled={exercise.status === "completed"}
                            >
                              <CheckCircleIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Skip Exercise">
                            <IconButton
                              size="small"
                              color={
                                exercise.status === "skipped"
                                  ? "error"
                                  : "default"
                              }
                              onClick={() => handleSkipExercise(exercise)}
                              disabled={exercise.status === "skipped"}
                            >
                              <CancelIcon />
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </MotionBox>
        </Grid>

        {/* Weekly Progress Summary */}
        <Grid item xs={12}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Weekly Progress Summary
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Typography variant="subtitle2" gutterBottom>
                    Average Workout Time
                  </Typography>
                  <Typography variant="h4" color="primary">
                    {Math.round(
                      chartData.reduce((acc, day) => acc + day.workoutTime, 0) /
                        chartData.length
                    )}{" "}
                    min
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="subtitle2" gutterBottom>
                    Total Calories Burned
                  </Typography>
                  <Typography variant="h4" color="primary">
                    {chartData.reduce(
                      (acc, day) => acc + day.caloriesBurned,
                      0
                    )}{" "}
                    kcal
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="subtitle2" gutterBottom>
                    Exercises Completed
                  </Typography>
                  <Typography variant="h4" color="primary">
                    {chartData.reduce(
                      (acc, day) => acc + day.exercisesCompleted,
                      0
                    )}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </MotionBox>
        </Grid>

        {/* Progress Update Dialog */}
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>
            {selectedExercise ? "Update Exercise Progress" : "Log New Exercise"}
          </DialogTitle>
          <DialogContent>
            <Box sx={{ pt: 2 }}>
              {selectedExercise ? (
                <>
                  <Typography variant="subtitle1" gutterBottom>
                    {selectedExercise.name}
                  </Typography>
                  <TextField
                    fullWidth
                    label="Completed Sets/Reps"
                    type="number"
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Notes"
                    multiline
                    rows={3}
                    margin="normal"
                  />
                </>
              ) : (
                <>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Exercise</InputLabel>
                    <Select label="Exercise">
                      {exerciseRecommendations.exercises.map((exercise) => (
                        <MenuItem key={exercise.name} value={exercise.name}>
                          {exercise.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <TextField
                    fullWidth
                    label="Completed Sets/Reps"
                    type="number"
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Notes"
                    multiline
                    rows={3}
                    margin="normal"
                  />
                </>
              )}
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button
              variant="contained"
              onClick={() => handleUpdateProgress(selectedExercise, true, "")}
            >
              Save Progress
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Box>
  );
};

export default FitnessTracker;
