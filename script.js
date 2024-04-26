    var tg = window.Telegram.WebApp;
    tg.MainButton.isVisible = true;
    tg.MainButton.isActive;
    tg.MainButton.setText('Send Data');
    var h1_Id = document.getElementById('h1');
    var button_Id = document.getElementById('button');
    var balance = 0;
    button_Id.addEventListener('click', function() {
        balance++;
        h1_Id.textContent = `Всего кликов: ${balance}`;
    });
    Telegram.WebApp.onEvent('mainmainButtonClicked', function(){
        balance++
        //при клике на основную кнопку отправляем данные в строковом виде
    });
