const mongoose = require('mongoose');

// const conString = `mongodb+srv://bubble2dashboard:bubble2@cluster0.alj3z.mongodb.net/?retryWrites=true&w=majority`;
const conString = `mongodb+srv://it740:admin1122@bobisoftprojects.ljxbi.mongodb.net/jayDashboard?retryWrites=true&w=majority`;

const connectDB = async () => {
	const db = await mongoose.connect(conString, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	console.log('mongodb connected');
};

module.exports = connectDB;
