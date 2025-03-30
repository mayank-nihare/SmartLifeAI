const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "other"],
  },
  weight: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  fitnessLevel: {
    type: String,
    required: true,
    enum: ["beginner", "intermediate", "advanced"],
  },
  goals: {
    type: String,
    required: true,
    enum: ["weight_loss", "muscle_gain", "endurance", "flexibility"],
  },
  healthConditions: [
    {
      type: String,
      enum: [
        "none",
        "diabetes",
        "hypertension",
        "heart_disease",
        "arthritis",
        "other",
      ],
    },
  ],
  workoutPreferences: [
    {
      type: String,
      enum: ["cardio", "strength", "yoga", "hiit", "flexibility"],
    },
  ],
  timeAvailability: {
    type: Number,
    required: true,
  },
  profileImage: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
