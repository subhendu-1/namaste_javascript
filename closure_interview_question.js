function outest(){
    let c = 40;
    function outter(b){
        // let a = 10;
        function inner(){
            console.log(a,b,c);
        }
        // let a = 10;
        return inner;
    }
    return outter;
}


let a = 100;  //This is not effect the outer function because it is store in global execution context   But inner function not get this a in local scope this time this is take this 'a'
// outer()();
var ans = outest()("Subhendu Adak");
ans();



