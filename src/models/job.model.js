const jobs = [{
    id: 1,
    jobCategory: 'software',
    jobDesignation: 'Developer',
    jobLocation: 'Delhi',
    companyName: 'Infosys',
    salary: '500000',
    applyBy: 'Infosys',
    skillsRequired: 'C++,Java,PHP,Jquery',
    numberOfOpenings: '10',
    jobPosted: '12/06/24',
    applicants: 'Engineer'
}, {
    id: 2,
    jobCategory: 'software',
    jobDesignation: 'Tester',
    jobLocation: 'Noida',
    companyName: 'Deloitte',
    salary: '500000',
    applyBy: 'Deloitte',
    skillsRequired: 'C++,Java,HTML,CSS',
    numberOfOpenings: '100',
    jobPosted: '12/06/24',
    applicants: 'Engineer'
}, {
    id: 3,
    jobCategory: 'Tester',
    jobDesignation: 'Automation Tester',
    jobLocation: 'Pune',
    companyName: 'TCS',
    salary: '500000',
    applyBy: 'HM ',
    skillsRequired: 'C++,Java',
    numberOfOpenings: '100',
    jobPosted: '12/06/24',
    applicants: 'Engineer'
}, {
    id: 4,
    jobCategory: 'software',
    jobDesignation: 'Developer',
    jobLocation: 'Noida',
    companyName: 'HM',
    salary: '500000',
    applyBy: 'HM ',
    skillsRequired: 'C++,Java',
    numberOfOpenings: '100',
    jobPosted: '12/06/24',
    applicants: 'Engineer'
}];
export default class JobModel {
    constructor(_jobCategory, _jobDesignation, _jobLocation, _companyName, _salary, _applyBy, _skillsRequired, _numberOfOpening, _jobPosted, _applicants) {
        this.id = jobs.length + 1;
        this.jobCategory = _jobCategory;
        this.jobDesignation = _jobDesignation;
        this.jobLocation = _jobLocation;
        this.companyName = _companyName;
        this.salary = _salary;
        this.applyBy = _applyBy;
        this.skillsRequired = _skillsRequired;
        this.numberOfOpening = _numberOfOpening;
        this.jobPosted = _jobPosted;
        this.applicants = _applicants;
    }

    static createJob(jobDetails) {
        const { jobCategory, jobDesignation, jobLocation, companyName, salary, applyBy, skillsRequired, numberOfOpening, jobPosted, applicants } = jobDetails;
        const newJob = new JobModel(jobCategory, jobDesignation, jobLocation, companyName, salary, applyBy, skillsRequired, numberOfOpening, jobPosted, applicants);
        jobs.push(newJob);
        return true;
    }
    static getJobList() {
        return jobs;
    }
    static getSpecificJob(id) {
        const job = jobs.find(job => job.id == id);
        return job;
    }
    static delete(id) {
        const index = jobs.findIndex(job => job.id == id);
        if (index >= 0) {
            const deletedJob = jobs[index];
            jobs.splice(index, 1);
            return { "success": true, "msg": deletedJob };
        }
        return { "success": false, "msg": "Job not found!" };

    }
    static update(id, jobDetails) {
        const index = jobs.findIndex(job => job.id == id);
        if (index >= 0) {
            const updatedJob = {
                "id": id,
                "jobCategory": jobDetails.jobCategory,
                "jobDesignation": jobDetails.jobDesignation,
                "jobLocation": jobDetails.jobLocation,
                "companyName": jobDetails.companyName,
                "salary": jobDetails.salary,
                "applyBy": jobDetails.applyBy,
                "skillsRequired": jobDetails.skillsRequired,
                "numberOfOpening": jobDetails.numberOfOpening,
                "jobPosted": jobDetails.jobPosted,
                "applicants": jobDetails.applicants,
            }
            jobs[index] = updatedJob;
            return { "success": true, "msg": updatedJob }
        } else {
            return { "success": false, "msg": "Something went wrong" }
        }
    }
}