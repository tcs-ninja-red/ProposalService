/**
 * Common constants across all the environments (dev, staging, prod)
 */
process.env.NODE_ENV = "dev";
//process.env.API_PORT = "44302";

module.exports = {
	env: process.env.NODE_ENV,
	port: process.env.API_PORT || 44302,
};