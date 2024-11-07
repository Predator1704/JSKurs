const arr = ['!', 'JS', 'love', 'I'];
const newArr = [];

for(i = arr.length - 1; i >= 0; i = i - 1) {  
    newArr.push(arr[i]);
}
console.log(newArr.join(' '));

