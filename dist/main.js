"use strict";
function increment(num) {
    return num + 1;
}
console.log(increment(100));
function add(a, b) {
    return a + b;
}
console.log(add(100, 100));
function greet(name) {
    return `Hello, ${name}!`;
}
function isEven(num) {
    return num % 2 === 0;
}
function multiply(arr) {
    return arr.map(num => num * 2);
}
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
function getLength(str) {
    return str.length;
}
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error('Error:', error));
}
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet() {
            return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
        }
    };
}
function log(a, b) {
    console.log(`a:${a}, b${b}`);
}
log("文字だよ", "mozidayo");
log(1, 2);
log(true, false);
