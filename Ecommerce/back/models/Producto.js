const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'producto',
    {
      codigo:{
        type: DataTypes.STRING(10000),
        allowNull: false,
        primaryKey: true
      },
      nombre: {
        type: DataTypes.STRING(10000),
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING(10000),
        allowNull: true,
      },
      precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fechaPublicacion: {
        type: DataTypes.STRING(10000),
        allowNull: true,
      },
      puntaje: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
      },

      //  ########### REVEEER ########
      color:{
				type: DataTypes.STRING,
				allowNull:true,
			},
      talle:{
        type: DataTypes.STRING,
				allowNull:true,
			},

      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },

      // currentStock: {
			// 	type: DataTypes.INTEGER,
			// 	allowNull:false,
			// 	defaultValue:0,
			// },

    },
    {
      timestamps: false
    }
  );
};