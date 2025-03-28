const express = require('express');
const { env } = require('../../../constants');

// import all the routes here
const proposalRoute = require('./proposal.route');

const router = express.Router();

//GET v1/healthcheck
router.get('/healthcheck', (req, res) => {
	console.log('healthcheck api');
	res.json({
		message: 'In Service',
		timestamp: new Date().toLocaleString(),
		IP: req.ip,
		URL: req.originalUrl,
		api_version: "2.0",
		environment: env
	});
});

router.use('/proposals', proposalRoute);

module.exports = router;
