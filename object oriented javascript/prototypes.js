// function Calculateage(e, f, dob) {
//     this.firstname = e;
//     this.lastname = f;
//     this.birthday = new Date(dob);
//     // this.calculate=function(){
//     //     const diff =Date.now()-this.birthday.getTime();
//     //     console.log(diff);
//     //     const agedate=new Date(diff);
//     //     console.log(agedate);
//     //     return Math.abs(agedate.getUTCFullYear()-1970);
//     // }
// }
// // declaring the this.calculate method outside the constructor instead of declaring inside of the constructor
// Calculateage.prototype.calculate = function () {
//     const diff = Date.now() - this.birthday.getTime();
//     console.log(diff);
//     const agedate = new Date(diff);
//     console.log(agedate);
//     return Math.abs(agedate.getUTCFullYear() - 1970);
// }
// // prototype is also used for the manupulation of the data
// Calculateage.prototype.getsMarried=function(g){
// this.lastname=g;
// }
// const soumya = new Calculateage("HELLO", "soumya", "march 20 1978");
// console.log(soumya);
// // setting the new lastname by calling the getsmarried function
// soumya.getsMarried("banoth");
// console.log(soumya.lastname);
// const saivivek = new Calculateage("hello", "sai", "9-10-1980");
// // calling the prototype function and getting its value
// console.log(soumya.calculate());

// // prototypal inheritence
// function Func(firstname,lastname){
//     this.firstname=firstname;
//     this.lastname=lastname;
// }
// // prototype method of Func 
// Func.prototype.greeting=function(j){
//     return j +" "+ "hello this is"+" "+this.firstname+" " +this.lastname;
// }
// // calling the function Func
// const person1=new Func("saivivek","banoth");
// console.log(person1.greeting("gud morning"));

// // creating the customer
// function Customer(firstname,lastname,mobilenumber,membership){
//   Func.call(this,firstname,lastname);
//   this.mobilenumber=mobilenumber;
//   this.membership=membership;  
// }
// // inherit the Func prototype methods
// Customer.prototype=Object.create(Func.prototype);
// // changing the name of the protype as customer
// Customer.prototype.constructor=Customer;
// // create customer
// const customer1=new Customer("sonu","banoth","8309334263","standard");
// console.log(customer1.greeting("good morning"));
// // 
// // 
// // 
// // create.object()
// function Animal(dog,cat,mouse){
//     this.animalname="dog";
//     this.animalname1="cat";
//     this.animalname2="mouse"
// }
let obj ={
    animalname:"bruno",
    animalname1:"chako",
    animalname2:function(){
        return this.animalname+this.animalname1;
    }
}
let obj1=Object.create(obj,{
    fullname:{
        configurable:true,
        writable:true,
        enumerable:true,
        value:"lion"
    },
    canbowl:{
        configurable:true,
        writable:true,
        enumerable:true,
        value:function(){
            return obj1.animalname+obj1.animalname1+obj1.fullname;
        }
    }
});
console.log(obj1.canbowl());