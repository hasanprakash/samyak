import axios from "axios";

class Validations {
    constructor(flash) {
        this.flash = flash;
    }
    async serverValidations(data) {
        await axios
            .post("http://localhost:8000/api/users/", data)
            .then((res) => {
                if(!res.data.status) {
                    this.flash(res.data.message, 'error');
                }
                else {
                    this.flash('Registration Successful', 'success');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    clientValidations(data) {
        let password = data.password;
        let phoneno = data.phoneno;
        let isValid = true;
        if(password.length < 8) {
            this.flash('Password must be at least 8 characters long', 'error');
            isValid = false;
        }
        if(phoneno.length !== 10) {
            this.flash('Phone number must be exactly 10 digits', 'error');
            isValid = false;
        }
        // check if phoneno is numeric
        for(let i = 0; i < phoneno.length; i++) {
            if(isNaN(parseInt(phoneno[i]))) {
                this.flash('Phone number must be numeric', 'error');
                isValid = false;
                break;
            }
        }
        return isValid;
    }

}

export default Validations;