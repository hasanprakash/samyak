import axios from 'axios';
import BaseButton from '../UI/BaseButton';
import BaseInput from '../UI/BaseInput';

const LoginForm = () => {

  const formHandler = (event) => {
    event.preventDefault();
    let data = {}
    data.username = event.target.username.value.trim();
    data.password = event.target.password.value.trim();
    axios
      .get("http://localhost:8000/api/users/", data)
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
  }

  return (
    <form className="signin-form" onClick={formHandler}>
      <div className="form-group">
        <BaseInput placeholder="Username" />
      </div>
      <div className="form-group">
        <BaseInput placeholder="Password" />
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
