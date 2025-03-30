const express = require("express");
const router = express.Router();
const Workout = require("../models/Fitness");

// Get all workouts for a user
router.get("/workouts", async (req, res) => {
  try {
    const workouts = await Workout.find({ userId: req.user.userId }).sort({
      date: -1,
    });
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get workout by ID
router.get("/workouts/:id", async (req, res) => {
  try {
    const workout = await Workout.findOne({
      _id: req.params.id,
      userId: req.user.userId,
    });

    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    res.json(workout);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Create new workout
router.post("/workouts", async (req, res) => {
  try {
    const { type, duration, caloriesBurned, exercises, notes } = req.body;

    const workout = new Workout({
      userId: req.user.userId,
      type,
      duration,
      caloriesBurned,
      exercises,
      notes,
    });

    await workout.save();
    res.status(201).json(workout);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Update workout
router.put("/workouts/:id", async (req, res) => {
  try {
    const workout = await Workout.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      req.body,
      { new: true }
    );

    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    res.json(workout);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Delete workout
router.delete("/workouts/:id", async (req, res) => {
  try {
    const workout = await Workout.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId,
    });

    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    res.json({ message: "Workout deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Mark exercise as completed
router.put("/workouts/:workoutId/exercises/:exerciseId", async (req, res) => {
  try {
    const workout = await Workout.findOne({
      _id: req.params.workoutId,
      userId: req.user.userId,
    });

    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    const exercise = workout.exercises.id(req.params.exerciseId);
    if (!exercise) {
      return res.status(404).json({ message: "Exercise not found" });
    }

    exercise.completed = true;
    await workout.save();

    res.json(workout);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get workout statistics
router.get("/stats", async (req, res) => {
  try {
    const stats = await Workout.aggregate([
      { $match: { userId: req.user.userId } },
      {
        $group: {
          _id: null,
          totalWorkouts: { $sum: 1 },
          totalDuration: { $sum: "$duration" },
          totalCalories: { $sum: "$caloriesBurned" },
          completedWorkouts: {
            $sum: { $cond: [{ $eq: ["$completed", true] }, 1, 0] },
          },
        },
      },
    ]);

    res.json(
      stats[0] || {
        totalWorkouts: 0,
        totalDuration: 0,
        totalCalories: 0,
        completedWorkouts: 0,
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
