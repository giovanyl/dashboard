// Post gress database
const Pool = require('pg').Pool;

const pool = new Pool({
	user: 'gio',
	host: 'atlantia.acooper.info',
	database: 'ACDataTest',
	password: 'Python-React-isgreat',
	port: 5432,
});

const getCCSRecommedations = (req, res, next) => {
	pool.query('SELECT * from ccf_recommendations', (error, results) => {
		if (error) {
			throw error;
		}
		res.status(200).json(results.rows);
	});
};

`SELECT cloudprovider, accountid, region, recommendationtype, recommendationdetail, kilowatthoursavings, instancename, co2esavings, costsavings
FROM public.ccf_recommendations`;

const getPublicCcf = (req, res, next) => {
	pool.query(
		`SELECT cloudprovider, accountid, region, recommendationtype, recommendationdetail, kilowatthoursavings, instancename, co2esavings, costsavings
    FROM public.ccf_recommendations`,
		(error, results) => {
			if (error) {
				throw error;
			}
			res.status(200).json(results.rows);
		}
	);
};
module.exports = {
	getCCSRecommedations,
	getPublicCcf,
};
