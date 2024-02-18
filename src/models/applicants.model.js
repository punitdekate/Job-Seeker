const applicants = [];
import JobModel from "./job.model.js";
export default class ApplicantModel {
    constructor(_jobId, _name, _email, _contact, _resumePath) {
        this.id = applicants.length + 1;
        this.jobId = _jobId
        this.name = _name;
        this.email = _email;
        this.contact = _contact;
        this.resumePath = _resumePath;
    }
    static getApplicants() {
        return applicants;
    }

    static postApplicant(jobId, name, email, contact, fileName) {
        const applicantPresent = applicants.find(applicant => applicant.jobId == jobId && applicant.email == email);
        if (applicantPresent) {
            return { "success": false, "message": "Already Applied!", "errors": null };
        } else {
            const newApplicant = new ApplicantModel(jobId, name, email, contact, fileName);
            applicants.push(newApplicant);
            return { "success": true, "message": "Applied Successfully!", "errors": null }
        }
    }
}