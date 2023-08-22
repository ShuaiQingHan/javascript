//构造函数创建对象
// function Person (){

// }
// var person = new Person();
// person.name = 'kv';
// console.log(person.name)

function Person(){}
// Person.prototype.name = 'kv';
// var person1 = new Person()
// var person2 = new Person()
// console.log(person1.name)
// console.log(person2.name)

var person = new Person();
console.log(person.__proto__ === Person.prototype)