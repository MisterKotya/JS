//document.querySelector('button').onclick = () => {} - анонимная функция

//document.querySelector('button').onclick = myFunc;

//function myFunc() {
//console.log(document.querySelector('#one').value); // value - значение введенное в объект input
// style
//document.querySelector('button').style.backgroundColor = // переменная button
//document.querySelector('#one').value // переменная input
//}

/*<input type="password" id="one"> - пароль
document.querySelector('#one').value // переменная input*/

/*<input type="color" id="one"> - цветная строка и кнопка
document.querySelector('button').style.backgroundColor = // переменная button
document.querySelector('#one').value // переменная input*/

//<input type="date" id="one"> - календарь

//input type="range" id="one"> - полоса прокрутки - ползунок


//}

// document.querySelector('button').onclick = myFunc; 

// function myFunc() {

//  console.log(document.querySelector('#one').value);
//  // style - принцип CamelCase(backgroundColor)
//  document.querySelector('button').style.backgroundColor = 
//  document.querySelector('#one').value;
// }

// document.querySelector('#one').oninput = () => {  
//oninput - событие срабатывает тогда, когда изменяется состояние элемента, т.е. постоянно меняются числа
// console.log(document.querySelector('#one').value);
// document.querySelector('span').innerHTML = document.querySelector('#one').value;
// }

document.querySelector('#btn-1').onclick = () => { // Вывод в консоль с выбором 'checkbox или нет'(true or false) через if...else
    console.log(document.querySelector('#i2').value);
    let myCheckBox = document.querySelector('#i2');
    console.log(myCheckBox.checked);
    if (myCheckBox.checked) {    // checked) - проверено
        console.log('Нажат');
    }
    else {
        console.log('Не нажат');
    }
}

document.querySelector('#btn-2').onclick = (event/*объект события*/) => {   // Вывод в консоль через textarea различных написаний
    event.preventDefault(); // метод, который тормозит перезагрузку страницы
    //  let text = document.querySelector('#two');
    //  console.log(text.value);
    //  text.value = 'one'; // присваивание различных значений в поле textarea
    let form = document.querySelector('form');
    console.log(form); // переменная form
    console.log(form.elements.two.value); // св-во elements, обращение по id или по name
    console.log(form.elements.three.value);
}


// Task 4. Создайте input(checkbox).i-4 и button.b-4 - при нажатии на кнопку выводите true если checkbox выбран и false если не выбран. 
//Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-4

function f4() {
    let output4 = document.querySelector('.out-4');
    let check4 = document.querySelector('.i-4'); // <input type="checkbox" class="i-4"></div>
    if (check4.checked) { // проверка checkbox посредством checked - нажат или нет
        output4.innerHTML = true;
    }
    else {
        output4.innerHTML = false;
    }
}

document.querySelector('.b-4').onclick = f4;

//<input type="hidden"></input> - хранить и отправлять информацию, скрытую от пользователей.
// <input type="radio" id="radioButton"> - используется для создания группы радиокнопок (переключателей), описывающих набор взаимосвязанных параметров,
// отображаются как небольшие кружки, которые заполняются или подсвечиваются при наведении.



// Task 10
// >Создайте input(color).i-10 и button.b-10 - при нажатии на кнопку окрашивайте div.out-10 выбранным цветом (имеется ввиду .style.background = ).


function f10() {
    let output10 = document.querySelector('.out-10');
    let input10 = document.querySelector('.i-10');
    let button10 = document.querySelector('.b-10');
    button10.style.background = input10.value; // окрашивает саму кнопку button10 в тот же цвет, что задан в input
}

document.querySelector('.b-10').onclick = f10;


// Task 13
//  Создайте input(range).i-13. При изменении положения ползунка i-13 выводите значение в out-13. Для события используйте oninput.

function f13() {
    console.log(document.querySelector('.i-13').value);
    document.querySelector('.out-13').innerHTML = document.querySelector('.i-13').value;
}

// Task 15
// Создайте text-area.t-15, input.i-15 и button.b-15 - при нажатии на кнопку выводите текст из input.i-15 в textarea.t-15 и на страницу в out-15.

function f15() {
    let input15 = document.querySelector('.i-15');
    let textarea15 = document.querySelector('.t-15');
    let output15 = document.querySelector('.out-15');
    textarea15.value = input15.value;
    output15.innerHTML = input15.value;
}

document.querySelector('.b-15').onclick = f15;