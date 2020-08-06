const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const fitnessSchema = new Schema(

  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "What type of exercise?"
        },

        name: {
          type: String,
          trim: true,
          required: "What is the name of the exercise?"
        },

        duration: {
          type: Number,
          required: "In minutes, how long did you do the exercise?"
        },
        
        sets: {
            type: Number
          },

        reps: {
            type: Number
          },

        weight: {
          type: Number
        },

        distance: {
          type: Number
        }
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

fitnessSchema.virtual("totalDuration").get(function() {
  
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", fitnessSchema);

module.exports = Workout;