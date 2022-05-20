const one = document.querySelector('.one');

one.style.width = '150px';
one.style.paddingBottom = '40px';


// console.log(one.style);

one.classList.add('two', 'three'); // добавление классов 'two' и 'three'css в js
one.classList.remove('three'); // удаление класса 'three'


const toggle = document.querySelector('.toggle'); // toggle - это класс

toggle.onclick = function () {
    this.classList.toggle('three'); // this - имеет особое значение, зависящее от контекста, в котором оно применяется
}

//  Метод toggle объекта classList чередует заданный CSS класс элемента: добавляет класс, если его нет и удаляет, если есть. 
// "toggle () отличная функция которая позволяет создавать красивые javascript эффекты для элементов страницы." 

// атрибуты data
console.log(one.getAttribute('data')); // читаю атрибут или добавляю
console.log(document.querySelectorAll('link')[1].getAttribute('href')); // getAttribute - добавляет в консоль в данном случае ссылки
let a1 = document.querySelector('p-18').getAttribute('data-b'); // с помощью getAttribute получаем data-b атрибут и с помощью querySelector параграф p-18

one.setAttribute('data-num', 6); // добавили через setAttribute в код js


let gas = document.querySelectorAll('.gas'); // с помощью атрибутов переносить данные в html
for (let i = 0; i < gas.length; i++) {
    gas[i].onclick = function () {
        let gallons = document.querySelector('.gallons').value; // присвоение переменной gallons
        let amount = this.getAttribute('data'); // присвоение data через getAttribute
        console.log(gallons * amount); // вывод результата всех значений gallons * на их классификацию (10*1.2=12)
    }
}




let a = document.createElement('div'); // создали div в js
a.innerHTML = 'Hello!'; // добавили текст Hello! классу div
a.classList.add('one'); // добавили класс one классу div
a.onclick = function () { // добавили onclick, по которому выполняется функция function ()
    alert('hello');
}

document.querySelector('.test').appendChild(a); // вставление одного элемента внутрь другого


console.log(a);

out14.prepend(a);// Метод prepend позволяет вставить в начало какого-либо элемента другой элемент: родитель.prepend(элемент или строка)
// Метод .before() добавляет текст перед заданным элементом.
// Метод .after() добавляет текст после заданного элемента.
// Метод .replaceWith() заменяет одни элементы другими. 
// Метод setAttribute позволяет изменить значение заданного атрибута какого-либо тега, элемент.setAttribute(имя атрибута, новое значение)

//  Task 4
// По нажатию кнопки b-4 запускайте функцию f4, которая делает toggle класса bg-4 для блока out-4.

const out4 = document.querySelector('.out-4');

function f4() {

    out4.classList.toggle('bg-4');

}

document.querySelector('.b-4').onclick = f4;




//  Task 7
// По нажатию кнопки b-7 запускайте функцию f7, которая присваивает блокам out-7 класс .bg-7. Обратите внимание, что данных блоков больше одного, следовательно нужен цикл.

let blocks7 = document.querySelectorAll('.out-7');

function f7() {

    for (let i = 0; i < blocks7.length; i++) { // сам массив blocks7, а это blocks7[i] - элемент массива
        blocks7[i].classList.add('bg-7');
    }
}

document.querySelector('.b-7').onclick = f7;



//  Task 11
// Добавьте кнопку .b-11, которая запускает функцию f11. Функция создает через createElement div c текстом 25 и добавляет его через append в out-11.

let out11 = document.querySelector('.out-11');

function f11() {
    let a = document.createElement('div');
    a.textContent = '25';
    out11.appendChild(a);

}

document.querySelector('.b-11').onclick = f11;