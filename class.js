class Person{
    constructor(firstname,Dob,location,job,age)
    {
        this.firstname = firstname;
        this.Dob = Dob;
        this.location = location;
        this.job=job;
        this.age=age;
    }
}
var person1 = new Person("king","5-03-1993","madurai","IT","30");
var person2 = new Person("neelan","20-5-1995","pudukottai","IT","27");
var person3 = new Person("kumar","4-10-1991","trichy","IT","33");
var person4 = new Person("jason","5-12-2007","combiator","IT","26");
var person5 = new Person("selva","9-4-1992","kodaikanal","IT","31");

console.log(person1.firstname);
console.log(person1.Dob);
console.log(person1.location);
console.log(person1.job);
console.log(person1.age);


console.log(person2.firstname);
console.log(person2.Dob);
console.log(person2.location);
console.log(person2.job);
console.log(person2.age);

console.log(person3.firstname);
console.log(person3.Dob);
console.log(person3.location);
console.log(person3.job);
console.log(person3.age);

console.log(person4.firstname);
console.log(person4.Dob);
console.log(person4.location);
console.log(person4.job);
console.log(person4.age);

console.log(person5.firstname);
console.log(person5.Dob);
console.log(person5.location);
console.log(person5.job);
console.log(person5.age);


console.log(`All the Person Names are "person1" : ${person1.firstname}
"person2":${person2.firstname}
"person3":${person3.firstname}
"person4":${person4.firstname}
"person5":${person5.firstname}`)