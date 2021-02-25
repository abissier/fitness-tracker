const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    day: { type: Date },
    exercises: {
        type: { type: String },
        name: { type: String },
        duration: { type: Number },
        weight: { type: Number },
        rep: { type: Number },
        set: { type: Number }
    }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;