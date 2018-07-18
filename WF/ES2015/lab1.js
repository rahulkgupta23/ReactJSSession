console.log(a);
let a;

// var b=6;
// if(b>2){
//     var a=5;
// }
// console.log(a);

// function abcd(){
//     var b=6;
//     if(b>2){
//         var a=5;
//     }
// }
// abcd();
// console.log(b);
// var b;


// "use strict";
// a=6;


// var a=5;
// console.log(a);
// var b=6;
// if(b>2){
//     var a=99;
//     console.log(a);
// }
// console.log(a);



for(var i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },100);
}

for(var i=0;i<5;i++){
    a(i);
}
function a(j){
    setTimeout(function(){
      console.log(j);
    },100);
}