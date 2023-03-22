const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

    sequelize.define(
        'modelo',
        { 
          color:{
            type: DataTypes.STRING,
            allowNull: false,
          }
          
        },
        {
            timestamps: false
        }
    );
};

