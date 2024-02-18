const jobs = [{
    id: 1,
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
}, {
    id: 1,
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
}, {
    id: 1,
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
}, {
    id: 1,
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
}