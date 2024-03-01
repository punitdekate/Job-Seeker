import UserModel from '../models/user.model.js';

export default class UserController {
    getRegisterUser(req, res) {
        return res.render('register-user', { "errors": null });
    }
    postRegisterUser(req, res) {
        const user = req.body;
        const result = UserModel.addUser(user);
        if (!result) {
            return res.render("error404")
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
        res.cookie("userEmail", email, {
            maxAge: 1 * 24 * 60 * 60
        });
        req.session.userId = email;
        return res.redirect('/jobs');
    }
    logout(req, res) {
        req.session.destroy((err) => {
            if (err) {
                return res.render("error404");
            } else {
                res.clearCookies();
                return res.redirect("/");
            }
        })
    }
}