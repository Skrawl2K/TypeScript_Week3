//! --------------------------------------------------- Aufgabe 1 ---------------------------------------------------

function sum(elements: number[]): number {
    let result = 0;
    elements.map((element) => {
        result = result + element;
    })
    return result;
}

console.log("Aufgabe 1", sum([1, 2, 3]));

//! --------------------------------------------------- Aufgabe 2 ---------------------------------------------------
function sum2(elements: (number | string)[]): string {
    let sum = "";
    elements.forEach((element) => {
        sum += element;
    });
    return sum;
}
console.log("Aufgabe 2", sum2([1, "test", 3]));

//! --------------------------------------------------- Aufgabe 4 ---------------------------------------------------

// function genericLength(elements: (number | string)[]): number {})))
function genericLength<T>(elements: Array<T>): number {
    return elements.length
}

console.log("Aufgabe 4", genericLength([1, 2, 3]));

//! --------------------------------------------------- Aufgabe 5 ---------------------------------------------------
function genericLast(elements: (number | string)[]): (number | string | undefined) {
    if (elements.length > 0) {
        return elements[elements.length - 1];
    } else {
        return undefined;
    }
}


console.log("Aufgabe 5", genericLast([1, 2, 5]));

//! ALTERNATIVE:

// function genericLast<T>(elements:Array<T>): T | undefined{
// if (elements.length > 0) {
//     let theIndex = (elements.length - 1);
//     return elements[theIndex];
// } else {
//     return undefined
// }
// }


// console.log(genericLast([1, 2, 5]));


//! --------------------------------------------------- Aufgabe 6 ---------------------------------------------------









export { }