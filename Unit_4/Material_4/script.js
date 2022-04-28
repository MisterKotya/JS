//document.querySelector('button').onclick = () => {} - анонимная функция

document.querySelector('button').onclick = myFunc;

function myFunc() {
console.log(document.querySelector('#one').value); // value - значение введенное в объект input
// style
document.querySelector('button').style.backgroundColor = // переменная button
document.querySelector('#one').value // переменная input
}

/*<input type="password" id="one"> - пароль
document.querySelector('#one').value // переменная input*/

/*<input type="color" id="one"> - цветная строка и кнопка
document.querySelector('button').style.backgroundColor = // переменная button
document.querySelector('#one').value // переменная input*/

//<input type="date" id="one"> - календарь

//input type="range" id="one"> - полоса прокрутки - ползунок

document.querySelector('#one').oninput = () => {
    console.log(document.querySelector('#one').value);
    document.querySelector('span').innerHTML = document.querySelector('#one').value
}

