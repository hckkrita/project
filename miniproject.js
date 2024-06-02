//1.promises //12. Error Handling with Promises
function fetchData(){
    return new Promise((resolve, reject)=>{
       setTimeout(() =>{
        if (Math.random()<0.5){
        const data=[{id: 101, name:"Ram", age: 23},
                    {id: 102, name:"Shyam", age: 28},
                    {id: 103, name:"Hari", age: 26}
        ]
        resolve(data);
        }
        else{
            reject("Failed")
        }
       },2000);
    });
}
fetchData().then(data=>{
    console.log(data);
})
.catch(error=>{
    console.error(error.message);
})

//2. Closures
function createCounter(){
    let count= 6;
    return{
        increment: function(){
            count+=1;
        },
        getCount: function(){
            return count;
        }
    };
}
const counter = createCounter();
counter.increment();
console.log(counter.getCount());
counter.increment();
console.log( counter.getCount()); 

//3.Callback
function processData(nums, callback) {

    return nums.map(callback);
}

const nums = [6,4,2,1];
const doubled = processData(nums, num => num * 2);
console.log('Doubled numbers:', doubled); 

//4.Async/ await
function fetchData(){
    return new Promise((resolve)=>{
       setTimeout(() =>{
        const data=[{id: 101, name:"Ram", age: 23},
                    {id: 102, name:"Shyam", age: 28},
                    {id: 103, name:"Hari", age: 26}
        ]
        resolve(data);
       },2000);
    });
}
async function getData(){
    const data= await fetchData();
    console.log(data);
}
getData();

//5. Array Manipulation Map
function doubleNumbers(numbers){
    return numbers.map(num => num * 2);
}
const numbers=[1,2,9,8];
const doubledNumbers= doubleNumbers(numbers);
console.log(doubledNumbers); 

//6. Array Manipulation Filtres
function filteredNums(nums){
    return nums.filter(num=> num>=10);
}
console.log(filteredNums([2,20, 28, 4])); 

//7. Array Manipulation Find
function findGreater(nums){
    return nums.find(num=> num>=15);
}
console.log(findGreater([4,6,17,29,4])); 

//8.Array Manipulation Reduce
function sumNums(nums){
    return nums.reduce((sum, num) => sum + num, 0);
}
console.log(sumNums([3, 4, 1, 4])); 

//9. Object Mannipulation 
function transferArray(user){
        return user.reduce((accum, user1) => {
            accum[user1.id] = user1;
            return accum;
        }, {}); 
}
const users = [
    { id: 101, name: "Ram", age: 23 },
    { id: 102, name: "Shyam", age: 28 },
    { id: 103, name: "Hari", age: 26 }
];
console.log(transferArray(user)); 

//10. Class and Object
class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        return ~`${this.name} is ${this.age} years old.`;
    }
}
const person1 = new Person('Ram', 23);
console.log(person1.describe());

const person2 = new Person('Shyam', 28);
console.log(person2.describe());

//11. Inheritance
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study() {
        return `${this.name} is studying.`;
    }
}
const student = new Student('Sita', 21, 'A-');
console.log(student.describe());
console.log(student.study());  

//14. Complex Array Manipulation
function getHobbies(user){
    return user.reduce((uniqueHobbies, user1) => {
        user1.hobbies.forEach(hobby => {
            if (!uniqueHobbies.includes(hobby)) {
                uniqueHobbies.push(hobby);
            }
        });
        return uniqueHobbies;
    }, []);
}
const user = [
    { name: "Ram", hobbies: ["Playing", "Dancing", "Baking"] },
    { name: "Amy", hobbies: ["Writing", "Painting", "Singing"] },
    { name: "Shyam", hobbies: ["Painting", "Dancing", "Cooking"] }
];

const uniqueHobbies = getHobbies(users);
console.log(uniqueHobbies);

/*1. Why are promises used in JavaScript? Explain the advantages of using promises over
traditional callback functions.
Promises are utilized in JavaScript to handle asynchronous operations more effectively. They offer a cleaner code structure compared to traditional callback functions, preventing issues such as "callback hell" caused by nested callbacks. Additionally, promises simplify error handling with the use of .then() and .catch() for success and error cases.
2. What is a closure in JavaScript? Provide an example.
A closure in JavaScript is a function that retains access to its outer lexical scope even after its parent function has finished executing. This allows the closure to remember and access variables from its enclosing function. For instance:
javascript
Copy code
function outer() {
    let x = 1;
    return function() {
        return x;
    }
}
const inner = outer();
console.log(inner());

3. What is a callback function and why is it used in JavaScript?
A callback function is a function passed as an argument to another function and executed after a certain operation completes. Callbacks are employed
in JavaScript to manage asynchronous operations like file reading, API requests, or user events, enabling the program to continue running while
awaiting completion.

4. What are async/await in JavaScript and how do they improve asynchronous
programming?
Async/await are JavaScript syntactic features that streamline promise handling. They allow asynchronous code to be written in a synchronous style, 
enhancing code readability and maintainability. async designates a function returning a promise, while await pauses execution until the promise is 
resolved or rejected, simplifying asynchronous operation handling.

5. Write the difference between ES6 and JS.
ES6 (ECMAScript 2015) represents a significant update to the JavaScript language, introducing numerous new features and syntax enhancements. 
JavaScript itself is the programming language, while ES6 is a version of the ECMAScript specification defining the language. In essence, ES6 denotes 
a modernized version of JavaScript with enhanced functionalities.

6. What are some of the major features introduced in ES6?
Key features introduced in ES6 include:
Arrow functions for concise function expressions.
Classes for object creation and inheritance management.
Template literals enabling enhanced string interpolation with backticks.
Destructuring for unpacking values from arrays or objects.
Default parameters allowing function parameters to have default values.
Rest and spread operators facilitating manipulation of variable arguments and arrays/objects.
Block-scoped variables and constants with let and const.
Promises offering built-in support for asynchronous programming.
Modules providing syntax for modular code organization with import/export capabilities.
*/