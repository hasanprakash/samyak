import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../axios";
import { baseURL } from "../axios";

class Validations {
    constructor(flash) {
        this.flash = flash;
        this.register = this.register ? this.register.disabled = false : null;
    }
    async serverValidations(data) {

        await axios
            .post(baseURL+"users/", data)
            .then((res) => {
                // console.log(res.data);
                if(!res.data.status) {
                    this.flash(res.data.message, 'error');
                    this.register = this.register ? this.register.disabled = false : null;
                }
                else {
                    this.flash('Registration Successful', 'success');
                }
            })
            .catch((err) => {
                console.log(err);
                this.register = this.register ? this.register.disabled = false : null;
            });
    }

    clientValidations(data) {
        let password = data.password;
        let phoneno = data.phoneno;

        let year = data.year;
        let college = data.college;
        let gender = data.gender;
        let branch = data.branch;

        let isValid = true;
        if(password && password.length < 8) {
            this.flash('Password must be at least 8 characters long', 'error');
            this.register = this.register ? this.register.disabled = false : null;
            isValid = false;
        }
        if(phoneno.length !== 10) {
            this.flash('Phone number must be exactly 10 digits', 'error');
            this.register = this.register ? this.register.disabled = false : null;
            isValid = false;
        }
        if(year === 'Select Year') {
            this.flash('Please select year', 'error');
            this.register = this.register ? this.register.disabled = false : null;
            isValid = false;
        }
        if(college === 'Select College') {
            this.flash('Please select college', 'error');
            this.register = this.register ? this.register.disabled = false : null;
            isValid = false;
        }
        if(gender === 'Select Gender') {
            this.flash('Please select gender', 'error');
            this.register = this.register ? this.register.disabled = false : null;
            isValid = false;
        }
        if(branch === 'Select Department') {
            this.flash('Plese select department', 'error');
            this.register = this.register ? this.register.disabled = false : null;
            isValid = false;
        }
        // check if phoneno is numeric
        for(let i = 0; i < phoneno.length; i++) {
            if(isNaN(parseInt(phoneno[i]))) {
                this.flash('Phone number must be numeric', 'error');
                this.register = this.register ? this.register.disabled = false : null;
                isValid = false;
                break;
            }
        }
        return isValid;
    }

}

export default Validations;