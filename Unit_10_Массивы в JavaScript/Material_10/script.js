let a = 'Иван';
let b = 37;
let z7 = 'Овен';
let c = ['Иван', 37, 'Овен']; // 'Иван' - значение массива - index массива 0,1,2
let d = [];
console.log(c[0]); // 'Иван'
console.log(c[1]); // 37
console.log(c[5]); // undefined
console.log(c); // вывод всего массива в консоль
console.log(c.length); // length - 3



let a1 = 'Ivan';
let b67 = 43;
let iiNumber = 2324;

let zodiak = ['Козерог', 1, 1, 19];
let man = ['Ivan', 'male', 176, 93, 'Ivanov'];
console.log(zodiak);
console.log(man);
console.log('Длина массива');
console.log(zodiak.length); // length 4
console.log(man.length); // length 5
console.log(man[4]); // имя переменной - man и индекс 4 - 93
man[0] = 'Sergey'; // присвоение нового значения переменной
console.log(man);

// Перемена мест элементов массива местами с введением третьей переменной

let a2 = [1,2,3,4];
console.log(a2); // вывод [ 1, 2, 3, 4 ]

let t = a2[0]; // создаем третью переменную и присваиваем ей значение массива a2[0] равное 1
a2[0] = a2[3]; // присваиваем индексу a2[0] со значением 1 индекс a2[3] со значением 4
// a2[3] = a2[a2.length-1] - можно взаимозаменять вот таким значением переменной массива a2.length-1
console.log(a2); // вывод [ 4, 2, 3, 4 ]
a2[3] = t;
console.log(a2); // вывод [ 4, 2, 3, 1 ]
console.log(a2[888]); // вывод undefined

// // Способ №1

// for(let i=0; i < a2.length; i++) {
// document.querySelector('.out-1').innerHTML += a2[i] + ' ';
// }

// Способ №2

let out = ' '; // объявление переменной, куда будет складываться весь вывод
for(let i=0; i < a2.length; i++) {
    if (a2[i] % 2 == 0) { // условие вывода четных чисел
        out += a2[i] + '_ _'; // вывод на каждом цикле
    }
    }
    document.querySelector('.out-1').innerHTML = out; // вывод сразу всех значений цикла в строку

// находим max в массиве - ЗАПОМНИТЬ!!!
    let b1 = [45,2,5,23,43,1,2,6,12]; // проверка работы массива, подсунуть ей более простые значения, н-р [0,1,2,3,4]
    let max = b1[0] // внутри b1[0] лежит 4
    for (let i=0; i < b1.length; i++) {
        if (b1[i] > max) {
            max = b1[i]; // присвоение max значения 
        }
    }
    console.log('max: '+max); // вывод в консоли значения max: и числа 43(через +max)

    // находим sum(общая сумма всех элементов массива) в массиве - ЗАПОМНИТЬ!!!

    let sum = 0; // проссто равна нулю, это корзинка, куда складывается решение
    for (let i=0; i < b1.length; i++) {
      sum = sum + b1[i];
    }
    console.log('sum: '+sum); // вывод в консоли суммы элементов