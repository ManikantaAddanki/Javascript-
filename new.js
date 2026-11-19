function add(a, b) {
    console.log(a+b);
}
add(5, 10);



function multiply() {
    console.log("Manikanta");
}
multiply();



let div = (a, b) => {
    return a / b;
}
console.log(div(10, 2));

 
let sub = (a, b) => a - b;
console.log(sub(80, 18));


function person(name, age) {
    this.name = name;
    this.age = age;
}
let p1 = new person("Manikanta", 22);
console.log('test',p1);


let obj = {
    name: 'Manikanta',
    course: function() {
        console.log(this.name);
    }
};
obj.course();

let person1 = (name, age) => {
    return { name, age };
};
console.log(person1("Manikanta", 22));


 'in normal function when we assign new keyword it creates an instance of the function'
 'where as in arrow function when we assign new keyword it does not create an instance of the function'

 'in arrow function does not have its own this keyword, insted it barrows this keyword from its parent scope'
 'in normal function we can use this keyword but in arrow function we cannot use this keyword'

'in normal functions parameters are passed by value but in arrow functions parameters are passed by reference'

'in normal functions we use rest parameters and arguments object'
'where as in arrow functions we can rest parameters like ...args but we cannot use arguments object'


'this in normal function'

let obj1 = {
    name: 'Manikanta',
    course: function() {
        console.log(this.name);
    }
};
obj1.course();

'this in arrow function'

let obj2 = {
    name: 'Praveen',
    course: () => {
        console.log(this.name);
    }
};
obj2.course();
