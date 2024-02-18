import { body, validationResult } from 'express-validator'

export const validateUser = async(req, res, next) => {
    const rules = [
        body('email').isEmail().withMessage("Invalid email"),
        body('name').notEmpty().withMessage("Name is required"),
        body('password').notEmpty().withMessage('Password is required'),
        body('password').isLength({ min: 8 }).withMessage('Password should be greater the length 8'),
    ]

    await Promise.all(rules.map(rule => rule.run(req)));

    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        const errors = validationErrors.array();
        return res.render('register-user', { "errors": errors });
    }
    next();
}