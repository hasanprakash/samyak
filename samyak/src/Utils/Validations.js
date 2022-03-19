module.exports = class Validations {
    constructor(flash) {
        this.flash = flash;
    }
    serverValidations(username, email) {
        // check if user is already there in db
    }

    clientValidations(password, phoneno) {
        let isValid = true;
        if(password.length < 8) {
            this.flash('Password must be at least 8 characters long', 'error');
            isValid = false;
        }
        if(phoneno.length < 10) {
            this.flash('Phone number must be at least 10 digits long', 'error');
            isValid = false;
        }
        return isValid;
    }

}