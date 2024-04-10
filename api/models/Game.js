const Sequelize = require('sequelize');

const sequelize = require('./database');

const Game = sequelize.define('game', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    status: Sequelize.INTEGER,
    n_lines: Sequelize.INTEGER,
    n_cols: Sequelize.INTEGER,
    n_levels: Sequelize.INTEGER,
    score: Sequelize.INTEGER,
},
{
    classMethods: {
        associate: (models) => {
        Game.belongsTo(models.User, {
            foreignKey: 'userId'
        });
        Game.hasMany(models.Piece, {
            foreignKey: 'pieceId'
        });
        }
    }
}
    
);

module.exports = Game;