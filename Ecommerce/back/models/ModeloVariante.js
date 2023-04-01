const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

    sequelize.define(
        'modeloVariante',
        { 
          talle:{
            type: DataTypes.STRING,
            allowNull: false,
          },
          stock:{
            type: DataTypes.STRING,
            allowNull: false,
          }
          
        },
        {
            timestamps: false
        }
    );
};

