'frequency count of characters in a string'

let str = "Manikanta";
let freq = {};

for (let char of str) {
    if (freq[char]) {
        freq[char]++;
    } else {
        freq[char] = 1;
    }
}
console.log(freq);


'freq count of each word in a string'

let str1 = "I am Manikanta and I pursed my B.Tech in CSE from KL University";
let words = str1.split(" ");
let wordFreq = {};

for (let word of words) {
    if (wordFreq[word]) {
        wordFreq[word]++;
    }
    else {
        wordFreq[word] = 1;
    }
}
console.log(wordFreq);


'reverse a string'

let num = 12345;
let rev = 0;

while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
}

console.log(rev);


'strong number'

let strongnum = 145;
let temp = strongnum;
let sum = 0;

while (temp > 0) {
    let rem = temp % 10;
    let fact = 1;

    for (let i = 1; i <= rem; i++) {
        fact = fact * i;
    }

    sum = sum + fact;
    temp = Math.floor(temp / 10);
}

if (sum === num) {
    console.log("Strong Number");
} else {
    console.log("Not a Strong Number");
}  


