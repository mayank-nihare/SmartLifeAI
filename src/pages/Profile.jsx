import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Grid,
  Avatar,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Stack,
  useTheme,
  Tooltip,
} from "@mui/material";
import {
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  FitnessCenter as FitnessIcon,
  EmojiEvents as GoalIcon,
  LocalHospital as HealthIcon,
  DirectionsRun as WorkoutIcon,
  Timer as TimerIcon,
  TrendingUp as ProgressIcon,
  PhotoCamera as PhotoCameraIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
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
} from "recharts";

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const Profile = () => {
  const theme = useTheme();
  const { user, updateUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    age: user?.age || "",
    gender: user?.gender || "",
    weight: user?.weight || "",
    height: user?.height || "",
    fitnessLevel: user?.fitnessLevel || "",
    goals: user?.goals || "",
    healthConditions: user?.healthConditions || [],
    workoutPreferences: user?.workoutPreferences || [],
    timeAvailability: user?.timeAvailability || "",
  });
  const [profileImage, setProfileImage] = useState(null);

  // Sample data for charts (replace with actual data from backend)
  const [chartData] = useState([
    { name: "Mon", workoutTime: 45, caloriesBurned: 350 },
    { name: "Tue", workoutTime: 60, caloriesBurned: 450 },
    { name: "Wed", workoutTime: 30, caloriesBurned: 250 },
    { name: "Thu", workoutTime: 45, caloriesBurned: 350 },
    { name: "Fri", workoutTime: 60, caloriesBurned: 450 },
    { name: "Sat", workoutTime: 45, caloriesBurned: 350 },
    { name: "Sun", workoutTime: 30, caloriesBurned: 250 },
  ]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateUser(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || "",
      email: user?.email || "",
      age: user?.age || "",
      gender: user?.gender || "",
      weight: user?.weight || "",
      height: user?.height || "",
      fitnessLevel: user?.fitnessLevel || "",
      goals: user?.goals || "",
      healthConditions: user?.healthConditions || [],
      workoutPreferences: user?.workoutPreferences || [],
      timeAvailability: user?.timeAvailability || "",
    });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleUpdateProfile = () => {
    updateUser(formData);
    handleCloseDialog();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        // Here you would typically upload the image to your backend
        // and update the user's profile image URL
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        {/* Profile Header */}
        <Grid item xs={12}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper sx={{ p: 3, display: "flex", alignItems: "center", gap: 3 }}>
              <Box sx={{ position: "relative" }}>
                <Avatar
                  src={profileImage}
                  sx={{
                    width: 120,
                    height: 120,
                    bgcolor: theme.palette.primary.main,
                  }}
                >
                  {!profileImage && user?.name?.charAt(0)}
                </Avatar>
                {isEditing && (
                  <Tooltip title="Change Profile Picture">
                    <IconButton
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        bgcolor: "background.paper",
                        "&:hover": {
                          bgcolor: "background.paper",
                        },
                      }}
                      component="label"
                      size="small"
                    >
                      <input
                        hidden
                        accept="image/*"
                        type="file"
                        onChange={handleImageUpload}
                      />
                      <PhotoCameraIcon />
                    </IconButton>
                  </Tooltip>
                )}
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h4" gutterBottom>
                  {isEditing ? (
                    <TextField
                      fullWidth
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                      size="small"
                    />
                  ) : (
                    user?.name
                  )}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {user?.email}
                </Typography>
              </Box>
              <Box>
                {isEditing ? (
                  <>
                    <IconButton color="success" onClick={handleSave}>
                      <SaveIcon />
                    </IconButton>
                    <IconButton color="error" onClick={handleCancel}>
                      <CancelIcon />
                    </IconButton>
                  </>
                ) : (
                  <IconButton color="primary" onClick={handleEdit}>
                    <EditIcon />
                  </IconButton>
                )}
              </Box>
            </Paper>
          </MotionBox>
        </Grid>

        {/* Profile Details */}
        <Grid item xs={12} md={6}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Paper sx={{ p: 3, height: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Profile Details
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Age
                  </Typography>
                  <Typography variant="body1">
                    {isEditing ? (
                      <TextField
                        fullWidth
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                      />
                    ) : (
                      user?.age
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Gender
                  </Typography>
                  <Typography variant="body1">
                    {isEditing ? (
                      <TextField
                        fullWidth
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                      />
                    ) : (
                      user?.gender
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Weight
                  </Typography>
                  <Typography variant="body1">
                    {isEditing ? (
                      <TextField
                        fullWidth
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                      />
                    ) : (
                      `${user?.weight} kg`
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Height
                  </Typography>
                  <Typography variant="body1">
                    {isEditing ? (
                      <TextField
                        fullWidth
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                      />
                    ) : (
                      `${user?.height} cm`
                    )}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </MotionBox>
        </Grid>

        {/* Fitness Assessment */}
        <Grid item xs={12} md={6}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Paper sx={{ p: 3, height: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Fitness Assessment
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <FitnessIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Fitness Level"
                    secondary={
                      isEditing ? (
                        <TextField
                          fullWidth
                          name="fitnessLevel"
                          value={formData.fitnessLevel}
                          onChange={handleChange}
                          variant="outlined"
                          size="small"
                        />
                      ) : (
                        user?.fitnessLevel
                      )
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GoalIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Goals"
                    secondary={
                      isEditing ? (
                        <TextField
                          fullWidth
                          name="goals"
                          value={formData.goals}
                          onChange={handleChange}
                          variant="outlined"
                          size="small"
                        />
                      ) : (
                        user?.goals
                      )
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TimerIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Time Availability"
                    secondary={
                      isEditing ? (
                        <TextField
                          fullWidth
                          name="timeAvailability"
                          value={formData.timeAvailability}
                          onChange={handleChange}
                          variant="outlined"
                          size="small"
                        />
                      ) : (
                        `${user?.timeAvailability} minutes`
                      )
                    }
                  />
                </ListItem>
              </List>
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
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Progress Tracking
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

        {/* Health Conditions and Preferences */}
        <Grid item xs={12}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Health Conditions & Preferences
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" gutterBottom>
                    Health Conditions
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                    {user?.healthConditions?.map((condition, index) => (
                      <Chip
                        key={index}
                        label={condition}
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" gutterBottom>
                    Workout Preferences
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                    {user?.workoutPreferences?.map((preference, index) => (
                      <Chip
                        key={index}
                        label={preference}
                        color="secondary"
                        variant="outlined"
                      />
                    ))}
                  </Stack>
                </Grid>
              </Grid>
            </Paper>
          </MotionBox>
        </Grid>
      </Grid>

      {/* Profile Update Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Update Profile</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Weight (kg)"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Height (cm)"
              name="height"
              value={formData.height}
              onChange={handleChange}
              margin="normal"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="contained" onClick={handleUpdateProfile}>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Profile;
