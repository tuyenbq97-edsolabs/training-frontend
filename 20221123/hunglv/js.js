let arr = [2, 4, 6, 3, 17, 8, 10, 1, 9, 5, 19, 20, 21, 24, 40, 25, 28, 29, 31, 11];
let sum = 0;
for (const a of arr) {
  sum += a;
}
const avg = sum / arr.length;
 console.log(sum)
 console.log(avg)
    const btn = [2,4,6,3,17,8,10,1,9,5,19,20,21,24,40,25,28,29,31,11];
    const evenNumbers = [];
    for (let i = 0; i < btn.length; i++) {
        if (btn[i] % 2 === 0) {
            evenNumbers.push(btn[i]);
        }
    }
console.log(evenNumbers);
const numbers = [2,4,6,3,17,8,10,1,9,5,19,20,21,24,40,25,28,29,31,11];
const oddNumbers = [];
for (let i = 0;i< numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        oddNumbers.push(numbers[i]);
    }
}
console.log(oddNumbers)
    let add =[2,4,6,3,17,8,10,1,9,5,19,20,21,24,40,25,28,29,31,11];
  let max = add[0];
  for( let i = 1; i < add.length ;i++){
    if( max < add[i]){
max = add[i];
    }
  }
console.log("max=",max);

 let abn =[2,4,6,3,17,8,10,1,9,5,19,20,21,24,40,25,28,29,31,11];
  let min = abn[0];
  for( let i = 1 ; i < abn.length ; i++){
    if( min > abn[i]){
    min = abn[i];
    }
}
  console.log("min=",min)