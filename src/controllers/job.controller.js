import JobModel from '../models/job.model.js'

export default class JobController {
    addJob(req, res) {
        return res.render("create-new-job", { "errors": null });
    }
    postJobs(req, res) {
        // console.log(req.body);
        const jobDetails = req.body;
        const result = JobModel.createJob(jobDetails);
        if (result) {
            res.send("Job Created Successfully");
        } else {
            res.send("Something went wrong!");
        }
    }
    getJobs(req, res) {
        const jobs = JobModel.getJobList();
        res.render('jobs', { "jobs": jobs });
    }

    getJobDetails(req, res) {
        const id = req.params.id;
        const result = JobModel.getSpecificJob(id);
        // console.log(result);
        if (result) {
            return res.render("view-details", { "job": result });
        } else {
            return res.send("404");
        }

    }
}