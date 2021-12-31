// function that find minimum
const findMinimum = (a, b) => {
    if (a > b) {
        return b;
    } else {
        return a;
    }
};

// console.log(findMinimum(100, 54));

// check if a number is even using Recursion
const isEven = (num) => {
    if (num === 0) {
        return "even";
    }
    if (num === 1) {
        return "odd";
    }
    if (num !== 0 && num !== 1) {
        return isEven(num-2);
    }
};

// console.log(isEven(1));

