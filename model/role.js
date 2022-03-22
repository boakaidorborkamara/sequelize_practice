const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Role = sequelize.define("Role", {
        id: {
            type: DataTypes.INTEGER,
            autoincrement:true,
            primaryKey:true
        },
        name:{
            type: DataTypes.STRING
        }
    }
);

Role.sync();

module.exports = Role;