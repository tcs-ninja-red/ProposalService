/**
 * Common constants across all the environments (dev, staging, prod)
 */
process.env.NODE_ENV = "dev";
module.exports = {
	env: process.env.NODE_ENV,
	port: process.env.API_PORT || 44302,
};