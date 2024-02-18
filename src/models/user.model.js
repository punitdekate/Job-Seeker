const users = [];
export default class UserModel {
    constructor(_name, _email, _password) {
        this.id = users.length + 1;
        this.name = _name;
        this.email = _email;
        this.password = _password;
    }

    static addUser(user) {
        // console.log(user);
        const { name, email, password } = user;
        const newUser = new UserModel(name, email, password);
        users.push(newUser);
        return true;
    }
    static postLogin(_email, _password) {
        const result = users.find(user => (user.email == _email && user.password == _password));
        // console.log(users, result);
        return result;
    }
}