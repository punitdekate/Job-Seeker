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
            const jobs = JobModel.getJobList();
            return res.render("jobs", { "jobs": jobs, "userEmail": req.cookies.userEmail });
        } else {
            return res.render("error404");
        }

    }
    getJobs(req, res) {
        const jobs = JobModel.getJobList();
        return res.render('jobs', { "jobs": jobs, "userEmail": req.cookies.userEmail });
    }

    getJobDetails(req, res) {
        const id = req.params.id;
        const result = JobModel.getSpecificJob(id);
        // console.log(result);
        if (result) {
            return res.render("view-details", { "job": result, "userEmail": req.cookies.userEmail });
        } else {
            return res.render("error404");
        }

    }
    putJobDetails(req, res) {
        const jobDetails = req.body;
        const id = req.params.id;
        const result = JobModel.update(id, jobDetails);
        if (result.success) {
            return res.redirect(`/jobs/${id}`);
        } else {
            return res.render("error404");
        }
    }

    deleteJob(req, res) {
        const result = JobModel.delete(req.params.id);
        if (result.success) {
            const jobs = JobModel.getJobList();
            return res.render('jobs', { "jobs": jobs, "userEmail": req.cookies.userEmail });
        } else {
            return res.render("error404");
        }
    }

    addJob(req, res) {
        return res.render("add-job", { "errors": null, "userEmail": req.cookies.userEmail });
    }
}