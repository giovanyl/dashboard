const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
	const transporter = nodemailer.createTransport({
		host: 'thetherapytool.com',
		port: 465,
		auth: {
			user: 'test@thetherapytool.com',
			pass: 'Password1',
		},
	});

	const message = {
		from: 'test@thetherapytool.com',
		to: 'giolopes247@gmail.com',
		subject: 'Test Message',
		html: `<h1>Hey, ${options.fullName} </h1><p>this is test message from ENVIROIMPACT </p>`,
	};

	const info = await transporter.sendMail(message);
	console.log('message sent: ', info.messageId);
};

module.exports = sendEmail;
