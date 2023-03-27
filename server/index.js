const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const connectDB = require('./config/db.js');

// pg database

const pg = require('./pg');

const User = require('./models/User.js');
const sendEmail = require('./utils/email.js');

// connecting to database

connectDB();

// connecting with POSTGRES

app.listen(5000, function () {
	console.log('server is listening at port 5000');
});

app.get('/', function (request, response) {
	response.send('welcome to the server');
});

app.post('/api/auth/register', async function (req, res) {
	const fullName = req.body.firstName + ' ' + req.body.lastName;
	console.log(req.body);

	const options = {
		fullName: fullName,
		email: req.body.email,
	};

	// const result = await sendEmail(options);

	const user = await User.create(req.body);
	res.status(201).json({
		success: true,
		data: user,
	});
});

app.post('/api/sendemail', async function (req, res) {
	const result = await sendEmail();
	res.status(200).json({
		success: true,
		data: 'email sent',
	});
});

app.post('/api/auth/login', async function (req, res) {
	console.log(req.body.password);

	const user = await User.find({
		userName: req.body.userName,
		password: req.body.password,
	});

	if (user) {
		res.status(200).json({
			success: true,
			data: user,
		});
	} else {
		res.status(400).json({
			success: false,
			data: null,
		});
	}
});

// pg database routes
app.get('/ccf', pg.getCCSRecommedations);

// second query
app.get('/publicccf', pg.getPublicCcf);
