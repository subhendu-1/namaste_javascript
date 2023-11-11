document.addEventListener("DOMContentLoaded",function(){
// setTimeout(function (){
//     console.log("Time out");
// },5000);

// function x(y){
//     console.log("This is x function");
//     console.log(y);
// }

// x(function (){
//     console.log("This is y function");
// });



// deep about EventListener
function attachedEventListener(){
    let count = 0;
    const element =  document.getElementById("ClickMe");
    if(element){
        element.addEventListener("click",function xyz(){
            console.log("click here",++count);
        });
    }
}

attachedEventListener();

});

