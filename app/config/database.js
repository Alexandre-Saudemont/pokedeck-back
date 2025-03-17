require('dotenv').config();
const {Sequelize} = require('sequelize');

// CONFIG LOCAL
// const sequelize = new Sequelize('pokedeck', 'alex', 'poule', {
// 	host: 'localhost',
// 	dialect: 'postgres',
// 	define: {timestamps: false},
// });

// CONFIG PRODUCTION
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
	host: process.env.DB_HOST,
	dialect: 'postgres',
	define: {timestamps: false},
});

sequelize
	.authenticate()
	.then(() => {
		console.log('connexion sequelize réussie :)');
	})
	.catch((error) => {
		console.error(error);
	});
module.exports = sequelize;
