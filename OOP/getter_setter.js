class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}umaima`
    }

    set password(value){
        this._password = value
    }
}

const umaima= new User("umaima@u.ai", "abc")
console.log(umaima.email);