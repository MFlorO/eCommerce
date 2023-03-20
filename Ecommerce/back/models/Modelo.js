const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

	sequelize.define(
		'modelo',
		{
			color: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			talle: {
				type: DataTypes.STRING,
				allowNull: false,
			},
            stock: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
		    currentStock: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0,
			}
		},
		{
			timestamps: false
		}
	);
};

