let user1 = {
    name: "John",
    surname: "Smith",
    get fullName() {
        return `${this.name} ${this.surname}`;
    },
    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }

}

user1.fullName = "rajesh khanna";
// console.log(user.fullName);
// console.log(user.surname);
// console.log(user.name);

//basic class syntax:
// class MyClass {
//     constructor() {};
//     method1(){};
//     method2(){};
//     method3(){};
// }

class User {
    constructor(name) {
        this.name = name;
    }
    surname = prompt("Name, please?", "John");
    sayHi() {
        console.log(this.name);
    }
}

let user = new User("John");
user.sayHi();
//methods in class are stored in object prototype
// console.log(User[[IsClassConstructor]])