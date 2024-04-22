var h1_Id = document.getElementById('h1');
var button_Id = document.getElementById('button');
var balance = 0;
button_Id.addEventListener('click', function() {
    balance++;
    h1_Id.textContent = `Всего кликов: ${balance}`;
});