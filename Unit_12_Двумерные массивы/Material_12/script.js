let a = [4,5,6];
let b = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
// console.log(b);

// for (let i=0; i < b.length; i++) {
//     // console.log(b[i]); // мы перебираем внешний массив b с внутренними значениями индексов 0[1,2,3],1[4,5,6],2[7,8,9] и выводим их поочередно
//     let c = b[i]; // c - массив [1,2,3]
// //     for (let k=0; k < c.length; k++) {
// //         console.log(c[k]);
// //     }
// for (let k=c.length-1; k >= 0; k--) {  // мы пересчитываем массив в обратном порядке, [3,2,1] и т.д.
//            console.log(c[k]);
//         }
//  }


let out = ''; // присваивания всех значений

 for (let i = 0; i < b.length; i++) {
     for(let k=0; k < b[i].length; k++) {
        //  console.log(b[i][k]); // вывод, где i - это элемент внешнего массива, а k - это внутренний массив уже.
         out += b[i][k] + ' ';
     }
     out += '<br>';
 }

 document.querySelector('.out').textContent = out;

out = ''; // очистка всех значений

for (let i = 0; i < b.length; i++) {
         for(let k=0; k < b[i].length; k++) {
            //  console.log(b[i][k]); // вывод, где i - это элемент внешнего массива, а k - это внутренний массив уже.
             if (b[i][k] > 4) {
             out += b[i][k] + ' ';
            }
         }
         out.textcontent += '<br>';
     }
     console.log(out);




// задача - нажимать кнопку, передвигать единицу в массиве

let d = [1,0,0,0,0]; 
document.querySelector('.out2').textContent = d;
let k = 0;
document.querySelector('button').onclick = () => {
    if (k+1 < 5) {
    d[k] = 0;
    d[k+1] = 1;
    k++;
    document.querySelector('.out2').textContent = d;
}
}