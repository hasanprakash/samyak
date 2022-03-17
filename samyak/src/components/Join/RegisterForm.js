import BaseButton from '../UI/BaseButton';
import BaseInput from '../UI/BaseInput';

const RegisterForm = () => {
  return (
    <form action="#" class="signin-form">
      <div class="form-group">
        <BaseInput placeholder="Username" />
      </div>
      <div class="form-group">
        <BaseInput placeholder="Password" />
        <span
          toggle="#password-field"
          class="fa fa-fw fa-eye field-icon toggle-password"
        ></span>
      </div>
      <div class="form-group">
        <BaseInput placeholder="Email" />
      </div>
      <div class="form-group">
        <BaseInput placeholder="Year" />
      </div>
      <div class="form-group">
        <BaseInput placeholder="College" />
      </div>
      <div class="form-group">
        <BaseInput placeholder="Phone Number" />
      </div>
      <div class="form-group">
        <BaseInput placeholder="Branch" />
      </div>
      <div class="form-group">
        <BaseButton>Sign In</BaseButton>
      </div>
      <div class="form-group d-md-flex">
        <div class="w-50">
          <label class="checkbox-wrap checkbox-primary">
            Remember Me
            <input type="checkbox" checked />
            <span class="checkmark"></span>
          </label>
        </div>
        <div class="w-50 text-md-right">
          <a href="#" style={{ color: "#fff" }}>
            Forgot Password
          </a>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
