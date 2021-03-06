const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// connect to mongo db
mongoose.connect(
	process.env.MONGODB_URI ||
		'mongodb+srv://new-user:riley@cluster0.9flal.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false
	}
);

app.use(require('./routes/api-routes.js'));
app.use(require('./routes/html-routes.js'));

// listen on port 3000
app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});
