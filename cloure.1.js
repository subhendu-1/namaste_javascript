// using setTimeout function in closure

// function x(){
//     let i = 1;
//     setTimeout(function (){
//         console.log(i);
//     },3000);
//     console.log("Namaste JS");
// }

// x();

// when you print in loop

function x(){
    for(var i = 1; i <= 5; i++){   // When we using var this is not a block scope that's why it is reference the same memory location so when indentifier print "namaste JS" after coming back to call set time out this time i value is 6
        // So using let solve this problem
        setTimeout(function (){
            console.log(i);
        },i * 3000);
    }

    console.log("Namaste JS");
}

// x();

// Another Process using new funtion

function x(){

    for(var i = 1; i <= 5; i++){
        function close(i){
            setTimeout(function (){
                console.log(i);
            },i * 3000);
        }
        close(i);
    }

    console.log("Namaste JS");
}

x();