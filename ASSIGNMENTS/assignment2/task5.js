const num =[2,10,5,6,8];

// // sum
let sum=0;
for ( let i=0;i<num.length;i++){
    // sum += num[i]
    sum= sum + num [i]
}
console.log(`the given number ${num}`);
console.log(`the sum of the 5 array ${sum}`);

// num.forEach(a=>{
//     sum += a
// })
// console.log(sum);


// large number
let largenumber = Math.max(...num)
console.log(`the large number is ${largenumber}`)