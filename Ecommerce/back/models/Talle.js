const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

	sequelize.define(
		'categoria',
		{
			name: {
				type: DataTypes.STRING,
                allowNull: false,
			}
		},
		{
			timestamps: false
		}
	);
};

