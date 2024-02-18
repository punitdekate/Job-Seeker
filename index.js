import express, { urlencoded } from "express";
import expressLayout from 'express-ejs-layouts'
import path from 'path';
import UserController from './src/controllers/user.controller.js';
import { validateUser } from "./src/middlewares/register-user-validation.middleware.js";
import JobController from "./src/controllers/job.controller.js";
import LandingController from "./src/controllers/landing.controller.js";
import session, { Cookie } from "express-session";
import ApplicantController from "./src/controllers/applicants.controller.js";
import { upload } from "./src/middlewares/upload-pdf.middleware.js";
const server = express();

server.use(session({
    secret: "Keypad Cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

// Setup view engine 
server.use(express.static("public"));
server.set('view engine', 'ejs') //setup chich engine we are using
server.set('views', path.join(path.resolve(), 'src', 'views')) //setup path where is our views
server.use(expressLayout);
server.use(express.urlencoded({ 'extended': false }));


const UsersController = new UserController();
const JobsController = new JobController()
const LandingPage = new LandingController();
const ApplicantsController = new ApplicantController();
// server.get('/', LandingPage.getLandingPage);
server.get('/jobs', JobsController.getJobs) //retrieve all jobs
server.post('/jobs', JobsController.postJobs) //post create new job
server.get('/add-job', JobsController.addJob) // render create new job
server.get('/jobs/:id', JobsController.getJobDetails) //to show details
server.post('/jobs/:id', JobsController.getJobDetails)
    // server.get('/jobs/:id', JobsController.getJobDetails) //to show details 
server.post('/apply/:id', upload.single('resume'), ApplicantsController.postApply)

server.get('/', UsersController.getLoginUser)
server.post('/login', UsersController.postLoginUser)
server.get("/register", UsersController.getRegisterUser)
server.post("/register", validateUser, UsersController.postRegisterUser)
server.listen("3400", () => {
    console.log("Server is listening on port no 3400");
})