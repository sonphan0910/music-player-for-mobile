function Person() {
    var email = "abc";

    return {
        getEmail: () => {
            return email;
        }
    }
}

const Person1 = new Person();

console.log(Person1)