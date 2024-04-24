const { log } = require('console');
const sequelize = require('./db')
const UserModel = require('./models');
const User = require('./models');

async function start() {
    try {
        sequelize.authenticate()
        sequelize.sync()
    } catch (error) {
        console.log('База капут');
    }
    var h1_Id = document.getElementById('h1');
    var button_Id = document.getElementById('button');
    var balance = 0;
    button_Id.addEventListener('click', function() {
        balance++;
        h1_Id.textContent = `Всего кликов: ${balance}`;
    });
    h1_Id.addEventListener('mousedown', function() {
        balance++;
        h1_Id.textContent = `Всего кликов: ${balance}`;
        const user = UserModel.findAll()
        user.balance++
    })
}

