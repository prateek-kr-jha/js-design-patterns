function createUser(name) {
    const discordName = "@" + name;
    return { name, discordName};
}

let p1 = createUser("prateek");

console.log(p1);
console.log(p1.__proto__);
