class person {
    constructor(firstname, lastname, dob) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthday = new Date(dob);
    }
    // method1
    greeting() {
        return "hello there" + this.firstname + " " + this.lastname;
    }
    // method2
    calculate() {
        const diff = Date.now() - this.birthday.getTime();
        console.log(diff);
        const agedate = new Date(diff);
        console.log(agedate);
        return Math.abs(agedate.getUTCFullYear() - 1970);
    }
    // method3
    getsmarried(newlastname) {
        return this.lastname = newlastname;
    }
}
const sai = new person("saivivek", "banoth", "11-13-1980");
console.log(sai.calculate());
console.log(sai.getsmarried("azmeera"));
console.log(sai);

// inheritance in classes
class person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    // declaring the methods
    greeting(){
        return "hello there he is mr"+" "+this.firstname;
    }
}
const name1=new person("saivivek","banoth");
console.log(name1.greeting());
// 
// creating a sub class customer of person class(inheritance of person class properties to customer class)
class Customer extends person{
    constructor(firstname,lastname,phone,membership){
// calling the parent class constructor person
// and creating a object
super(firstname,lastname);
this.phone=phone;
this.membership=membership;
    }
    // creating the customer specific methods
    customerid(hlo){
return "the id of mrs"+" "+this.firstname+" is "+ hlo;
    }
}
const name2=new Customer("soumya","banoth","8309334263","standard");
 console.log(name2.greeting());
// caalling the methood of customer class
console.log(name2.customerid("1000523"));