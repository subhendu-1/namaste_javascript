// The main differecne of this function is HOSTING  When you call before the initializtion this 'b' variablem is give it type error

// a();
// b();

// function statement & declearation :-The way of function deleclearation
function a(){
    console.log("Subhendu Adak");
}

// function expression

var b = function (){
    console.log("Function Expression");
}

// a();
// b();


// Anonymous function :- This is used when function used as a value otherwise it is give it syntext error

// function (){
//     console.log("syntex error");
// }


// Named function Expression :- when you give it in anonymous functin name in function expression. It is give reference error wnen you call this function name because this functin not have a outer scope.


var c = function xyz(){
    console.log("Function Expression");
}

// c();
// xyz();


// first class function / first class citizens:- ability ot use function as well as you want.
let param = 3;

const citizens = function (param){
    // return function (){
    //     console.log(param);
    // }

   console.log(param);
}

// console.log(citizens);

citizens(param);






