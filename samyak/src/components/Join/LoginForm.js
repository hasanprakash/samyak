import axios from "axios";
import BaseButton from "../UI/BaseButton";
import BaseInput from "../UI/BaseInput";

import { useSnackbar } from 'notistack';

const LoginForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const formHandler = (event) => {
    event.preventDefault();
    let data = {};
    data.username = event.target.username.value.trim();
    data.password = event.target.password.value.trim();
    axios
      .get("http://localhost:8000/api/users/", { params: data })
      .then((res) => {
        if(!res.data.status) 
          flash(res.data.message, 'error');
        else
          flash('Login Successful', 'success');
      })
      .catch((e) => console.log(e));
  };



  const flash = (message, messageVariant) => {
    enqueueSnackbar(message, { variant: messageVariant, autoHideDuration: 3000 });
  };
  return (
    <form className="signin-form" onSubmit={formHandler}>
      <div className="form-group">
        <BaseInput name="username" type="text" placeholder="Username" />
      </div>
      <div className="form-group">
        <BaseInput name="password" type="password" placeholder="Password" />
        <span
          toggle="#password-field"
          className="fa fa-fw fa-eye field-icon toggle-password"
        ></span>
      </div>
      <div className="form-group">
        <BaseButton>Sign In</BaseButton>
      </div>
      <div className="form-group d-md-flex">
        <div className="w-50">
          {/* <label class="checkbox-wrap checkbox-primary">
            Remember Me
            <input type="checkbox" checked />
            <span class="checkmark"></span>
          </label> */}
        </div>
        <div className="w-50 text-md-right">
          <a href="true" style={{ color: "#fff" }}>
            Forgot Password
          </a>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
