//! -------------------------------------- Aufgabe 1 ------------------------------------
function sum(elements: number[]): number {
    let result = 0;
    elements.map((element) => {
        result = result + element;
    })
    return result;
}

console.log("Aufgabe 1: ", sum([1, 2, 3]));

//! -------------------------------------- Aufgabe 2 ------------------------------------
function sum2(elements: (number | string)[]): string {
    let sum = "";
    elements.forEach((element) => {
        sum += element;
    });
    return sum;
}
console.log("Aufgabe 2: ", sum2([1, "test", 3]));

//! -------------------------------------- Aufgabe 4 ------------------------------------
// function genericLength(elements: (number | string)[]): number {
function genericLength<T>(elements: Array<T>): number {
    return elements.length
}

console.log("Aufgabe 4: ", genericLength([1, 2, 3]));

//! -------------------------------------- Aufgabe 5 ------------------------------------
function genericLast(elements: (number | string)[]): (number | string | undefined) {
    if (elements.length > 0) {
        return elements[elements.length - 1];
    } else {
        return undefined;
    }
}


console.log("Aufgabe 5: ", genericLast([1, 2, 5]));

//! ALTERNATIVE:

// function genericLast<T>(elements:Array<T>): T | undefined{
// if (elements.length > 0) {
//     let theIndex = (elements.length - 1);
//     return elements[theIndex];
// } else {
//     return undefined
// }
// }


// console.log("Aufgabe 6: ",genericLast([1, 2, 5]));

//! -------------------------------------- Aufgabe 6 ------------------------------------

function genericLast2<T>(elements: T[] | T): T | undefined {
    const array = Array.isArray(elements) ? elements : [elements];
    if (array.length > 0) {
        return array[array.length - 1];
    } else {
        return undefined;
    }
}


console.log("Aufgabe 6: ", genericLast2([1, 2, 5]));

//! -------------------------------------- Aufgabe 7 ------------------------------------
function getRange<T>(array: T[], start: number, end: number): T | T[] {
    if (array.length === 1) {
        return array[0];
    } else {
        return array.slice(start, end + 1);
    }
}


const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["apple"];
console.log("Aufgabe 7.1: ", getRange(arr1, 1, 3)); // [2, 3, 4]
console.log("Aufgabe 7.2: ", getRange(arr2, 0, 0)); // "apple"




export { }