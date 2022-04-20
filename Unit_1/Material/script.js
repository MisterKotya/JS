console.log('Hello!'); // строки берём в кавычки
console.log('world');
console.log('333');
console.log(3334); // число 3334 отличается от текста '333'(всегда черный цвет) в консоли цветом 
console.log('Hello' + 'world'); //  конкатенация - слепление строк
console.log('Hello' + ' world'); //  конкатенация
console.log('Hello ' + 'world'); //  конкатенация
console.log('Hello' + ' ' + 'world'); //  '' - это пробел (конкатенация)
console.info('Hello');
// alert('Hello'); // вызывает всплывающее окно
// alert('Hello'); // ctrl+/ - комментирование
// alert('Hello');

document.getElementById('out').innerHTML = 'Hello';  /* document.getElementById('out') - захват элемента 'out' по ID(#) с HTML-страницы, 
а .innerHTML - св-во, которое может присвоить(=) другое значение вместо изначального 1111*/
document.getElementById('out').innerHTML = '2019';
document.getElementById('out').innerHTML = '<b>2020</b>';

document.querySelector('h2.header').innerHTML = 5; // document.querySelector('h2.header') - захват элемента 'h2'по классу с выбором присвоенного ему имени, т.е. конкретизация условия захвата h2
document.querySelector('.header').innerHTML = 15; // захват элемента 'h2'с HTML по классу header
document.querySelector('#one').innerHTML = 777; // захват элемента 'one'с HTML по id (#) - есть # - Обращение через CSS-селекторы
document.getElementById('one').innerHTML = 888; // нет #

let b; // var a - устарело // let - переменная - ящик для хранения определенной информации, переменная объявляется один раз 
let a = document.querySelector('#one'); // внутрь перменной 'а' получил параграф
let c; // объявление переменной
c = document.querySelector('.header'); // присвоение переменной 
a.innerHTML = 999; // нужно задавать правильное имя переменной, !new - ошибка
c.innerHTML = 6666;
