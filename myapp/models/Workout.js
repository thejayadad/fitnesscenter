import mongoose from "mongoose";

const WorkoutSchema = new mongoose.Schema({
   creator: {type: String, required: true},
   title: String,
   comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
   location: {
    type: String,
    enum: ['other', 'indoor', 'outdoor', 'gym'],
    required: true,
  },
  duration: {
    type: Number,
  },
  distance: {
    type: Number,

  },
  intensity: {
    type: String,
    enum: ['low', 'medium', 'high'],
  },
  notes: {
    type: String,
  },

}, {timestamps: true})

export default mongoose?.models?.Workout || mongoose.model("Workout", WorkoutSchema)