const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
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
  weight: {
    type: Number,
    required: true,
  },
  bodyMeasurements: {
    chest: Number,
    waist: Number,
    hips: Number,
    arms: Number,
    legs: Number,
  },
  workoutStats: {
    totalDuration: Number, // in minutes
    caloriesBurned: Number,
    exercisesCompleted: Number,
  },
  waterIntake: {
    type: Number, // in liters
    required: true,
  },
  sleepQuality: {
    type: Number, // percentage
    required: true,
  },
  sleepDuration: {
    type: Number, // in hours
    required: true,
  },
  notes: String,
  photos: [
    {
      type: String, // URLs to progress photos
      required: false,
    },
  ],
});

// Index for efficient queries
progressSchema.index({ userId: 1, date: -1 });

module.exports = mongoose.model("Progress", progressSchema);
