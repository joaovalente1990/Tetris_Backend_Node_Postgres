const Sequelize = require('sequelize');

const sequelize = require('./database');

const Level = sequelize.define('level', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    speed: { 
        type: Sequelize.INTEGER, 
    }
},
{
    classMethods: {
        associate: (models) => {
        Level.belongsTo(models.Game, {
            foreignKey: 'gameId'
        });
        }
    }
}
);

module.exports = Level;