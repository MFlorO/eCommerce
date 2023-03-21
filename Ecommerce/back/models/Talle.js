const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

	sequelize.define(
		'talle',
		{
			nombre: {
				type: DataTypes.STRING,
                allowNull: false,
			}
		},
		{
			timestamps: false
		}
	);
};

