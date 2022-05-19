for (let i = 0; i < 6; i++) {
    console.log(i);
}

let k = 0;
while (k < 5) {   // выполняется до тех пор, пока соблюдается условие
    k++;  // сначала прибавляет + 1 - потом выводит
    console.log('k: ' + k);
    if (k == 3) continue; //  при нижней итерации +1 - бесконечный цикл
    // k++; -  сначала выводит - потом прибавляет +1
}

// 0 + ..... + 10

let sum = 0; // sum за пределами цикла всегда, чтобы можно было всегда менять его внутри цикла
let p = 0;
while (p <= 3) {
    sum = sum + p;
    p++;
}
console.log('sum ' + sum); // выводим итог 0+1+2+3=6


// *****
// *****
// *****

let out = document.querySelector('.out');
p = 0;
let outStr = '';
let flag = 3; // flag - счетчик

while (p < 4) {
    let p1 = 0;
    while (p1 < 4) {
        if (p1 < flag) {
            outStr += '&nbsp'; // '&nbsp' - неразрывный пробел
        }
        else {
            outStr += '*';
        }
        p1++;
    }
    flag--;
    outStr += '<br>';
    p++;
}
out.innerHTML = outStr;