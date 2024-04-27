    var tg = window.Telegram.WebApp;
    tg.MainButton.isVisible = true;
    tg.MainButton.isActive;
    tg.MainButton.setText('кликер');
    var h1_Id = document.getElementById('h1');
    var button_Id = document.getElementById('button');
    var balance = 0;
    button_Id.addEventListener('click', function() {
        balance++;
        h1_Id.textContent = `Всего кликов: ${balance}`;
        tg.sendData('click')
    });
    Telegram.WebApp.onEvent('mainmainButtonClicked', function(){
        tg.sendData('data'); 
        //при клике на основную кнопку отправляем данные в строковом виде
    });
