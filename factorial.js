let num = 5;
let fact = 1;

if (num < 0) {
    console.log("Factorial is not defined for negative numbers");
} else {
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    console.log("Factorial of " + num + " is " + fact);
}


