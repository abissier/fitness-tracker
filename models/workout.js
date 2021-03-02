const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
	day: { type: Date, default: Date.now },
	exercises: [
		{
			type: { type: String },
			name: { type: String },
			duration: {
				type: Number,
				default: 0
			},
			weight: {
				type: Number,
				default: 0
			},
			reps: {
				type: Number,
				default: 0
			},
			sets: {
				type: Number,
				default: 0
			},
			distance: {
				type: Number,
				default: 0
			}
		}
	],
	totalDuration: {
		type: Number,
		default: 0
	}
});

const Workout = mongoose.model('workout', ExerciseSchema);

module.exports = Workout;
