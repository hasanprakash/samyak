import axiosInstance from "../../axios";
import BaseButton from "../UI/BaseButton";
import BaseInput from "../UI/BaseInput";

import { useSnackbar } from 'notistack';

const LoginForm = (props) => {
  // let storage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
  // const access_token = storage ? storage.user[0].tokens.access_token : null;
  const { enqueueSnackbar } = useSnackbar();
  const formHandler = (event) => {
    event.preventDefault();
    let data = {};
    data.username = event.target.username.value.trim();
    data.password = event.target.password.value.trim();
    axiosInstance
      .post("token/", {
        username: data.username,
        password: data.password,
      })
      .then((response) => {
          if(response.status === 200) {
            axiosInstance
              .get("user/", {
                headers: {
                  Authorization: 'JWT ' + response.data.access,
                }
              })
              .then((res) => {
                // console.log(res);
                let userobj = {
                  user: [
                    {
                      tokens: {
                        access_token: response.data.access,
                        refresh_token: response.data.refresh,
                      },
                    },
                    {
                      details: {
                        user_id: res.data.id,
                        username: res.data.username,
                        user_email: res.data.email,
                        user_phone: res.data.profile.phone,
                        isAuth: true
                      }
                    }
                  ]
                } 
                // console.log(userobj);
                if( localStorage.getItem('user')!== null && 
                    localStorage.getItem('user') !== undefined && 
                    localStorage.getItem('user') !== '' && 
                    localStorage.getItem('user') !== 'null' ) 
                  flash("Session Updated!!", "success");
                else
                  flash("Login Successful", "success");
                
                localStorage.removeItem('user');
                localStorage.setItem('user', JSON.stringify(userobj));
                props.setIsAuth(true);
              })
              .catch((error) => {
                console.log(error);
              });
          }
        }
      )
      .catch((e) => {
        // console.log(e);
        enqueueSnackbar("Invalid Username or Password", {
          variant: "error",
        });
      });
    // axiosInstance
    //   .get("users/", { params: data })
    //   .then((res) => {
    //     console.log(res.data);
    //     if(!res.data.status) 
    //       flash(res.data.message, 'error');
    //     else
    //       flash('Login Successful', 'success');
    //   })
    //   .catch((e) => console.log(e));
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
          <a href="0#" style={{ color: "#fff" }}>
            Forgot Password
          </a>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
