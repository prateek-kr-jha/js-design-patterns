// console.log(x);
function thisTest() {
    console.log("inside function!!");
    this.x = 50;
    let x = 78;
    console.log(this)
    function inner() {
        console.log(x)
        this.x = 40;
        console.log(this)
    }
    inner();
    console.log(x)
}
thisTest();
console.log(x);
//function invocation this is global object
// this is undefined in function invocation in strict mode
// this is the object that owns the method in a method invocation