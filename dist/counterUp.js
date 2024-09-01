"use strict";
var _a, _b;
class Counter {
    constructor(value) {
        this.value = value;
    }
    counterUp() {
        this.value++;
        this.displayValue();
    }
    counterdown() {
        this.value--;
        this.displayValue();
    }
    displayValue() {
        const value = document.getElementById('counter');
        value.textContent = this.value.toString();
    }
}
const counter = new Counter(0);
(_a = document.getElementById('increment')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    counter.counterUp();
});
(_b = document.getElementById('decrement')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    counter.counterdown();
});
