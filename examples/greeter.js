var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return User;
}());
function greeter(person) {
    return 'hello' + person.firstName + ' ' + person.lastName;
}
var a = new User('wang', 'sy');
console.log(greeter(a));
