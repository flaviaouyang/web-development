// print triangle
function printTriangle(lineNUm){
    for (let i = 1; i <= lineNum; i++) {
        console.log("#".repeat(i));
    }
}
// let lineNum = 7;
// printTriangle(lineNum);

// fizzbuzz
function fizzBuzz(a, b) {
    for (let i = a; i<=b; i++) {
        if(i%3 === 0 && i%5 !== 0) {
            console.log("Fizz");
        } else if (i%5 === 0 && i%3 !== 0) {
            console.log("Buzz");
        } else if (i%5 === 0 && i%3 === 0) {
            console.log("FizzBuzz");
        } else {
            console.log(i);
        }
    }
}

// fizzBuzz(1, 15);

//  print chessboard
function chessboard() {
    for(let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 8; j++) {
            if (i%2 === 0) {
                if (j%2 === 0) {
                    process.stdout.write(" ");
                } else {
                    process.stdout.write("#");
                }
            } else {
                if (j%2 === 0) {
                    process.stdout.write("#");
                } else {
                    process.stdout.write(" ");
                }
            }
        }
        console.log();
    }
}

chessboard();