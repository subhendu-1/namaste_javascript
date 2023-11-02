// function outer(){
//     var a = 2;
//     function inner(){
//         console.log(a);
//     }

//     inner();
// }
// var z = outer();
// console.log(z);


function outter(){
    var a = 3;
    function inner(){
        console.log(a);
    }
    var a = 45;
    return inner;
}

var ans = outter();
console.log(ans);

ans();   // Here closure is comming in this picture outter execution context is no longer there so how we can access the value a.   Wehen function return this time this is return along with lexical environment means the reference of a;


function outest(){
    var a = 34;
    function outter(){
        var b = 29;
        function inner(){
            console.log(a,b);
        }
       inner();
    }
    outter();
}

outest();