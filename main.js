let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
let item = "";
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn10 = document.getElementById("btn10");
let btn11 = document.getElementById("btn11");
let btn12 = document.getElementById("btn12");
btn1.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вывести информацию по ");
        item = "1";
        tg.MainButton.show();
    }
});

btn2.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вывести информацию по ");
        item = "2";
        tg.MainButton.show();
    }
});

btn3.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вывести информацию по ");
        item = "3";
        tg.MainButton.show();
    }
});

btn4.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вывести информацию по ");
        item = "4";
        tg.MainButton.show();
    }
});

btn5.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вывести информацию по ");
        item = "5";
        tg.MainButton.show();
    }
});

btn6.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вывести информацию по ");
        item = "6";
        tg.MainButton.show();
    }
});

btn7.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вывести информацию по ");
        item = "7";
        tg.MainButton.show();
    }
});

btn8.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вывести информацию по ");
        item = "8";
        tg.MainButton.show();
    }
});

btn9.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вывести информацию по ");
        item = "9";
        tg.MainButton.show();
    }
});

btn10.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вывести информацию по ");
        item = "10";
        tg.MainButton.show();
    }
});

btn11.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вывести информацию по ");
        item = "11";
        tg.MainButton.show();
    }
});

btn12.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вывести информацию по ");
        item = "12";
        tg.MainButton.show();
    }
});
DISC = {
    '1': 'sdfglkfghj'
}
@dp.message_handler(content_types='web_app_data')
async def buy_process(web_app_message):
    await bot.send_message(web_app_message.chat.id,
DISC[f'{web_app_message.web_app_data}'])


Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(item);
});
