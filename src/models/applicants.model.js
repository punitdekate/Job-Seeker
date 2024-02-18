const applicants = [];
class ApplicantModel {
    constructor(_name, _email, _contact, _resumePath) {
        this.id = applicants.length + 1;
        this.name = _name;
        this.email = _email;
        this._contact = _contact;
        this.resumePath = _resumePath;
    }
}