require('dotenv').config();
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('pokedeck', 'alex', 'alex', {
	host: 'localhost',
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
