let a = 6;
let b = 'Hello';

console.log(a);

t = parseInt(t)
parseInt("string", radix); //ф-ция преобразования принимает два аргумента(строку и основание системы) из строки в число и игнорит e**n(экспонент в стемени n)
// string - строка, записанная в виде числа "12px" вывод в консоли 12, radix - основание системы счисления
//parseInt("12px") => 12    parseInt("Hello12.5") =>  Nan   parseInt(+12.5ello) => "+12.5"(преобразование в строку) => без radix считает по десятичной системе исчисления => +12
// parseInt("0123", 8) => 83 - высчитано по восьмеричной системе исчисления

t = parseFloat(t)
parseFloat("string"); // ф-ция преобразования принимает только один аргумент из строки в число или значение Nan, как это получается в данном варианте
// parseFloat игнорит все символы, за исключением 0-9, -1 +2 12.5 e**n(экспонент в степени n)
// parseFloat("3.14") => 3.14   parseFloat("314e-2") => 3.14   parseFloat("e23") => Nan    parseFloat("0x12") => 0   parseFloat("0123") => 123 - считает по десятиричной системе исчисления


let inputIn = document.querySelector('.input-in'); // захват тэга input и правило написания так inputIn - называется camelcase
let button = document.querySelector('button'); // захват тэга button
let div = document.querySelector('.out');

// в JS, н-р кликаю по кнопке Go(что то произошло - это событие click) и я что-то запускаю, какой-то кусочек кода, т.е. запускаю процедуру или выполняю функцию.
//Чтобы что-то произошло в JS, нужно использовавть событие и функцию.

button.onclick = function () { // button - кнопка и oncklick - событие(кликаем на кнопку) = function(выполняется функция)  
    // кнопка будет нажата, функция будет выполнена и никак иначе и в консоль выпадет Работает!!!!!!
    console.log('Работает!!!!!!');
    // console.log(inputIn.value); // value - это то, что введено в input - научился читать значение из input !!!
    let b = +inputIn.value; // + преобразование в число!!!!!!!
    // console.log(b * 2); // при вводе в input Hello на выходе получаем не число - Nan
    // console.log(b / 0); // число при выводе даёт Infinity именно в JS, а если строка, то Nan
    console.log(b + 10); // изначально склеивается, потому что первый элемент строчный b10, но когда let b = +inputIn.value; то выводится число.
    div.innerHTML = b; // вывод на страницу
    inputIn.value = ''; // присвоение очистки input после нажатия кнопки
}
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.
let e = 3;
let f = 5;
document.querySelector('.out-3').textContent = e + f; // Вывод значения переменных с совершением операций через textContent на страницу

// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.
let e3 = 3;
let f3 = 'Hello';
document.querySelector('.out-6').textContent = e3 + f3; // не смотря на то, что строка идет вторая, мы получаем в итоге строку, потому что мы не можем ее приравнять к числу

// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.
let inputT8 = document.querySelector('.inputT8');
function t8() {
    console.log(inputT8.value);
}
document.querySelector('.b-8').onclick = t8;

function t9() {
    let valueOfT9 = inputT9.value; // создаем отдельную переменную для inputT9.value;(набор ввода разных чисел в строке)
    outputB9.innerHTML = valueOfT9; // производим через outputB9 вывод на страницу .innerHTML всех разных набранных чисел в строке inputT9.value;, посредством раннее присвоенной переменной valueOfT9
    inputT9.value = '';
}

document.querySelector('.b-9').onclick = t9;