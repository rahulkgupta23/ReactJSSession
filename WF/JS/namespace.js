function MathsFunction(){
    var a=9;
    var b=6;
    function Add(){
        return a+b;
    }
    function Sub(){
        return a+b;
    }
    return {a:Add,b:Sub};
}

var x=MathsFunction();
var y=x.a();
console.log(y);



(function (){
//s1
//s2
//s3
})();


function Customer(V){
    this.a="defValue";
    this.b=V;
    this.x=null;
    this.f1=function(){
        console.log(this.a);
        console.log(this.b);
        console.log(this.x);
    }
}

var a=new Customer("B1");
a.a="A1";
a.f1();

console.log("----------------------");
var a1=new Customer("B2");
a1.x="A2";
a1.f1();

console.log("----------------------");

var d=Customer("www");
console.log(d);