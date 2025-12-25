let values1 = ['Apple',1,false];
let values2 = ['Fries',2,true,'Apple'];
let values3 = ['Mar',9,'Apple'];

// let commonValues = values1.filter(item =>
//   values2.includes(item) && values3.includes(item)
// );

// console.log(commonValues);


// let result = [];

// for (let i = 0; i < values1.length; i++) {
//   if (
//     values2.includes(values1[i]) &&
//     values3.includes(values1[i])
//   ) {
//     result.push(values1[i]);
//   }
// }

// console.log(result);

// let commonValues = values1.filter(item => {
//   let foundIn2 = false;
//   let foundIn3 = false;

//   for (let i = 0; i < values2.length; i++) {
//     if (item === values2[i]) {
//       foundIn2 = true;
//       break;
//     }
//   }

//   for (let j = 0; j < values3.length; j++) {
//     if (item === values3[j]) {
//       foundIn3 = true;
//       break;
//     }
//   }

//   return foundIn2 && foundIn3;
// });

// console.log(commonValues);



// let c = new Map();
// for (let a of [values1, values2, values3])
//   for (let v of new Set(a))
//     c.set(v, (c.get(v) || 0) + 1);

// console.log([...c].filter(e => e[1] === 3).map(e => e[0]));

// let m = new Map();

// // bit 001
// for (let i = 0; i < values1.length; i++)
//   m.set(values1[i], (m.get(values1[i]) || 0) | 1);

// // bit 010
// for (let i = 0; i < values2.length; i++)
//   m.set(values2[i], (m.get(values2[i]) || 0) | 2);

// // bit 100
// for (let i = 0; i < values3.length; i++)
//   m.set(values3[i], (m.get(values3[i]) || 0) | 4);

// // 111 = in all arrays
// let result = [];
// for (let [k, v] of m) if (v === 7) result.push(k);

// console.log(result);

for (let val1 of values1){
    for(let val2 of values2){
        for(let val3 of values3){
            if (val1 === val2 && val2 === val3){
                console.log(val1);
            }
        }
    }
}