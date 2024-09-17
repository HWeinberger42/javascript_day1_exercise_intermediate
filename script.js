// exercise 1

let array = [ "Tesla", "Audi" , "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];

console.log(array);

array.sort();

console.log(array);

// exercise 2.1

let array2 = ['apple', 'banana', 'kiwi', 'mango', 'pear'];

console.log(array2);

array2.push("orange");

console.log(array2);

array2.shift();

console.log(array2);

array2.unshift("apple");
array2.pop();

console.log(array2);

array2.splice(0,1,"strawberry");

console.log(array2);

// exercise 2.2

let array3 =['monkey', 'horse', 'dog', 'elephant', 'giraffe'];

console.log(array3);

array3.shift();

console.log(array3);

array3.unshift("cat");

console.log(array3);

array3.pop();

console.log(array3);

array3.push("tiger");

console.log(array3);

array3.sort();
array3.reverse();

console.log(array3);

// exercise 2.3

let string = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";

document.write(`${string}<br><br>`);

let array4 = string.split("/");

document.write(`${array4}<br><br>`);

let _print = null;

for (let index = 0; index < array4.length; index++) {
    _print = array4[index];
    document.write(`${_print}<br><br>`)
}

