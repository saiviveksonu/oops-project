function Person(e){
//setting the other properties and values
 this.name=e;
this.age=10;
this.sex="male";
}
function Person1(f){
    this.name=f;
    console.log(this);
    this.lastname="Banoth";
    this.salary=10000;
    console.log(this);
}
// when this is in the global scope it pretends to be a window object
console.log(this);
// when this given in the global scope it is added to window
this.alert("1");
// calling the function and passing the value to the function
// here "saivivek" value is passed to e
const sai=new Person("saivivek");
console.log(sai);
// console.log(sai1);
// here sonu value is passed to f
const vivek=new Person1("sonu");
console.log(vivek);
// creating a object method for calculating age
function Calculateage(e,dob){
    this.name=e;
    this.birthday=new Date(dob);
    this.calculate=function(){
        const diff =Date.now()-this.birthday.getTime();
        console.log(diff);
        const agedate=new Date(diff);
        console.log(agedate);
        return Math.abs(agedate.getUTCFullYear()-1970);
    }
}
// constructor object is passed here
const cool=new Calculateage("hello","9-10-1980");
console.log(cool);
console.log(cool.calculate());
// inbuilt constructors
// strings
 const a="sai";
 console.log(typeof a);
 const b=new String("saivivek");
//  adding a property to the string
  b.name="sonu";
 console.log( b.name);
//  number
const num1=5;
console.log(typeof num1);
const num2=new Number(10);
console.log(typeof num2);
// boolean
const bol=true;
console.log(typeof bol);
const bol1=new Boolean(true);
console.log(typeof bol1);
// function
const getsum1= new Function(x,y),
return x+y;
console.log(getsum1(1,1));
