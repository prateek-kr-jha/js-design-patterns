function Player(name, marker) {
    this.name = name; 
    this.marker = marker;
    this.sayName = () => {
        console.log(this.name)
    }

}

let playerOne = new Player("prateek", "x");

console.log(playerOne);