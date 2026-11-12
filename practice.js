1.
let student = {
    Name: "Manikanta",
    Age: 22,
    College: "KL University",
    course: "B.Tech CSE",
    city: "Hyderabad"
};
console.log(student.Name);
console.log(student.Age);
console.log(student.College);
console.log(student.course);
console.log(student.city);

2.
let employee = {
    id: 101,
    name: "Rahul",
    salary: 35000,
    department: "IT"
};

console.log(employee.id);
console.log(employee.name);
console.log(employee.salary);
console.log(employee.department);

3.
let car = {
    brand: "Hyundai",
    model: "Venue",
    color: "White",
    price: 1200000
};

console.log(car["brand"]);
console.log(car["model"]);
console.log(car["color"]);
console.log(car["price"]);

4.
let person = {
    name: "Mani",
    age: 22,
    city: "Hyderabad"
};

person.email = "manikanta29@gmail.com";

console.log(person);

5.
let student1 = {
    name: "Ravi",
    age: 20,
    course: "Java"
};

student1.age = 22;

console.log(student1);

6.
let product = {
    name: "Laptop",
    price: 50000,
    discount: 10
};

delete product.discount;

console.log(product);

7.
let mobile = {
    brand: "Samsung",
    model: "Galaxy S25",
    color: "Black",
    price: 80000
};

console.log(Object.keys(mobile).length);

8.
let book = {
    title: "Wings of Fire",
    author: "A.P.J. Abdul Kalam",
    price: 350
};

console.log(book.title);
console.log(book.author);
console.log(book.price);

9.
let student1 = {
    name: "Manikanta",
    age: 22,
    course: "CSE"
};

let student2 = {
    name: "Praveen",
    age: 25,
    course: "EEE"
};

console.log(student1);
console.log(student2);

10.
let std = {
    name: "Manikanta",
    age: 22,
    address: {
        city: "Hyderabad",
        state: "Telangana",
        pincode: 500078
    }
};

console.log(std.address.city);
console.log(std.address.state);

11.
let company = {
    name: "Cognizant",
    location: "Hyderabad",
    employee: {
        id: 102,
        name: "Manikanta"
    }
};

console.log(company.employee.name);


12.
let Cricket = {
    Player: "Virat Kohli",
    Role: "Right-hand batsman",
    Height: "5.9 ft",
    Runs: 28359,
    Awards: ["ICC Cricket World Cup", "ICC Champions Trophy", "Sir Garfield Sobers Trophy"]
};

for (let key in Cricket) {
    console.log(key);
}

13.
let Student = {
    name: "Manikanta",
    age: 22,
    course: "CSE"
};

for (let key in Student) {
    console.log(key + ": " + Student[key]);
}

14.
let user = {
    username: "manikanta29",
    email: "addankimanikanta29@gmail.com",
    city: "Hyderabad"
};

console.log("email" in user);


15.
let stu = {
    name: "Manikanta",
    age: 22,
    course: "CSE"
};

let keys = Object.keys(stu);

console.log(keys);

16.
let Product = {
    name: "Laptop",
    price: 50000,
    brand: "HP"
};

let values = Object.values(Product);

console.log(values);


17.
let emp = {
    id: 101,
    name: "Rahul",
    department: "IT"
};

let entries = Object.entries(emp);

console.log(entries);


18.
let person = {
    name: "Manikanta",
    age: 22
};

Object.freeze(person);

person.age = 25;
person.city = "Hyderabad";

console.log(person);
console.log(Object.isFrozen(person));