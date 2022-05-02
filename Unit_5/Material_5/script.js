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