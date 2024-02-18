import UserModel from '../models/user.model.js';

export default class UserController {
    getRegisterUser(req, res) {
        return res.render('register-user', { "errors": null });
    }
    postRegisterUser(req, res) {
        const user = req.body;
        const result = UserModel.addUser(user);
        if (!result) {
            res.send("Something is going wrong!")
        }
        return res.render("login-user", { "errors": null });
    }
    getLoginUser(req, res) {
        return res.render("login-user", { "errors": null });
    }
    postLoginUser(req, res) {
        const { email, password } = req.body;
        const result = UserModel.postLogin(email, password);
        if (!result) {
            return res.render("login-user", { "errors": "Invalid Credentials" })
        }
        req.session.userEmail = email;
        res.render('landing-page');
    }
    logout(req, res) {
        req.session.destroy((err) => {
            if (err) {
                return res.send("404");
            } else {
                return res.redirect("/");
            }
        })
    }
}