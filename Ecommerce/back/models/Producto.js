const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'producto',
    {
      codigo:{
        type: DataTypes.STRING(10000),
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
        allowNull: false,
      },
      fechaPublicacion: {
        type: DataTypes.STRING(10000),
        allowNull: false,
      },
      oferta: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      activo:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }

    },
    {
      timestamps: false
    }
  );
};