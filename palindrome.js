let num = 121
let temp = num
let reversed = 0

while (temp > 0) {
    let digit = temp % 10
    reversed = (reversed * 10) + digit
    temp = Math.floor(temp / 10)
}

if (reversed === num) {
    console.log(num + " is a palindrome")
} else {
    console.log(num + " is not a palindrome")
}