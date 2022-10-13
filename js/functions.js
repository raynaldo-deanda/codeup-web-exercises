function sayHello(name){
    var helloVar = "Hello Codeup!";
    alert(helloVar);
}
sayHello();


function sayHello(name){
    var myName = "Carlos";
}
console.log(myName);



var even = function(x) {
    if (typeof x === "number") {
        if (x % 2 === 0) {
            return true
        } else {
            return false
        }
    } else {
        return false

    }
}


var random = Math.floor((Math.random() * 3) + 1);