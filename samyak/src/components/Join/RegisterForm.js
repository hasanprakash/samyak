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

  render() {
    const { userList } = this.state;
    return (
      <div>
        <a>
          {userList.map((userList) => (
            <p key={userList.username}>
              {userList.username}
            </p>
          ))}
        </a>

        <form className="signin-form">
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
            <BaseInput placeholder="Email" />
          </div>
          <div className="form-group">
            <BaseInput placeholder="Year" />
          </div>
          <div className="form-group">
            <BaseInput placeholder="College" />
          </div>
          <div className="form-group">
            <BaseInput placeholder="Phone Number" />
          </div>
          <div className="form-group">
            <BaseInput placeholder="Branch" />
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
