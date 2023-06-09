const prompt = require("prompt-sync")({ sigint: true });

//input
const choice = parseInt(prompt('enter the choice : '));
let arr = [];
if (choice == 1) {
    console.log("you choose to get the area of a circle");
    arr[0] = parseInt(prompt("enter radius of the circle: "));
} else if (choice == 2) {
    console.log("you choose to get the area of a rectangle");
    arr[1] = parseInt(prompt("enter length of the rectangle: "));
    arr[2] = parseInt(prompt("enter breadth of the rectangle: "));
} else {
    console.log("choice not found");
}

function switchCase(choice, arr) {
    switch (choice) {
        case 1:
            return 2 * Math.PI * arr[0];
        case 2:
            return arr[1] * arr[2];
        default:
            return "no choice found";
    }
}

let result = switchCase(choice, arr);
console.log("Area: ", result);