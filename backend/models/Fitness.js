const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["cardio", "strength", "yoga", "hiit", "flexibility"],
  },
  sets: {
    type: Number,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number, // in minutes
    required: true,
  },
  intensity: {
    type: String,
    required: true,
    enum: ["low", "medium", "high"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
  notes: String,
});

const workoutSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  type: {
    type: String,
    required: true,
    enum: ["cardio", "strength", "yoga", "hiit", "flexibility"],
  },
  duration: {
    type: Number, // in minutes
    required: true,
  },
  caloriesBurned: {
    type: Number,
    required: true,
  },
  exercises: [exerciseSchema],
  notes: String,
  completed: {
    type: Boolean,
    default: false,
  },
});

// Index for efficient queries
workoutSchema.index({ userId: 1, date: -1 });

module.exports = mongoose.model("Workout", workoutSchema);
