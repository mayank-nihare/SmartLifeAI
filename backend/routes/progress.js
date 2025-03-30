const express = require("express");
const router = express.Router();
const Progress = require("../models/Progress");

// Get all progress entries for a user
router.get("/", async (req, res) => {
  try {
    const progress = await Progress.find({ userId: req.user.userId }).sort({
      date: -1,
    });
    res.json(progress);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get progress entry by ID
router.get("/:id", async (req, res) => {
  try {
    const progress = await Progress.findOne({
      _id: req.params.id,
      userId: req.user.userId,
    });

    if (!progress) {
      return res.status(404).json({ message: "Progress entry not found" });
    }

    res.json(progress);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Create new progress entry
router.post("/", async (req, res) => {
  try {
    const {
      weight,
      bodyMeasurements,
      workoutStats,
      waterIntake,
      sleepQuality,
      sleepDuration,
      notes,
      photos,
    } = req.body;

    const progress = new Progress({
      userId: req.user.userId,
      weight,
      bodyMeasurements,
      workoutStats,
      waterIntake,
      sleepQuality,
      sleepDuration,
      notes,
      photos,
    });

    await progress.save();
    res.status(201).json(progress);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Update progress entry
router.put("/:id", async (req, res) => {
  try {
    const progress = await Progress.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      req.body,
      { new: true }
    );

    if (!progress) {
      return res.status(404).json({ message: "Progress entry not found" });
    }

    res.json(progress);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Delete progress entry
router.delete("/:id", async (req, res) => {
  try {
    const progress = await Progress.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId,
    });

    if (!progress) {
      return res.status(404).json({ message: "Progress entry not found" });
    }

    res.json({ message: "Progress entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get progress statistics
router.get("/stats/summary", async (req, res) => {
  try {
    const stats = await Progress.aggregate([
      { $match: { userId: req.user.userId } },
      {
        $group: {
          _id: null,
          averageWeight: { $avg: "$weight" },
          averageSleepQuality: { $avg: "$sleepQuality" },
          averageSleepDuration: { $avg: "$sleepDuration" },
          averageWaterIntake: { $avg: "$waterIntake" },
          totalWorkouts: { $sum: "$workoutStats.exercisesCompleted" },
          totalCaloriesBurned: { $sum: "$workoutStats.caloriesBurned" },
        },
      },
    ]);

    res.json(
      stats[0] || {
        averageWeight: 0,
        averageSleepQuality: 0,
        averageSleepDuration: 0,
        averageWaterIntake: 0,
        totalWorkouts: 0,
        totalCaloriesBurned: 0,
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get progress trends
router.get("/stats/trends", async (req, res) => {
  try {
    const trends = await Progress.aggregate([
      { $match: { userId: req.user.userId } },
      {
        $group: {
          _id: {
            year: { $year: "$date" },
            month: { $month: "$date" },
          },
          weight: { $avg: "$weight" },
          sleepQuality: { $avg: "$sleepQuality" },
          waterIntake: { $avg: "$waterIntake" },
          caloriesBurned: { $sum: "$workoutStats.caloriesBurned" },
        },
      },
      { $sort: { "_id.year": -1, "_id.month": -1 } },
      { $limit: 12 },
    ]);

    res.json(trends);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
