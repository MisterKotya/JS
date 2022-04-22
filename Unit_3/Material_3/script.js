let a = 19;

// >= <= == !=(не равно)
// if (a != 9) /*в () пишем условие*/ {
//     //если true, то выполнится в console.log('Yes'); это верно при a = 16;
//     console.log('Yes');
// }
// else {
//     console.log('else'); // если false, то выполнится в console.log('else'); это верно при a = 6;
// }

//     16 < a < 50 - так писать в JS нельзя, только такие формы  num >= 16 &&/*И*/ num < 60

//const - постоянная неизменная величина, помещение в нее тех элементов, которые в процессе кода неизменны

const button = document.querySelector('button');
const input = document.querySelector('.age');

// "function ()" - анонимная функция без названия - используется в коде всего один раз, она равнозначна "() =>" - называется стрелочная функция

// Если выполнилось хоть одно условие, то мы выходим из цикла с этим решением

button.onclick = () => {
    let num = +input.value;
    if (num >= 16 &&/*И*/ num < 60) {         // if единожды в фунции задается
        console.log('Welcome!!!'); // true
    }
    else if (num > 60) {                      // else if может задаваться любое кол-во раз
        console.log('Ты точно сюда?');
    }
    else if (num > 60) {
        console.log('Ты точно сюда?');
    }
    else if (num > 60) {
        console.log('Ты точно сюда?');
    }
    else {                                   // else - задается в самом конце единожды, как false решение
        console.log('Ты не пройдёшь!!!'); // false
    }
    // после правильного выполнения первого условия, мы переходим сразу сюда или если всё неправильно, то выполнится последний блок

    switch (num) {
        case 15:   // if () {} = case 15 or random num :
            console.log('Ещё год потерпи!!!');
            break;
        case 16:
            console.log('Ураааа можно!!!');
            break;
        default:  // else {} = default:
            console.log('ооооок');

    }
}


let b = 5;
let c = 3;

console.log(b == 7); // false
console.log(b != 7); // true
console.log(b < 7); // true
console.log(b > 3 && b < 7); // true   
console.log(c > 3 && c < 7); // false && - оператор И
console.log(c == 3 || c == 7); // true || - оператор ИЛИ


//значения на вывод, к примеру out.innerHTML = true;(выводим какое-то истинное значение ) or  out.innerHTML = false;(выводим undefined, )
//or out.innerHTML = 'false'; (выводим строку, т.е. исполняется true)

// вывод в консоль - console.log(''); или вывод на страницу output.innerHTML = true(булевое значение без кавычек, иначе это строка); or output.innerHTML = '....';

// НЕЛЬЗЯ булевые значения true or false добавлять в кавычки, иначе это строка
// НЕЛЬЗЯ дописывать задания, выполнять СТРОГО то, что написано и нельзя менять имена переменных, н-р let на const, потому что возможны в будущем ошибки


//в if (число), все числа кроме 0 будут true, значит переходит в else и выводит 0 и это будет false