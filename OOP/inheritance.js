class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const sir = new Teacher("sir", "sir@teacher.com", "123")

sir.logMe()
const person1 = new User("person1")

person1.logMe()

console.log(sir instanceof User);
// extends  creates inheritance between classes
// super() calls the parent class constructor
// Child class inherits:
// 1.Properties
// 2.Methods
// Parent class cannot access child-specific methods
