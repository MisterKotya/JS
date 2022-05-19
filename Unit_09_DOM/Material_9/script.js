const one = document.querySelector('.one');

one.style.width = '150px';
one.style.paddingBottom = '40px';


// console.log(one.style);

one.classList.add('two', 'three'); // добавление классов 'two' и 'three'css в js
one.classList.remove('three'); // удаление класса 'three'


const toggle = document.querySelector('.toggle');

toggle.onclick = function() {
    this.classList.toggle('three'); // this - имеет особое значение, зависящее от контекста, в котором оно применяется
}


// атрибуты data
console.log(one.getAttribute('data')); // читаю атрибут или добавляю
console.log(document.querySelectorAll('link')[1].getAttribute('href')); // getAttribute - добавляет в консоль в данном случае ссылки

one.setAttribute('data-num', 6); // добавили через setAttribute в код js


let gas = document.querySelectorAll('.gas'); // с помощью атрибутов переносить данные в html
for (let i = 0; i < gas.length; i++) {
    gas[i].onclick = function () {
        let gallons = document.querySelector('.gallons').value; // присвоение переменной gallons
        let amount = this.getAttribute('data'); // присвоение data через getAttribute
        console.log(gallons*amount); // вывод результата всех значений gallons * на их классификацию (10*1.2=12)
    }
}




let a = document.createElement('div'); // создали div в js
a.innerHTML = 'Hello!';
a.classList.add('one');
a.onclick = function() {
    alert('hello');
}

document.querySelector('.test').appendChild(a); // вставление одного элемента внутрь другого


console.log(a);