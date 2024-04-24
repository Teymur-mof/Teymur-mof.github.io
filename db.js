const {Sequelize} = require('sequelize');
module.exports = new Sequelize(
    'users',
    'root1',
    'RootRoot1!',
    {
        host: '79.174.88.157',
        port: '19483',
        dialect: 'postgres'
    }
)