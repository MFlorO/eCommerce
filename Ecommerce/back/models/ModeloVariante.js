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
            type: DataTypes.INTEGER,
            allowNull: false,
          }
          
        },
        {
            timestamps: false
        }
    );
};

