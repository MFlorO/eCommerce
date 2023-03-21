const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

	sequelize.define(
		'color',
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

