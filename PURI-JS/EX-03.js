const names = ['Alice','Bob','Charlie','David'];
// let index =0;
// while(index< names.length){
//     const name = names[index];
//     console.log(name)
//     index++;
// }
let i = 0;

while (i < names.length) {
  if (names[i] === 'Charlie') {
    console.log('Charlie!');
    break;
  }
  i++;
}
