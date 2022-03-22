const Sequelize = require('sequelize');
const sequelize = require('../database');

const Role = sequelize.define("Role", {
        id: {
            type: sequelize.INTEGER,
            autoincrement:true,
            primaryKey:true
        },
        name:{
            type: sequelize.STRING
        }
    }
);

module.exports = Role;