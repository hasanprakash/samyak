import BaseButton from "../UI/BaseButton";
import BaseInput from "../UI/BaseInput";
import React, { Component } from "react";
import axios from "axios";
import BaseDropDown from "../UI/BaseDropDown";
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

  genderData = ['Gender', 'Male', 'Female', 'Others']
  yearData = ['Select Year', '1st', '2nd', '3rd', '4th', 'Faculty', 'Alumni', 'Others']
  departmentData = ['Select Department', 'CSE', 'ECE', 'EEE', 'ME', 'ECM', 'BCA', 'CE', 'IT', 'CHE', 'MECH', 'CIVIL', 'LAW', 'BBA', 'MBA', 'CSIT', 'BT', 'AI&DS', 'HOTEL MANG', 'FINANCE', 'ARCH.T', 'Others']
  collegeData = ['Select College', 'KL Vijayawada', 'KL Hyderabad', 'Others']

  registerFormHandler(event) {
    event.preventDefault();
    let data = {}
    data.username = event.target.username.value.trim();
    data.password = event.target.password.value.trim();
    data.email = event.target.email.value.trim();
    data.year = event.target.year.value.trim();
    data.college = event.target.college.value.trim();
    data.phoneno = event.target.phoneno.value.trim();
    data.gender = event.target.gender.value.trim();
    data.branch = event.target.branch.value.trim();

    axios
      .post("http://localhost:8000/api/users/", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  render() {
    const { userList } = this.state;
    return (
      <div>
        <a href="true">
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
            <BaseDropDown name="year" options={this.yearData} />
          </div>
          <div className="form-group">
            <BaseDropDown name="college" options={this.collegeData} />
          </div>
          <div className="form-group">
            <BaseInput name="phoneno" type="number" placeholder="Phone Number" />
          </div>
          <div className="form-group">
            <BaseDropDown name="gender" options={this.genderData} />
          </div>
          <div className="form-group">
            <BaseInput name="branch" type="text" placeholder="Branch" />
          </div>
          <div className="form-group">
            <BaseButton>Sign Up</BaseButton>
          </div>
          <div className="form-group d-md-flex">
            <div className="w-50">
              {/* <label className="checkbox-wrap checkbox-primary">
                Remember Me
                <input type="checkbox" checked />
                <span className="checkmark"></span>
              </label> */}
            </div>
            <div className="w-50 text-md-right">
              <a href="true" style={{ color: "#fff" }}>
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
