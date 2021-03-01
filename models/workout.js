const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
	day: { type: Date, default: Date.now },
	exercises: [
		{
			type: { type: String },
			name: { type: String },
			duration: { type: Number },
			weight: { type: Number },
			rep: { type: Number },
			set: { type: Number },
			distance: { type: Number }
		}
	],
	totalDuration: {
		type: Number,
		default: 0
	}
});

const Workout = mongoose.model('workout', ExerciseSchema);

module.exports = Workout;
