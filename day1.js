"use strict";
//! --------------------------------------------------- Aufgabe 1 ---------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
function sum(elements) {
    let result = 0;
    elements.map((element) => {
        result = result + element;
    });
    return result;
}
console.log("Aufgabe 1", sum([1, 2, 3]));
//! --------------------------------------------------- Aufgabe 2 ---------------------------------------------------
function sum2(elements) {
    let sum = "";
    elements.forEach((element) => {
        sum += element;
    });
    return sum;
}
console.log("Aufgabe 2", sum2([1, "test", 3]));
//! --------------------------------------------------- Aufgabe 4 ---------------------------------------------------
// function genericLength(elements: (number | string)[]): number {})))
function genericLength(elements) {
    return elements.length;
}
console.log("Aufgabe 4", genericLength([1, 2, 3]));
//! --------------------------------------------------- Aufgabe 5 ---------------------------------------------------
function genericLast(elements) {
    if (elements.length > 0) {
        return elements[elements.length - 1];
    }
    else {
        return undefined;
    }
}
console.log("Aufgabe 5", genericLast([1, 2, 5]));
//# sourceMappingURL=day1.js.map