import { useState } from "react";
import styled from "styled-components";
import "./UserProfile.css";
import { useSnackbar } from 'notistack';
import Validations from "../../Utils/Validations";
import NavBarSpace from "../BaseComponents/NavBarSpace";
import DetailsObject from "./DetailsObject";
import ProfileButton from "../UI/ProfileButton";
import EventRecord from "./EventRecord";

import samyakLogo from "./samyak_logo.png";
import correct from "./payment_status/correct.jpg";
import wrong from "./payment_status/wrong.jpg";
import axiosInstance from "../../axios";

const EditProfile = styled.div`
  float: right;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserProfile = (props) => {


  const { enqueueSnackbar } = useSnackbar();
  const flash = (message, messageVariant) => {
    enqueueSnackbar(message, { variant: messageVariant, autoHideDuration: 3000 });
  };
  const validations = new Validations(flash);
  const [collegeType, setCollegeType] = useState("dropdown");

  let paidStatus = props.user
    ? props.user.payment
      ? props.user.payment.payment_status.toString()
      : "false"
    : "false";
  let registeredEvents = props.registeredEvents;
  // typecast boolean to string
  const [isUpdating, setIsUpdating] = useState(false);

  let name = props.user.first_name
    ? props.user.first_name + " " + props.user.last_name
    : "";
  let username = props.user.username;
  let email = props.user ? props.user.email : "samyak@gmail.com";
  let phone =
    (props.user && props.user.profile
      ? props.user.profile.phone
      : "1234567890");
  let branch = props.user
    ? props.user.profile
      ? props.user.profile.branch
      : "RRR"
    : "RRR";
  let year = props.user
    ? props.user.profile
      ? props.user.profile.year_of_study
      : "0"
    : "0";
  let college = props.user
    ? props.user.profile
      ? props.user.profile.college_name
      : "KLU"
    : "KLU";
  let gender = props.user
    ? props.user.profile
      ? props.user.profile.gender
      : "FEMALE"
    : "FEMALE";

  let genderData = ["Select Gender", "Male", "Female", "Others"];
  let yearData = [
    "Select Year",
    "1st",
    "2nd",
    "3rd",
    "4th",
    "Faculty",
    "Alumni",
    "Others",
  ];
  let branchData = [
    "Select Department",
    "FED",
    "CSE",
    "CS&IT",
    "AI&DS",
    "ECE",
    "M.Sc Chemistry",
    "EEE",
    "ECM",
    "ME",
    "CE",
    "BT",
    "BCA",
    "BBA",
    "MBA",
    "B.COM",
    "M.COM",
    "BA-IAS",
    "LLB",
    "BFA",
    "MCA",
    "BCA",
    "B.SC.VC",
    "ARCHITECTURE",
    "BHM",
    "AGRICULTURE",
    "B.PHARM",
    "M.PHARM",
    "PHARMA D",
    "Others",
  ];
  let collegeData = [
    "Select College",
    "KL Vijayawada",
    "KL Hyderabad",
    "Others",
  ];

  let dataToUpdate = {
    Email: email,
    Phone: phone,
    Branch: branch,
    Year: year,
    Username: username,
    College: college,
    Gender: gender,
  };

  const toggleEditOption = () => {
    setIsUpdating(true);
  };
  const handleSaveOption = () => {
    // props.onClick();
    console.log(dataToUpdate);
    let clientData = {}
    clientData.email = dataToUpdate.Email;
    clientData.phoneno = dataToUpdate.Phone;
    clientData.year = dataToUpdate.Year;
    clientData.college = dataToUpdate.College;
    clientData.gender = dataToUpdate.Gender;
    clientData.branch = dataToUpdate.Branch;
    let clientStatus = validations.clientValidations(clientData);
    // let serverStatus = validations.serverValidations(clientData);
    if(clientStatus) {
      // update to database
      axiosInstance
        .post('../home/updateprofile', clientData)
        .then(res => {
          console.log(res.data);
          flash("Profile Updated Successfully", "success");
          // props.onClick();
        })
        .catch((e) => {
          console.log(e);
        })
      setIsUpdating(false);
    }
  };

  const toggleCollegeType = () => {
    if (collegeType === "dropdown") {
      setCollegeType("input");
    } else {
      setCollegeType("dropdown");
    }
  }

  return (
    <div>
      <div
        className="container"
        style={{ width: "100%", margin: "auto", padding: "auto" }}
      >
        <NavBarSpace />
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={samyakLogo}
                      alt="Admin"
                      className="rounded-circle"
                      width="200"
                      height="200"
                      style={{ backgroundColor: "#f5f5f5" }}
                    />
                    <div className="mt-3">
                      <h4>{props.user ? props.user.username : "@samyak"}</h4>
                      <p className="text-secondary mb-1">
                        {props.user
                          ? props.user.first_name + " " + props.user.last_name
                          : ""}
                      </p>
                      <ProfileButton>Change Password</ProfileButton>
                      {paidStatus === "true" ? (
                        <ProfileButton>PAID</ProfileButton>
                      ) : (
                        <ProfileButton onClick={props.handlePayment}>
                          <a style={{ color: "#007bff" }} href="#0">
                            Pay now
                          </a>
                        </ProfileButton>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <EventRecord>REGISTERED EVENTS : </EventRecord>
                  {registeredEvents
                    ? registeredEvents.map((event) => {
                        return <EventRecord>{event.event_name}</EventRecord>;
                      })
                    : null}
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <br></br>
                  <DetailsObject heading="Name" value={name} />
                  <DetailsObject 
                    heading="Email" 
                    value={email} 
                    isUpdating={isUpdating}
                    type="input"
                    dataToUpdate={dataToUpdate}
                  />
                  <DetailsObject
                    heading="Phone"
                    value={phone}
                    isUpdating={isUpdating}
                    type="input"
                    dataToUpdate={dataToUpdate}
                  />
                  <DetailsObject
                    heading={"Branch"}
                    value={branch}
                    isUpdating={isUpdating}
                    type="dropdown"
                    data={branchData}
                    dataToUpdate={dataToUpdate}
                  />
                  <DetailsObject
                    heading="Year"
                    value={year}
                    isUpdating={isUpdating}
                    type="dropdown"
                    data={yearData}
                    dataToUpdate={dataToUpdate}
                  />
                  <DetailsObject
                    heading="Username"
                    value={props.user.username}
                  />
                  <DetailsObject
                    heading="College"
                    value={college}
                    isUpdating={isUpdating}
                    type={collegeType}
                    data={collegeData}
                    dataToUpdate={dataToUpdate}
                    toggleCollegeType={toggleCollegeType}
                  />
                  <DetailsObject
                    heading="Gender"
                    value={gender}
                    isUpdating={isUpdating}
                    type="dropdown"
                    data={genderData}
                    dataToUpdate={dataToUpdate}
                  />
                  <DetailsObject
                    heading="Payment Status"
                    tag={
                      props.user &&
                      props.user.payment &&
                      props.user.payment.payment_status
                        ? correct
                        : wrong
                    }
                  />
                  <div className="row">
                    {}
                    <EditProfile>
                      {!isUpdating ? (
                        <ProfileButton onClick={toggleEditOption}>
                          EDIT PROFILE
                        </ProfileButton>
                      ) : (
                        <ProfileButton onClick={handleSaveOption}>
                          SAVE
                        </ProfileButton>
                      )}
                    </EditProfile>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
