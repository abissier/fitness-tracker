const db = require('../models');
const router = require('express').Router();

// get workouts
router.get('/api/workouts', (req, res) => {
	db.Workout
		.find({})
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch(({ message }) => {
			console.log(message);
		});
});

// update workout
router.put('/api/workouts/:id', function(req, res) {
	db.Workout
		.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } }, { new: true })
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch(({ message }) => {
			console.log(message);
		});
});

// create workout
router.post('/api/workouts', function({ body }, res) {
	db.Workout
		.create(body)
		.then((dbWorkout) => {
			console.log(dbWorkout);
		})
		.catch(({ message }) => {
			console.log(message);
		});
});

module.exports = router;
