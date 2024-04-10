const Sequelize = require('sequelize');

const sequelize = require('./database');

const Piece = sequelize.define('piece', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    type: Sequelize.INTEGER,
    x: Sequelize.INTEGER,
    y: Sequelize.INTEGER,
    stopped: Sequelize.BOOLEAN,
    moveAllowedLeft: Sequelize.BOOLEAN,
    moveAllowedRight: Sequelize.BOOLEAN,
    moveAllowedDown: Sequelize.BOOLEAN,
    col: Sequelize.INTEGER,
    width: Sequelize.INTEGER,
    height: Sequelize.INTEGER
});

module.exports = Piece;
