import ApplicantModel from "../models/applicants.model.js";

export default class ApplicantController {
    postApply(req, res) {
        // console.log(req.body, req.file);
        const jobId = req.params.id;
        const { name, email, contact } = req.body;
        const fileName = "public/resumes/" + req.file.filename;
        const result = ApplicantModel.postApplicant(jobId, name, email, contact, fileName);
        if (result.success) {
            res.send(result.message);
        } else {
            res.send(result.message);
        }
    }
}