'1'
setTimeout(() => {
console.log("Javascript");
}, 3000);

'2'
setTimeout(() => {
    console.log("Manikanta");
}, 5000);

'3'
for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 2000);
}

'4'
setTimeout(() => {
    console.log("Good Morning");
}, 2000);


'5'
setTimeout(() => {
    console.log("Good Afternoon");
}, 4000);


'6'
function greet(name) {
    setTimeout(() => {
        console.log("Good Morning, " + name);
    }, 6000);
}
greet("Manikanta");

'7'
// 'setInterval(() => {'
//     console.log("Javascript");
// }, 2000);

'8'
let w = 1;

let x = setInterval(() => {
    console.log(w);

    w++;

    if (w > 10) {
        clearInterval(x);
    }
}, 1000);

'9'
let e = 2;
let y = setInterval(() => {
    console.log(e);
    e += 2;
    if(e>20){
        clearInterval(y);
    }
}, 1000);

'10'
let i = 1;

let z = setInterval(() => {
    console.log("5 x " + i + " = " + (5 * i));

    i++;

    if (i > 10) {
        clearInterval(z);
    }
}, 1000);

'11'
let s = 1;

setInterval(() => {
    console.log(s);
    s++;
}, 1000);

'12'
let o = setTimeout(() => {
    console.log("Hello");
}, 5000);

clearTimeout(o);

console.log("Timeout Cancelled");

'13'
let p = setTimeout(() => {
    console.log("message 1");
}, 2000);
let q = setTimeout(() => {
    console.log("message 2");
}, 4000);
let r = setTimeout(() => {
    console.log("message 3");
}, 6000);
clearTimeout(q);

'14'
function welcome(name) {
    let t = setTimeout(() => {
        console.log("Welcome, " + name);
    }, 10000);
    setTimeout(() => {
        clearTimeout(t);
        console.log("Timeout Cancelled");
    }, 5000);
}
welcome("Manikanta");

'15'
let a = 1;
let b = setInterval(() => {
    console.log(a);
    if (a >= 10) {
        clearInterval(b);
    }   
    a++;
}, 1000);


'16'
let c = setInterval(() => {
    console.log(c);
},2000);

setTimeout(() => {
    clearInterval(x);
    console.log("stop");
}, 10000);


'17'
let odd = 1;
let l = setInterval(() => {
    console.log(l);

    if (l===19) {
        setInterval(l);
    }
    i+=2;

},10000);

'18'
let table = 1;
let k = setInterval(() => {
    console.log("7x" + k + "=" + "7*k")

    if (k==10){
        
    }
} ) 