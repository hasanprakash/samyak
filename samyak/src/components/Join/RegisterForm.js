import BaseButton from "../UI/BaseButton";
import BaseInput from "../UI/BaseInput";
import React, { Component } from "react";
import axios from "axios";
//import {useState} from 'react';

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      userList: [],
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("api/users/")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  registerFormHandler(event) {
    event.preventDefault();
    let data = {}
    data.username = event.target.username.value;
    data.password = event.target.password.value;
    data.email = event.target.email.value;
    data.year = event.target.year.value;
    data.college = event.target.college.value;
    data.phoneno = event.target.phoneno.value;
    data.branch = event.target.branch.value;
    console.log(data);
  }

  render() {
    const { userList } = this.state;
    return (
      <div>
        <a href>
          {userList.map((userList) => (
            <p key={userList.username}>
              {userList.username}
            </p>
          ))}
        </a>

        <form className="signin-form" onSubmit={this.registerFormHandler}>
          <div className="form-group">
            <BaseInput name="username" type="text" placeholder="Username" />
          </div>
          <div className="form-group">
            <BaseInput id="password-field" name="password" type="password" placeholder="Password" />
            <span
              toggle="#password-field"
              className="fa fa-fw fa-eye field-icon toggle-password"
            ></span>
          </div>
          <div className="form-group">
            <BaseInput name="email" type="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <BaseInput name="year" type="number" placeholder="Year" />
          </div>
          <div className="form-group">
            <BaseInput name="college" type="text" placeholder="College" />
          </div>
          <div className="form-group">
            <BaseInput name="phoneno" type="number" placeholder="Phone Number" />
          </div>
          <div className="form-group">
            <BaseInput name="branch" type="text" placeholder="Branch" />
          </div>
          <div className="form-group">
            <BaseButton>Sign In</BaseButton>
          </div>
          <div className="form-group d-md-flex">
            <div className="w-50">
              <label className="checkbox-wrap checkbox-primary">
                Remember Me
                <input type="checkbox" checked />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="w-50 text-md-right">
              <a href style={{ color: "#fff" }}>
                Forgot Password
              </a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
