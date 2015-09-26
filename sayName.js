//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

var Person = function (name, age) {
    this.name = name;
    this.age = age;
}


//Now create three instances of Person with data you make up

var steve = new Person('Steve', 45);
var beth = new Person('Elizabeth', 22);
var cath = new Person('Catherine', 18);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.sayName = function() {
    console.log(this.name);   
}