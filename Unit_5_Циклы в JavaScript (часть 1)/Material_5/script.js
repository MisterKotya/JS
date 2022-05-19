// for ([начало]; [условие]; [шаг]) выражения

// for
// while

// for (старт; работаем, пока верно; счётчик) {}

for (let i = 0; i < 5; i++) {    // i -итерация - однократное выполнение цикла (возможен шаг i--, i++, i=i+2)
    console.log(i);
} // порядок исполнения цикла: 0 < 5 - выводим в консоль лог - 0+1; 1 < 5 - выводим в консоль лог - 1+1; и т.д., как только i=5 и условие false (5 < 5), то завершаем цикл
// и работаем дальше

// for (let i = 0; i >= 0; i++) {    // бесконечный цикл
//     console.log(i);
// }
for (let i = 0; i < 6; i = i + 1) {
    if (i == 4) break; // break - остановка цикла при достижении данного условия

    console.log('*******'); // звездочки в консоли
}


let div = document.querySelectorAll('.one'); // перенос всех div из HTML в JS через querySelectorAll
console.log(div);
// div.style.background = 'red'; равнозначна div[i]; - div [массив i, состоящий из 3-х элементов: 0,1,2];

// for (let i = 0; i < div.length; i = i + 1) {
//     console.log(div[i]); // вывод всех элементов массива в консоль, каждого со своим значением
//     div[i].style.background = 'red'; // применение события: вывод красного цвета и применение ко всем элементам массива
//     div[i].onclick = two; // кликаем по одному из элементов массива и переходим в функцию two
// }

// function two() {
//     console.log('work!!!');
// }

// let b = document.getElementsByClassName('one'); // перенос всех div из HTML в JS через getElements по классу
// let c = document.getElementsByTagName('div'); // перенос всех div из HTML в JS через getElements по тэгу
// console.log(b);
// console.log(c);

// for (i = 0; i < b.length; i++) {
//     b[i].style.border = '3px solid black';
// }

document.querySelector('button').onclick = () => {
    let r = document.querySelectorAll('input[type="radio"]');
    console.log(r);
    for (i = 0; i < r.length; i++) {
        if (r[i].checked) {
            console.log(r[i].value);
        }
    }
}

let out = ''; // переменная пустой строки

for (let i = 0; i < 10; i++) {
    // document.querySelector('#out').innerHTML = i; - выводит 9, потому что происходит перезатирание каждого последующего варианта 
    // вплоть до исполнения истинного условия
    // document.querySelector('#out').innerHTML += i + ' '; // благодаря += , выводит все истинные значения подряд через пробел, но каждый раз производя вывод
    if (i == 7) continue;
    out += i + ' ';
    //if (i == 7) break;
}
document.querySelector('#out').innerHTML = out;



//  Task 6
// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
//
// ******<br>
// ******<br>
// ******<br>
//
//Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов. Перенос строки - br. Количество строк (итераций, повторений) цикла вводит пользователь в i-6.
//

let out6 = '';

function t6() {
    let input6 = document.querySelector('.i-6');
    for (let i = 0; i < input6.value; i++) {
        out6 += '******' + '<br>';
    }
    document.querySelector('.out-6').innerHTML = out6; // очищаем поле
}

document.querySelector('.b-6').onclick = t6;



//  Task 8
// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки b-8  должна запускаться функция t8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// Задача решается с помощью цикла.

let out8 = '';

function t8() {
    let input81 = document.querySelector('.i-81').value;
    let input82 = document.querySelector('.i-82').value;
    for (let i = input81; i <= input82; i++) {
        out8 += i + ' ';
    }
    document.querySelector('.out-8').innerHTML = out8;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// Есть input i-91 и i-92 куда пользователь может ввести числа.
// По нажатию кнопки b-9 должна запускаться функция t9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл.
// цикл - один

let out9 = '';

function t9() {
    let input91 = +document.querySelector('.i-91').value;
    let input92 = +document.querySelector('.i-92').value;
    // if (in91 > in92) { - деструктурирующее присваивание для замены переменных местами
    //     [in91, in92] = [in92, in91];
    //   }
    if (input91 > input92) {
        let t = input91; // ввод третье переменной t для того, чтобы поменять местами input91 с input92 !!!
        input91 = input92;
        input92 = t;
    }
    for (let i = input91; i <= input92; i++) {
        out9 += i + ' ';
    }
    document.querySelector('.out-9').innerHTML = out9;
}

document.querySelector('.b-9').onclick = t9;

//вообще в js есть такое понимание как деструктурирующее присваивание, работает сверх просто тут:
a = 5, b = 7
a, b = b, a
Итого: a = 7, b = 5



//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла. Обращение к div выглядит так elem[i]
// вывести в out-11 содержимое каждого блока. Разделитель - пробел.
//     В результате должно получиться так:
//     one 3 4 two

let out11 = '';

function t11() {
    let elem = document.querySelectorAll('.div-11');
    console.log(elem);
    for (let i = 0; i < elem.length; i++) {
        out11 += elem[i].innerHTML + ' '; // вывод через elem[i].innerHTML всех значений элементов массива на страницу
    }
    document.querySelector('.out-11').innerHTML = out11;
}

document.querySelector('.b-11').onclick = t11;



//  Task 13
// Кнопка b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...

function t13() {
    let elem = document.querySelectorAll('.i-13');
    for (let i = 0; i < elem.length; i++) {
        elem[i].value = i + 1;
    }
}

document.querySelector('.b-13').onclick = t13;