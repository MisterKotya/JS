let f1 = document.querySelector('.f-1'); // кнопка
function one() {
    console.log('work');
}

one(); // Способ №1 - вызов функции

// f1.onclick = one; // Способ #2 - вызов функции через кнопку (название функции без круглых скобок)

f1.onclick = function () { // анонимная функция, значит не имеет имени, можно вызвать всего один раз
    console.log('work');
}

one();

f1.onclick = () => { // анонимная функция или стрелочная, один из способов написания
    console.log('Hello');
}

console.log(1 + one());
console.log(one());   // undefined

function two() { // именная функция, можно вызвать любое кол-во раз
    console.log('work 22222');
    return 54; // возвратить значение, н-р производим операцию вычисления и вместо ф-ции two() ставим 54 и в console.log получаем 1+54=55
    // ф-ция возвращает своё значение - это значит внутрь переменной попадет какой-то результат после выполнения функции
}

two();

console.log(1 + two());


let a = 8;
let b = 9;

function multi() {
    console.log(a * b);
    return a * b;
}

let c1 = multi(); // 72
let c2 = 10 * multi(); // 720
console.log(c1, c2); // 72, 720


function multi2(x = 9, y = 8) { //  в скобках указаны параметры ф-ции
    return x * y; // производим вычисления и выводим результат, н-р console.log (multi2 (4,5)); = 20
    // все, что ниже будет написано, то не будет выполняться, если есть return 
    // если нужно завершить функцию и выйти из неё, то написать return false or true;
}

console.log(multi2(4, 5));
console.log(multi2(20, 5));
console.log(multi2(20, a));

console.log(multi2(10));


document.querySelector('.f-2').onclick = function () { // анонимная функция - работает в начале, но потом замещена нижней
    console.log('+++++++');
}


document.querySelector('.f-2').onclick = () => { // стрелочная(анонимная) функция - работает и замещает верхнюю функцию
    console.log('arrow');
    console.log('*******');
}
// function (c) {
//     return 56*c;
// }


// (c) => 'Hello'*c;



// Task 6
// Напишите функцию t6, которая принимает 2 числа и возвращает случайное целое число от первого до второго принятого параметра. 
let a = 1;
let b = 7;

function t6(a, b) {

    return Math.floor(Math.random() * (b - a + 1) + a);
}

document.querySelector('.b-6').onclick = function () {
    document.querySelector('.out-6').textContent = t6(1, 7);
}



// Task 7
// Напишите функцию t7, которая возвращает случайный цвет в формате rgb(x, y, z)(строка).Где x, y, z - случайные числа в диапазоне[0, 255]. 

function t7() {

    return `rgb(${t6(0, 255)}, ${t6(0, 255)}, ${t6(0, 255)})`
}

document.querySelector('.b-7').onclick = function () {
    document.querySelector('.out-7').style.background = t7();
}



// Метод trim() удаляет пробельные символы с начала и конца строки. Метод trim() не изменяет значение самой строки.